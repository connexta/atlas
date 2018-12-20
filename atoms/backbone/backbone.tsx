import * as React from 'react'
import { Subtract } from '../../typescript'

const Backbone = require('backbone')

export type WithBackboneProps = {
  listenTo: (object: any, events: string, callback: Function) => any
  stopListening: (
    object?: any,
    events?: string | undefined,
    callback?: Function | undefined
  ) => any
  listenToOnce: (object: any, events: string, callback: Function) => any
}

const withListenTo = <P extends WithBackboneProps>(
  Component: React.ComponentType<P>
) => {
  return class BackboneContainer extends React.Component<
    Subtract<P, WithBackboneProps>,
    {}
  > {
    backbone: Backbone.Model = new Backbone.Model({})
    componentWillUnmount() {
      this.backbone.stopListening()
      this.backbone.destroy()
    }
    render() {
      return (
        <Component
          listenTo={this.backbone.listenTo.bind(this.backbone)}
          stopListening={this.backbone.stopListening.bind(this.backbone)}
          listenToOnce={this.backbone.listenToOnce.bind(this.backbone)}
          {...this.props as any}
        />
      )
    }
  }
}

export default withListenTo
