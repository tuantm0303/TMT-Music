import config from "../config";
import Home from "../pages/Home";
import MyMusic from "../pages/MyMusic";

export const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.mymusic, component: MyMusic },
];
