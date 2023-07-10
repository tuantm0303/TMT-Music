import { useSelector } from "react-redux";
import Banner from "../../../components/Banner";
import Song from "../../../components/Player/Song";
import Playlist from "../../../components/Playlist/Playlist";

const Home = () => {
  const { songs } = useSelector((state) => state.songReducer);
  return (
    <>
      <main className="main-board pt-8 px-10">
        <Banner />
        <Playlist />

        <div className="new-section pt-5">
          <div className="title-section font-bold text-xl">Mới Phát Hành</div>
          <ul className="genre-select flex py-5 justify-start">
            <li className="selector text-xs">
              <button className="rounded-full border-2 p-1 px-4 active:bg-violet-700 hover:opacity-30">
                TẤT CẢ
              </button>
            </li>
            <li className="selector mx-8 text-xs">
              <button className="rounded-full border-2 p-1 px-4 active:bg-violet-700 hover:opacity-30">
                VIỆT NAM
              </button>
            </li>
            <li className="selector text-xs">
              <button className="rounded-full border-2 p-1 px-4 active:bg-violet-700 hover:opacity-30">
                QUỐC TẾ
              </button>
            </li>
          </ul>
          <div className="song-section grid grid-cols-3 grid-rows-3">
            {songs.map((item, index) => (
              <Song
                key={index}
                image={item?.image}
                title={item?.title}
                singer={item?.singerId?.fullname}
                time={item?.time}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
