import { LoaderFunction } from "@remix-run/node";
import { Outlet, useLoaderData, Link } from "@remix-run/react";
import { useParams } from "@remix-run/react";
import { getItem } from '../../swapi';
import { Film } from '../../lib/films';
import { Planet } from '../../lib/planets';

export let loader: LoaderFunction = async ( { params } ) => {
  if (params.filmId) {
    return getItem('films', params.filmId);
  }
}

export default function FilmIdRoute() {
  const { resource } = useParams();
  let film = useLoaderData();

  return (
    <div>
      <p>{film.episodeId}</p>
      <p>{film.title}</p>
      <p>{film.opening_crawl}</p>
      {film.planets.map((planet: string) => (
        <Link to={planet}>{planet}</Link>
      ))}
    </div>
  );
}