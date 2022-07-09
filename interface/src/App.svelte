<script>
  import Router from "svelte-spa-router";
  import { routes } from "$pages/router";

  import SidebarComponent from "$components/sidebar/SidebarComponent.svelte";
  import ModalComponent from "$components/modal/ModalComponent.svelte";
</script>

<main class="flex w-full h-full bg-gray-50">
  <SidebarComponent />
  <Router {routes} />

  <ModalComponent modalClass="window-settings" modalTitle="pengaturan">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ullam
    illum dicta consectetur. Aliquam, consequuntur commodi harum animi,
    provident voluptatum distinctio, ipsum iure alias repellat facere incidunt
    illo quam velit?
  </ModalComponent>
</main>
