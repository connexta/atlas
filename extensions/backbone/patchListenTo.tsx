import * as Backbone from 'backbone'

/**
 * Overrides listenTo to make it behave in a safer way.  In other words, not fire after views are destroyed.
 * Call is preferred since its performance is much faster than apply.
 */
const patchListenTo = () => {
  const listenTo = Backbone.View.prototype.listenTo
  Backbone.View.prototype.listenTo = function(
    obj: any,
    name: string,
    callback: Function
  ) {
    const view = this as any
    return listenTo.call(view, obj, name, function() {
      if (callback === undefined) {
        console.warn(`Found no callback for listener in ${view.tagName}`)
        return
      }
      if (view.isDestroyed !== true) {
        const a1 = arguments[0],
          a2 = arguments[1],
          a3 = arguments[2]
        switch (arguments.length) {
          case 0:
            callback.call(view)
            return
          case 1:
            callback.call(view, a1)
            return
          case 2:
            callback.call(view, a1, a2)
            return
          case 3:
            callback.call(view, a1, a2, a3)
            return
          default:
            callback.apply(view, arguments)
            return
        }
      }
    })
  }
}

export default patchListenTo
