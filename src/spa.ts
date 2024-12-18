import singleSpaSvelte from "single-spa-svelte";
import App from "./App.svelte";

const svelteLifecycles = singleSpaSvelte({
  component: App as any,
  domElementGetter: () => document.getElementById("svelte-app") || createRootElement(),
});

export const { bootstrap, mount, unmount } = svelteLifecycles;

function createRootElement() {
  const el = document.createElement("div");
  el.id = "svelte-app";
  document.body.appendChild(el);
  return el;
}
