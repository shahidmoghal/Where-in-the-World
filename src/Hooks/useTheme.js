import { useContext } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext.jsx'

export const useTheme = () => useContext(ThemeContext)