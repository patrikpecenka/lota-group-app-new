import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import AppLayout from '../pages/AppLayout';

const theme = createTheme({
  fontFamily: 'Open Sans, sans-serif',
  primaryColor: 'yellow',
})

function App() {
  return (
    <MantineProvider theme={theme} >
      <AppLayout />
    </MantineProvider >
  )
}

export default App