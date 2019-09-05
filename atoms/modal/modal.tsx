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
  React.forwardRef((props: ModalProps, ref) => {
    return <Modal {...props} ref={(ref as unknown) as undefined} />
  })
)<ModalProps>``

const CustomPaper = styled(Paper)`
  max-width: 70vw;
  min-width: 20vw;
  margin: 100px auto auto auto;
  padding: 10px;
  max-height: calc(100% - 200px);
  overflow: auto;
  position: relative;
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
          <HeaderTitle variant="h4" align="center">
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
      <Divider style={{ marginBottom: '20px' }} />
    </>
  )
}

type setType<T> = React.Dispatch<React.SetStateAction<T>>
type Props = {
  children: ({ setOpen }: { setOpen: setType<boolean> }) => React.ReactElement
  modalChildren: ({
    setOpen,
  }: {
    setOpen: setType<boolean>
  }) => React.ReactElement
}

export const ControlledModal = ({ children, modalChildren }: Props) => {
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
            <CustomPaper>{modalChildren({ setOpen })}</CustomPaper>
          </>
        </Modal>
      </ModalContext.Provider>
    </>
  )
}
