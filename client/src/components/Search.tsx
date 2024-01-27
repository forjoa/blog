import Header from './Header'
import '../styles/search.css'
import { useState } from 'react'
import { IconSearch } from '@tabler/icons-react'
import Recomendations from './Recomendations'

const Search = () => {
  const [searching, setSearching] = useState<string>('')

  return (
    <>
      <Header />
      <div className='main-search'>
        <div className='main-search-background'></div>
        <div className='main-search-container'>
          <form>
            <input
              type='text'
              name='searching'
              id='searching'
              spellCheck='false'
              autoComplete='off'
              placeholder='Search anything you want...'
              value={searching}
              onChange={(e) => setSearching(e.target.value)}
            />
            <button type='submit'>
              <IconSearch color='black' />
            </button>
          </form>
        </div>
        <Recomendations />
      </div>
    </>
  )
}

export default Search
