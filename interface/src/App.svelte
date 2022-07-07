<script>
  import Router from "svelte-spa-router";
  import { routes } from "$pages/router";

  import SidebarComponent from "$components/sidebar/SidebarComponent.svelte";
</script>

<main class="flex w-full h-full bg-gray-50">
  <SidebarComponent />
  <Router {routes} />
</main>
