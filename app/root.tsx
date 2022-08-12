import { MantineProvider } from '@mantine/core';
import { LiveReload, Outlet, Links } from "@remix-run/react";
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <Links />
          <title>Remix Wars</title>
        </head>
        <body>
          <Outlet />
          <LiveReload />
        </body>
      </html>
    </MantineProvider>
  );
}
