import Header from "./components/Header";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="content flex w-full bg-[#170F23]">
      <Sidebar />
      <Header />
      <Player />
    </div>
  );
}

export default App;
