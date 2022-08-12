import { useOutletContext, Link } from "@remix-run/react";
import { Button } from '@mantine/core';

export default function ResourceIndexRoute() {
  const [resourcesArray] = useOutletContext() as any;
  
  return (
    <div>
      {resourcesArray.map((resource: string) => (
        <Link to={`${resource}`} key={resource}>
          <Button mt="xl">
            {resource}
          </Button>
        </Link>
      ))}
    </div>
  );
}