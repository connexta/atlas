const Marionette = require('backbone.marionette')

const addOnFirstRender = () => {
  const render = Marionette.ItemView.prototype.render
  /**
   * Overrides render to add a callback for onFirstRender.
   */
  Marionette.ItemView.prototype.render = function() {
    const firstRender = this.isRendered !== true
    render.apply(this, arguments)
    if (firstRender) {
      this.triggerMethod('firstRender', this)
    }
    return this
  }
}

export default addOnFirstRender
