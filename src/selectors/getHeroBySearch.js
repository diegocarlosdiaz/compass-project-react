
import { heroes } from '../data/heroes'

export const getHeroBySearch = (keyword = "") => {

  if(keyword === ""){
    return []
  }
  return heroes.filter(heroe => heroe.superhero.toLowerCase().includes(keyword.toLowerCase()))
}
