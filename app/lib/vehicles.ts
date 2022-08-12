import { Film } from './films';
import { Person } from './people';

export interface Vehicle {
  id?: string
  name: string
  model: string
  manufacturer: string
  cost_in_credits: string
  length: string
  max_atmosphering_speed: string
  crew: string
  passengers: string
  cargo_capacity: string
  consumables: string
  vehicle_class: string
  pilots: string[] | Person[]
  films: string[] | Film[]
  created: string
  edited: string
  url: string
}