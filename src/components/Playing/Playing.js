import { useEffect, useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as IconMic } from "../../assets/svgs/icon-mic.svg";
import { ReactComponent as IconVolume } from "../../assets/svgs/icon-volume.svg";
import { ReactComponent as IconWindows } from "../../assets/svgs/icon-windows.svg";
import { nextPrevSong } from "../../store/features/songSlice";
import Song from "../Player/Song";
import './Playing.scss';

const Playing = () => {
  const songRef = useRef()
  const dispatch = useDispatch();
  const { song, songs, currentIndex } = useSelector(
    (state) => state.songReducer
  );
  const handleSongEnded = () => {
    if (currentIndex < songs.length - 1) {
      dispatch(nextPrevSong((currentIndex + 1) % songs.length));
    }
  }

  useEffect(() => {
    if (songRef.current) {
      songRef.current.audio.current.addEventListener('ended', handleSongEnded)
    }
    return () => {
      if (songRef.current) {
        songRef.current.audio.current.removeEventListener('ended', handleSongEnded)
      }
    }
  }, [currentIndex])

  const handleNext = () => {
    dispatch(nextPrevSong((currentIndex + 1) % songs.length));
  };
  const handlePrev = () => {
    dispatch(nextPrevSong((currentIndex - 1) % songs.length));
  };

  return (
    <div className="tvwdoceewt">
      <div className="cyyshwcuqk">
        <Song
          image={song?.image}
          title={song?.title}
          singer={song?.singerId?.fullname}
        />
      </div>
      <div className="kzfyhcvxud">
        <AudioPlayer
          className="music-play"
          style={{ background: "#130C1C" }}
          src={song?.audio}
          layout="stacked-reverse"
          showSkipControls={true}
          showJumpControls={false}
          onClickNext={handleNext}
          onClickPrevious={handlePrev}
          autoPlay={false}
          // onListen={handleListen}
          ref={songRef}
        />
      </div>
      <div className="gbqgkdjqwi">
        <IconMic className="ozgceppxsj" />
        <IconWindows className="ozgceppxsj" />
        <IconVolume className="ozgceppxsj" />
      </div>
    </div>
  );
};

export default Playing;
