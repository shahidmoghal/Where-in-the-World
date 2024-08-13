import { useState } from 'react'
import SearchBar from './SearchBar.jsx'
import SelectMenu from './SelectMenu.jsx'
import CountriesList from './CountriesList.jsx'
import { useTheme } from '../Hooks/useTheme.js'

export default function Home() {
  const [query, setQuery] = useState('')
  const [isDark] = useTheme()
  return (
    <main className={`${isDark ? 'dark' : ''}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery} />
      </div>
      <CountriesList query={query} />
    </main>
  )
}