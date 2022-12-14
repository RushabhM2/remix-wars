import { Film } from './films';
import { Person } from './people';

export interface Planet {
  id?: string
  name: string
  rotation_period: string
  orbital_period: string
  diameter: string
  climate: string
  gravity: string
  terrain: string
  surface_water: string
  population: string
  residents: string[] | Person[]
  films: string[] | Film[]
  created: string
  edited: string
  url: string
}