
## Documentation

[Documentation](https://linktodocumentation)

To get started with this run

```sh
npm i -save
```

The above command installs the required libraries and packages for the app.


The run 

```sh
npm run setup
```

to setup your database migration, initialzation and seeding.

After completion, run

```sh
npm run dev
```

to run the app in development mode.

### State Management

State management in this app is implemented using the `useFetcher`,  `useLoaderData` and `useActionData` hooks.

The `useFetcher` hook is a hook for interacting with the server outside of navigation. 

The `useActionData` accesses the data from the latest action. The server theorectically should be the central source of truth in an app, but sometimes, due to complex state management tools like redux, the app state becomes duplicated in client and server. In turn this makes the app more complex as network states like 'isLoading' or 'isError' need to be accounted for. The use of these hooks makes the state management simpler, eliminating possiblilities of code redudancy and reduxing app complexity.

To learn more visit 

[Remix State Management](https://remix.run/docs/en/main/discussion/state-management)
 
 ### Dynamic Routing
Dynamic routing is implemented using remix's file based routing strategey.It is possible to declare the parameters by prefixing them with a $ in the file name.

This implemented can be observed in the `app/routes/product.$productId.tsx` route component.

To learn more visit 

[Dynamic Routes](https://remix.run/docs/en/main/file-conventions/routes)

