import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import { privateRoutes, publicRoutes } from "./routes";
import OutSideLayout from "./layouts/OutsideLayout";
import AdminLayout from "./layouts/AdminLayout";
import { useDispatch } from "react-redux";
import { listCategories } from "./store/features/categorySlice";
import { listSong } from "./store/features/songSlice";

function App() {
  const dispatch = useDispatch();
  dispatch(listCategories());
  dispatch(listSong());

  return (
    <>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Component = route.component;

          const Layout = route.layout
            ? route.layout
            : route.layout === null
            ? Fragment
            : OutSideLayout;

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
    </>
  );
}

export default App;
