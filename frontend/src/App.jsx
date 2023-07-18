import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { FrappeProvider } from 'frappe-react-sdk'
// import CalendarView from './components/CalendarView'
import CalendarView from './components/CalendarView'

function App() {
  const [count, setCount] = useState(0)

  return (
      <FrappeProvider socketPort={import.meta.env.VITE_SOCKET_PORT ?? ""}>
        <CalendarView />
      </FrappeProvider>
  )
}

export default App
