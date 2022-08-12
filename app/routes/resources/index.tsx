import { useOutletContext, Link } from "@remix-run/react";

export default function ResourceIndexRoute() {
  const [resourcesArray] = useOutletContext() as any;
  
  return (
    <div>
      {resourcesArray.map((resource: string) => (
        <li key={resource}>
          <Link to={`${resource}`}>
            {resource}
          </Link>
        </li>
      ))}
    </div>
  );
}