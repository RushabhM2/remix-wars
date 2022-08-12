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

export let loader: LoaderFunction = async ( { params } ) => {
  if (params.resource) {
    return getResource(params.resource);
  }
}

export default function ResourceRoute() {
  const { resource } = useParams();
  let resourceData = useLoaderData();

  // function isFilm(item: Film | Person | Planet | Species | Vehicle | Starship): item is Film {
  //   return (item as Film).title !== undefined
  // }

  return (
    <div>
      {/* <p>{JSON.stringify(resourceData.results)}</p> */}
      {resourceData.results.map((data: any) => {
        <li>
          {data.url}
          {/* <Link to={`${resource}`}>
            {data.name}
          </Link> */}
        </li>
      })}
    </div>
  );
}