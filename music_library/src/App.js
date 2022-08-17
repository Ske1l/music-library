import { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { DataContext } from './contexts/DataContext';

const HOST_URL = 'https://itunes.apple.com/search?term=the%20grateful%20dead';

function App() {
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      if (!search) {
        return;
      }
      document.title = `${search} Music`
      const response = await fetch(`https://itunes.apple.com/search?term=${search}`)
      const resData = await response.json()
      console.log(resData)
      if (resData.results.length > 0) {
        setData(resData.results)
      } else {
        setMessage('Not Found')
      }
    }
    fetchData()
  }, [search])

  const handleSearch = (e, searchTerm) => {
    e.preventDefault()
    setSearch(searchTerm)
  }

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      {message}
      <DataContext.Provider value={data}>
        <Gallery data={data} />
      </DataContext.Provider>
    </div>
  )

}

export default App
