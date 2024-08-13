import Header from './Components/Header.jsx'
import { Outlet } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from './Contexts/ThemeContext.jsx'

const App = () => {
   return (
      <ThemeProvider>
        <Header />
        <Outlet />
      </ThemeProvider>
  )
}

export default App