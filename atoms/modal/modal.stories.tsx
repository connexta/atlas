import * as React from 'react'
import { storiesOf } from '../../storybook'
import { ControlledModal, ModalHeader } from './'
import { Button } from '../button'

const stories = storiesOf('Components | Modal', module)

stories.add('Single Modal', () => {
  return (
    <ControlledModal
      modalChildren={childrenProps => {
        return (
          <>
            <ModalHeader>{'Modal Header'}</ModalHeader>
            <div>Modal Content</div>
            <Button onClick={() => childrenProps.setOpen(false)}>
              Close Modal
            </Button>
          </>
        )
      }}
    >
      {renderProps => {
        return (
          <Button onClick={() => renderProps.setOpen(true)}>Open Modal</Button>
        )
      }}
    </ControlledModal>
  )
})

stories.add('Two Modals', () => {
  return (
    <ControlledModal
      modalChildren={modalOneChildrenProps => {
        return (
          <>
            <ModalHeader>{'Modal One Header'}</ModalHeader>
            <div>Modal One Content</div>
            <Button onClick={() => modalOneChildrenProps.setOpen(false)}>
              Close Modal
            </Button>
          </>
        )
      }}
    >
      {topModalRenderProps => {
        return (
          <>
            <ControlledModal
              modalChildren={modalTwoChildrenProps => {
                return (
                  <>
                    <ModalHeader>{'Modal Two Header'}</ModalHeader>
                    <div>Modal Two Content</div>
                    <Button
                      onClick={() => modalTwoChildrenProps.setOpen(false)}
                    >
                      Close Modal
                    </Button>
                  </>
                )
              }}
            >
              {bottomModalRenderProps => {
                return (
                  <>
                    <Button onClick={() => topModalRenderProps.setOpen(true)}>
                      Open Modal One
                    </Button>
                    <Button
                      onClick={() => bottomModalRenderProps.setOpen(true)}
                    >
                      Open Modal Two
                    </Button>
                  </>
                )
              }}
            </ControlledModal>
          </>
        )
      }}
    </ControlledModal>
  )
})
