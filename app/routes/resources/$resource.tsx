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

export let loader: LoaderFunction = async ( { params } ) => {
  if (params.resource) {
    return getResource(params.resource);
  }
}

export default function ResourceRoute() {
  const { resource } = useParams();
  let resourceData = useLoaderData();
  const [displayedResourceList, setDisplayedResourceList] = useState(resourceData)
  let currentPage = 1;

  function isFilm(item: Film | Person | Planet | Species | Vehicle | Starship): item is Film {
    return (item as Film).title !== undefined
  }

  function getIdFromUrl (url: string) {
    return url[url.length-2]
  }

  // function nextPage(curPage: number) {

  // }

  return (
    <div>
      {resourceData.results.map((data: Film | Person | Planet | Species | Vehicle | Starship) => (
        <Link to={`/${resource}/${getIdFromUrl(data.url)}`} key={data.url}>
          <Button mt="xl">
            {isFilm(data) ? data.title : data.name}
          </Button>
        </Link>
      ))}
      <Button>Next Page</Button>
    </div>
  );
}