import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";

function App() {
  return (
    <div className="content flex w-full bg-[#170F23]">
      <Routes>
        {publicRoutes.map((route, index) => {
          const Component = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={<Component />}
            ></Route>
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
