import { Film } from './films';
import { Person } from './people';

export interface Species {
  id?: string
  name: string
  classification: string
  designation: string
  average_height: string
  skin_colors: string
  hair_colors: string
  eye_colors: string
  average_lifespan: string
  homeworld: string
  language: string
  people: string[] | Person[]
  films: string[] | Film[]
  created: string
  editted: string
  url: string
}