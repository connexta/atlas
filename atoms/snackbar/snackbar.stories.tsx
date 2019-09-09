import * as React from 'react'
import { storiesOf } from '@connexta/ace/@storybook/react'
import { Snackbar, SnackbarContent } from './'
import { select } from '@connexta/ace/@storybook/addon-knobs'
import { Button } from '../button'
import { useState } from 'react'
import { Grid } from '../grid'
import { ErrorIcon, CloseIcon } from '../icons'

const stories = storiesOf('Components | Snackbar', module)

stories.add('Default', () => {
  const [message, setMessage] = useState<string | null>(null)

  const variant = select(
    'Variant',
    {
      Success: 'success',
      Error: 'error',
    },
    'success'
  ) as 'success' | 'error'

  return (
    <div>
      <Button onClick={() => setMessage('Snackbar Message')} variant="outlined">
        Trigger Snackbar
      </Button>
      <Snackbar
        open={message != null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <SnackbarContent
          variant={variant}
          message={
            <Grid container alignItems="center">
              {variant == 'error' && (
                <ErrorIcon
                  style={{
                    marginRight: '10px',
                  }}
                />
              )}
              {message}
            </Grid>
          }
          action={
            <Button onClick={() => setMessage(null)} color="inherit">
              <CloseIcon />
            </Button>
          }
        />
      </Snackbar>
    </div>
  )
})
