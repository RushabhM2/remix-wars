import { LoaderFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { getResources } from '../swapi';

export let loader: LoaderFunction = async () => {
    return getResources();
}

export default function ResourcesRoute() {
  let resources = useLoaderData();
  console.log('resources', resources)
  const resourcesArray = Object.keys(resources);
  
    return (
    <div>
      <h1>RESOURCES</h1>
      {resourcesArray.map(resource=> (
        <div>resource {resource}</div>
      ))}
    </div>
  );
}