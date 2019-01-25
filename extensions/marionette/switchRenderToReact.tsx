const Marionette = require('backbone.marionette')
import { render } from 'react-dom'
import * as React from 'react'
const Parser = require('html-react-parser')
import { unmountComponentAtNode } from 'react-dom'

type Parameters = {
  /**
   * Setting to true will cause the render to convert everything to react, not just templates written in JSX
   * This can have unintended consequences, so the recommendation is to leave this as false.
   * Possible consequences are inputs getting stuck (setting value without onChange), and whitespace disappearing.
   * However, it does allow taking advantage of the advanced dom diffing capabilities of React even when using
   * something like handlebars templating.  If you don't need this, I would recommend setting it to false.
   */
  aggressive: boolean
  /**
   * Allows wrapping each React root with a context, such as a ThemeProvider.
   */
  Provider?: any
}

/**
 * Updates the call to Marionette.Renderer.render to pass in a third parameter
 * This is done for us in Marionette 2 and above
 */
const patchMarionetteOneRender = () => {
  Marionette.ItemView.prototype.render = function() {
    this.isClosed = false

    this.triggerMethod('before:render', this)
    this.triggerMethod('item:before:render', this)

    let data = this.serializeData()
    data = this.mixinTemplateHelpers(data)

    const template = this.getTemplate()
    let html = ''
    if (template === undefined) {
      console.warn(
        'Template is missing for view.  Defaulting to a blank template.'
      )
    } else {
      html = Marionette.Renderer.render(template, data, this)
    }

    this.attachElContent(html)
    this.bindUIElements()

    this.triggerMethod('render', this)
    this.triggerMethod('item:rendered', this)

    return this
  }
}

/**
 * Allows us to apply version specific patches
 */
const applyVersionSpecificPatches = () => {
  const version =
    Marionette.VERSION !== undefined ? parseInt(Marionette.VERSION) : 1
  switch (version) {
    case 2:
      break
    case 1:
      patchMarionetteOneRender()
      break
    default:
      throw 'Unsupported Marionette version detected.  Please post in the issues if you need support for your version.'
      break
  }
}

const patchAttachElContent = ({ aggressive = false, Provider }: Parameters) => {
  Marionette.ItemView.prototype.attachElContent = function(rendering: any) {
    this.triggerMethod('before:react:attach', rendering)
    if (React.isValidElement(rendering)) {
      render(
        Provider ? <Provider>{rendering}</Provider> : <>{rendering}</>,
        this.el
      )
    } else if (aggressive) {
      render(
        Provider ? (
          <Provider>{Parser(rendering)}</Provider>
        ) : (
          <>{Parser(rendering)}</>
        ),
        this.el
      )
    } else {
      this.$el.html(rendering)
    }
    this.triggerMethod('after:react:attach', rendering)
    return this
  }
}

/**
 * Useful for identifying is a component is Marionette
 */
const patchIdentifier = () => {
  Marionette.View.prototype._isMarionetteView = true
}

/**
 * Ensures that React components are unmounted appropriately
 */
const patchRemove = () => {
  const oldRemove = Marionette.View.prototype.remove
  Marionette.View.prototype.remove = function() {
    unmountComponentAtNode(this.el)
    return oldRemove.apply(this, arguments)
  }
}

const switchRenderToReact = ({ aggressive = false, Provider }: Parameters) => {
  patchAttachElContent({ aggressive, Provider })

  patchRemove()

  patchIdentifier()

  applyVersionSpecificPatches()
}

export default switchRenderToReact
