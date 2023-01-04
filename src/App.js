import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="content flex w-full bg-slate-800 h-screen">
      <Sidebar />
      <Header />
    </div>
  );
}

export default App;
