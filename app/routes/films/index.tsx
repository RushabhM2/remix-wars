import { Outlet } from "@remix-run/react";

export default function ResourceRoute() {
  return (
    <div>
      <Outlet />
    </div>
  );
}