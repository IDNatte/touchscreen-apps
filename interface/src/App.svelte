<script lang="ts">
  import { Router, Route } from "svelte-navigator";

  import SidebarComponent from "$components/sidebar/SidebarComponent.svelte";

  import HomePages from "$pages/home/HomePage.svelte";
  import ProfilePage from "$pages/profile/ProfilePage.svelte";
  import EgovPage from "$pages/egov/EgovPage.svelte";
  import IkpPage from "$pages/ikp/IKPPage.svelte";
  import PersantikPage from "$pages/persantik/PersantikPage.svelte";
</script>

<Router>
  <main class="flex w-full h-full bg-gray-50">
    <SidebarComponent />
    <Route path="/">
      <HomePages />
    </Route>
    <Route path="/profile">
      <ProfilePage />
    </Route>
    <Route path="/egov">
      <EgovPage />
    </Route>
    <Route path="/ikp">
      <IkpPage />
    </Route>
    <Route path="/persantik">
      <PersantikPage />
    </Route>
  </main>
</Router>
