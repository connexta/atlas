import * as React from 'react'
import Modal, { ModalProps } from '@material-ui/core/Modal'
import { Paper } from '../paper'
import { Typography } from '../typography'
import { Divider } from '../divider'
import { Button } from '../button'
import { CloseIcon } from '../icons'
import { Grid } from '../grid'
import styled from 'styled-components'

export const WrappedModal = styled(
  React.forwardRef((props: ModalProps, ref: React.Ref<any>) => {
    return <Modal {...props} ref={ref} />
  })
)<ModalProps>``

const CustomPaper = styled(Paper)<{ width?: string }>`
  min-width: 20vw;
  margin: 100px auto auto auto;
  padding: 10px;
  max-height: calc(100% - 200px);
  overflow: auto;
  position: relative;
  max-width: ${({ width }) => (width ? width : '70vw')};
`

const HeaderTitle = styled(Typography)`
  flex-grow: 1;
`

const ModalContext = React.createContext({
  setOpen: () => {},
} as {
  setOpen: setType<boolean>
})

export const ModalHeader = ({ children }: { children?: React.ReactNode }) => {
  const modalContext = React.useContext(ModalContext)
  return (
    <>
      <Grid
        container
        alignItems="center"
        wrap="nowrap"
        style={{
          padding: '10px 0px',
        }}
      >
        <Grid item>
          <Button
            onClick={() => {
              modalContext.setOpen(false)
            }}
            style={{ visibility: 'hidden' }}
          >
            <CloseIcon />
          </Button>
        </Grid>
        <Grid item style={{ width: '100%' }}>
          <HeaderTitle variant="h5" align="center">
            {children}
          </HeaderTitle>
        </Grid>
        <Grid item>
          <Button
            onClick={() => {
              modalContext.setOpen(false)
            }}
          >
            <CloseIcon />
          </Button>
        </Grid>
      </Grid>
      <Divider style={{ margin: '0px -10px 20px -10px' }} />
    </>
  )
}

type setType<T> = React.Dispatch<React.SetStateAction<T>>
type Props = {
  /**
   * CSS Width to use for the modal. i.e. 100%, 10px, 40vw
   */
  width?: string
  children: ({ setOpen }: { setOpen: setType<boolean> }) => React.ReactElement
  modalChildren: ({
    setOpen,
  }: {
    setOpen: setType<boolean>
  }) => React.ReactElement
}

export const ControlledModal = ({ children, modalChildren, width }: Props) => {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      {children({ setOpen })}
      <ModalContext.Provider
        value={{
          setOpen,
        }}
      >
        <Modal
          open={open}
          onClose={() => {
            setOpen(false)
          }}
        >
          <>
            <CustomPaper width={width}>
              {modalChildren({ setOpen })}
            </CustomPaper>
          </>
        </Modal>
      </ModalContext.Provider>
    </>
  )
}
