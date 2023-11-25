import { Button, CssBaseline } from '@mui/material'
import { Theme } from '~/libs/Theme'

function App() {
  return (
    <Theme>
      <CssBaseline />
      <Button variant="contained">Hello world</Button>
    </Theme>
  )
}

export default App
