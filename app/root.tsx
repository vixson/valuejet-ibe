import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import { LoaderFunction, json } from "@remix-run/node";
import { commitSession, getSession, getUser } from "./session.server";

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  const session = await getSession(request);
  session.set("userId", user?.id)
  
  return json<LoaderData>(
    { user },
    { headers: { "set-cookie": await commitSession(session) } }
  );
};


export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="dark:bg-slate-900">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
