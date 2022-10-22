import React, { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { HeroCard } from '../components/HeroCard'
import { useForm } from '../hooks/useForm'
import { getHeroBySearch } from '../selectors/getHeroBySearch'

export const Search = () => {

  const [searchParams, setSearchParams] = useSearchParams({
    keyword: ""
  })

  const [{ keyword}, handleInputChange] = useForm({
    keyword: searchParams.get('keyword')
  })

  const result = useMemo(() => getHeroBySearch(searchParams.get('keyword')), [searchParams])

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({
      keyword
    })
  }
  return (
    <div className='row'>
      <div className='col-3'>
        <h4 className='pb-3 pt-3'>Busqueda</h4>
        <hr />
        <form onSubmit={handleSearch}>
          <input type="text" placeholder='Busca tu heroe'
            className='form-control' name='keyword' value={keyword} onChange={handleInputChange} />
        </form>
      </div>
      <form>
        <div className='col-12'>
          <h4 className='pt-3 pb-3'>Resultado</h4>
          <hr/>
          <div className='row animate_animated animate_fadein'>
            {

              
              result.map(heroe => (
                <HeroCard
                key={heroe.id}
                {...heroe}
                />
              ))
              

            }
          </div>

        </div>
      </form>

    </div>
  )
}
