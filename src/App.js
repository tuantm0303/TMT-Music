import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import './App.scss';
import AdminLayout from "./layouts/AdminLayout";
import OutsideLayout from "./layouts/OutsideLayout/OutsideLayout";
import { privateRoutes, publicRoutes } from "./routes";
import { listCategories } from "./store/features/categorySlice";
import { listSinger } from "./store/features/singerSlice";
import { listSong } from "./store/features/songSlice";

function App() {
  const dispatch = useDispatch();
  dispatch(listCategories());
  dispatch(listSong());
  dispatch(listSinger());

  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route, index) => {
          const Component = route.component;

          const Layout = route.layout
            ? route.layout
            : route.layout === null
              ? Fragment
              : OutsideLayout;

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Component />
                </Layout>
              }
            ></Route>
          );
        })}

        {privateRoutes.map((route, index) => {
          const Component = route.component;

          const Layout = route.layout
            ? route.layout
            : route.layout === null
              ? Fragment
              : AdminLayout;

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Component />
                </Layout>
              }
            ></Route>
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
