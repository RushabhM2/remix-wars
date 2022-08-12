import { LoaderFunction } from "@remix-run/node";
import { Outlet, useLoaderData, Link } from "@remix-run/react";
import { getResources } from '../swapi';

export let loader: LoaderFunction = async () => {
  return getResources();
}

export default function ResourcesRoute() {
  let resources = useLoaderData();
  const resourcesArray: string[] = Object.keys(resources);
  
  return (
    <div>
      <Outlet context={[resourcesArray]} />
    </div>
  );
}