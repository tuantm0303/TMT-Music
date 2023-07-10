import { Popover } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as IconClock } from '../../assets/svgs/icon-clock.svg';
import { ReactComponent as IconOption } from '../../assets/svgs/icon-option.svg';
import { readSong, setCurrentIndex } from '../../store/features/songSlice';
import Lyric from './Lyric';
import './Player.scss';
import Song from './Song';

const Player = () => {
  const [id, setId] = useState("");

  const { songs } = useSelector((state) => state.songReducer);
  const dispatch = useDispatch();

  const handlePlaySong = (id, index, lyric) => {
    // console.log(lyric);
    setId(id);
    dispatch(readSong(id));
    dispatch(setCurrentIndex(index));
  };
  return (
    <div className="cwhkbhdwti">
      <div className="fmpovgqagv">
        <div className="radxzrbvgi">
          <div className="qmbbalzlix">Danh sách phát</div>
          <div className="qmbbalzlix">Nghe gần đây</div>
        </div>
        <div className="tnpflgerms">
          <div className="dtyfzahijm">
            <IconClock className='uitghwlgrh' />
          </div>
          <div className="dtyfzahijm">
            <IconOption className='uitghwlgrh' />
          </div>
        </div>
      </div>
      <div className='asxzhtjjxr'>
        {songs.map((item, index) => (
          <Popover placement="bottom" content={<Lyric id={id} lyric="abc" />} trigger="click" key={index}>
            <div
              className="select-song"
              onClick={() => handlePlaySong(item._id, index, item.lyric)}
            >
              <Song image={item?.image} title={item?.title} singer={item?.singerId?.fullname} />
            </div>
          </Popover>
        ))}
      </div>
    </div>
  );
};

export default Player;
