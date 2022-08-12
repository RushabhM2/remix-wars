import { Film } from './films';
import { Planet } from './planets';
import { Species } from './species';
import { Vehicle } from './vehicles'
import { Starship } from './starships'

export interface Person {
  id?: string
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: Planet
  films: string[] | Film[]
  species: string[] | Species[]
  vehicles: string[] | Vehicle[]
  starships: string[] | Starship[]
  created: string
  edited: string
  url: string
}