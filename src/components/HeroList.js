
import { getHeroesByPublisher } from '../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';
import React, { useMemo } from 'react';


export const HeroList = ({ publisher }) => {

  /* const heroes = getHeroesByPublisher(publisher) */

  const heroes = useMemo(() => getHeroesByPublisher(publisher),[publisher])
  return (
    <div className='row'>
      {
        heroes.map(heroe => (

          <HeroCard
            key={heroe.id}
            {...heroe}
          />
        ))
      }
    </div>
  )
}
