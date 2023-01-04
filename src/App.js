import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="content flex w-full bg-[#170F23]">
      <Sidebar />
      <Header />
    </div>
  );
}

export default App;
