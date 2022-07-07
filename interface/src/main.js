// @ts-nocheck
import "./app.css";
import App from "./App.svelte";

if (import.meta.env.PROD) {
  import("$lib/module/electron/renderer");
}

const app = new App({
  target: document.getElementById("app"),
});

export default app;
