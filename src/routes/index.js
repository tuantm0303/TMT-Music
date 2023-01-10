import config from "../config";
import Dashboard from "../pages/Admin/Dashboard";
import AdminSong from "../pages/Admin/Song";
import AddSong from "../pages/Admin/Song/add";
import EditSong from "../pages/Admin/Song/edit";
import AdminUser from "../pages/Admin/User";
import Category from "../pages/Client/Category";
import Follow from "../pages/Client/Follow";
import History from "../pages/Client/History";
import Home from "../pages/Client/Home";
import MusicNew from "../pages/Client/MusicNew";
import MV from "../pages/Client/MV";
import MyMusic from "../pages/Client/MyMusic";
import Playlist from "../pages/Client/Playlist";
import Radio from "../pages/Client/Radio";
import Song from "../pages/Client/Song";
import Top from "../pages/Client/Top";
import Zingchart from "../pages/Client/Zingchart";

export const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.mymusic, component: MyMusic },
  { path: config.routes.zingchart, component: Zingchart },
  { path: config.routes.radio, component: Radio },
  { path: config.routes.follow, component: Follow },
  { path: config.routes.musicNew, component: MusicNew },
  { path: config.routes.category, component: Category },
  { path: config.routes.top100, component: Top },
  { path: config.routes.mv, component: MV },
  { path: config.routes.song, component: Song },
  { path: config.routes.playlist, component: Playlist },
  { path: config.routes.history, component: History },
];

export const privateRoutes = [
  { path: config.routes.dashboard, component: Dashboard },
  { path: config.routes.adminUserList, component: AdminUser },
  { path: config.routes.adminSongList, component: AdminSong },
  { path: config.routes.adminSongAdd, component: AddSong },
  { path: config.routes.adminSongEdit, component: EditSong },
];
