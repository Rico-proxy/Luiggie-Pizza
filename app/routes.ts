import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("layout/base-layout.tsx", [
    index("routes/home.tsx"),
    route("menu", "routes/menu.tsx"),
    route("tracker", "routes/tracker.tsx"),
    route("wines", "routes/wines.tsx"),
  ]),
] satisfies RouteConfig;
