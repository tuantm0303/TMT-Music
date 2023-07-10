import config from "../config";
import AdminAuthor from "../pages/Admin/Author";
import FormAuthor from "../pages/Admin/Author/form";
import AdminCategory from "../pages/Admin/Category";
import FormCategory from "../pages/Admin/Category/form";
import Dashboard from "../pages/Admin/Dashboard";
import AdminMenu from "../pages/Admin/Menu";
import FormMenu from "../pages/Admin/Menu/form";
import AdminSinger from "../pages/Admin/Singer";
import FormSinger from "../pages/Admin/Singer/form";
import AdminSlide from "../pages/Admin/Slide";
import FormSlide from "../pages/Admin/Slide/form";
import AdminSong from "../pages/Admin/Song";
import FormSong from "../pages/Admin/Song/form";
import AdminUser from "../pages/Admin/User";
import Category from "../pages/Client/Category";
import Follow from "../pages/Client/Follow";
import History from "../pages/Client/History";
import Home from "../pages/Client/Home/Home";
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
  { path: config.routes.adminSongAdd, component: FormSong },
  { path: config.routes.adminSongEdit, component: FormSong },
  { path: config.routes.adminCategoryList, component: AdminCategory },
  { path: config.routes.adminCategoryAdd, component: FormCategory },
  { path: config.routes.adminCategoryEdit, component: FormCategory },
  { path: config.routes.adminSingerList, component: AdminSinger },
  { path: config.routes.adminSingerAdd, component: FormSinger },
  { path: config.routes.adminSingerEdit, component: FormSinger },
  { path: config.routes.adminAuthorList, component: AdminAuthor },
  { path: config.routes.adminAuthorAdd, component: FormAuthor },
  { path: config.routes.adminAuthorEdit, component: FormAuthor },
  { path: config.routes.adminSlideList, component: AdminSlide },
  { path: config.routes.adminSlideAdd, component: FormSlide },
  { path: config.routes.adminSlideEdit, component: FormSlide },
  { path: config.routes.adminMenuList, component: AdminMenu },
  { path: config.routes.adminMenuAdd, component: FormMenu },
  { path: config.routes.adminMenuEdit, component: FormMenu },
];
