import type { ReactElement } from 'react'
import { Button, CssBaseline } from '@mui/material'
import { Theme } from '~/libs/Theme'

function App (): ReactElement {
  return (
    <Theme>
      <CssBaseline />
      <Button variant={'contained'}>Hello world</Button>
    </Theme>
  )
}

export default App
