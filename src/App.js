import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyMusic from "./pages/MyMusic";

function App() {
  return (
    <div className="content flex w-full bg-[#170F23]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mymusic" element={<MyMusic />} />
      </Routes>
    </div>
  );
}

export default App;
