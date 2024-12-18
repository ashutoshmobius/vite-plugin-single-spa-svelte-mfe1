
// export default app
import singleSpaSvelte from 'single-spa-svelte';
import App from './App.svelte';
import type { SvelteComponent } from 'svelte';

const svelteLifecycles = singleSpaSvelte({
  component: App as unknown as typeof SvelteComponent, // Explicit cast
  domElementGetter: () => document.getElementById('svelte-root')!,
});

export const { bootstrap, mount, unmount } = svelteLifecycles;