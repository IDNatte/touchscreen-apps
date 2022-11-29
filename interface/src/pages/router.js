import { wrap } from "svelte-spa-router/wrap";

export const routes = {
  "/": wrap({
    asyncComponent: () => import("$pages/profile/ProfilePage.svelte"),
  }),

  // "/egov": wrap({
  //   asyncComponent: () => import("$pages/egov/EgovPage.svelte"),
  // }),

  // "/ikp": wrap({
  //   asyncComponent: () => import("$pages/ikp/IKPPage.svelte"),
  // }),

  // "/persantik": wrap({
  //   asyncComponent: () => import("$pages/persantik/PersantikPage.svelte"),
  // }),

  "*": wrap({
    asyncComponent: () => import("$pages/error/NotFoundPage.svelte"),
  }),
};
