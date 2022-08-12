import { redirect } from "@remix-run/node";

export const loader = () => {
  return redirect('/resources');
};

export default function IndexRoute() {
  return (<div></div>
  );
}
