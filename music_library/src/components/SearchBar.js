import { useContext } from 'react'
import { SearchContext } from '../contexts/SearchContext'
function SearchBar() {
    let { term, handleSearch } = useContext(SearchContext)
    return (
        <form>
            <input ref={term} type="text"
                placeholder="Enter a search term here"
            />
            <input onClick={(e) => handleSearch(e, term.current.value)} type="submit" />
        </form>
    )
}

export default SearchBar
