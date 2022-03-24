// TODO
import { useRef, useState } from 'react'
import { Input } from '../../ui/Input'

const Search = () => {

    const [searchText, setSearchText] = useState('')

    const handleSearch = async (e) => {
        let keyword = e.target.value
        setSearchText(keyword)
    }


    return (
    <>
        <input
            type="text"
            className="w-80 px-3 py-2 text-sm font-mono drop-shadow"
            placeholder="Search..."
            value={searchText}
            onChange={handleSearch}
        />
    </>
    )
}

export default Search