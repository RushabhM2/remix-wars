import { Person } from './people';
import { Planet } from './planets';
import { Species } from './species';
import { Vehicle } from './vehicles'
import { Starship } from './starships'

export interface Film {
    id?: string
    title: string
    episode_id: string
    opening_crawl: string
    director: string
    producer: string
    release_date: string
    characters: string[] | Person[]
    planets: string[] | Planet[]
    starships: string[] | Starship[]
    vehicles: string[] | Vehicle[]
    species: string[] | Species[]
    created: string
    edited: string
    url: string
}