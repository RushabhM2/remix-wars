import { LoaderFunction } from "@remix-run/node";
import { Outlet, useLoaderData, Link } from "@remix-run/react";
import { useParams } from "@remix-run/react";
import { getResource } from '../../swapi';
import { Film } from '../../lib/films';
import { Person } from '../../lib/people';
import { Planet } from '../../lib/planets';
import { Species } from '../../lib/species';
import { Vehicle } from '../../lib/vehicles'
import { Starship } from '../../lib/starships'
import { Button, Pagination } from '@mantine/core';
import { useState } from "react";
import FilmCard from '../../components/filmCard'

export let loader: LoaderFunction = async ( { params } ) => {
  if (params.resource) {
    return getResource(params.resource);
  }
}

export default function ResourceRoute() {
  const { resource } = useParams();
  let resourceData = useLoaderData();
  const [displayedList, setDisplayedList] = useState(resourceData.results)
  const [activePage, setPage] = useState(1);

  function isFilm(item: Film | Person | Planet | Species | Vehicle | Starship): item is Film {
    return (item as Film).title !== undefined
  }

  function getIdFromUrl (url: string) {
    return url[url.length-2]
  }

  function fetchPage (page: number) {
    console.log('page', page)
    setPage(page)
    if (resource) {
      const newItems = getResource(resource, page);
      setDisplayedList(newItems);
    }
  }

  function cardDisplay(
    resourceType: string
  ) {
    switch (resourceType) {
      case 'films': {
        return displayedList.map((data: Film) => <FilmCard film={data} resource={resourceType}/>)
      }
      default: {
        return displayedList.map((data: Person | Planet | Species | Vehicle | Starship) => (
          <Link to={`/${resource}/${getIdFromUrl(data.url)}`} key={data.url}>
            <Button mt="xl">
              {data.name}
            </Button>
          </Link>
        ))
      }
    }
  }

  return (
    <div>
      {resource ? cardDisplay(resource) : "...Loading"}
      <div style={{color: "white"}}>
        ACTIVE PAGE: {activePage}
      </div>
      <Pagination
        total={(Math.ceil(resourceData.count/10))}
        page={activePage}
        onChange={(page)=>fetchPage(page)}
        styles={{
          item: {
            '&[data-active]': {
              backgroundColor: 'green'
            },
          },
        }}
      />
    </div>
  );
}