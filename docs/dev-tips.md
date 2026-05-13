# Dev tips

## Creating keystatic content components edge case

You have to delete the frontent/.svelte-kit folder to regenerate types or something when you modify files in the `frontend/src/lib/components/markdoc` directory or the `frontend/keystatic.config.ts` file manually and restart the dev server.

## Using remote functions and async svelte

- In Svelte components, make sure to call `await someRemoteFunction()` _after_ `$props()`. This avoids a bug in Svelte or SvelteKit which causes a mismatch between SSR and CSR and crashes the app.
  - Alternatively, only render the component or page on the client side. But that's not ideal.
  - Hopefully the underlying issue will get fixed at some point.
