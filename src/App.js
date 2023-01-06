import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import { publicRoutes } from "./routes";
import OutSideLayout from "./layouts/OutsideLayout";

function App() {
  return (
    <div className="content flex w-full bg-[#170F23]">
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
      </Routes>
    </div>
  );
}

export default App;
