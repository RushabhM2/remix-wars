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

export default function FilmIndexRoute() {
  const { resource } = useParams();
  let resourceData = useLoaderData();
  const resourceDataWithId = resourceData.results.map((data: Film | Person | Planet | Species | Vehicle | Starship) => {
    const id = data.url[data.url.length-2];
    return {...data, id};
  })
  console.log('resourceData', resourceData)

  return (
    <div>
      <Outlet context={[resourceDataWithId]} />
      {/* {resourceDataWithId.map((data: Person | Planet | Species | Vehicle | Starship) => (
        <li>
          <Link to={`${resource}/${data.id}`}>
            {data.id} {data.name}
          </Link>
        </li>
      ))} */}
    </div>
  );
}