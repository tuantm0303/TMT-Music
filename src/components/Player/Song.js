import { ReactComponent as IconHeart } from '../../assets/svgs/icon-heart.svg';
import { ReactComponent as IconOption } from '../../assets/svgs/icon-option.svg';
import { ReactComponent as IconPlay } from '../../assets/svgs/icon-play.svg';
import './Song.scss';

const Song = ({ image, title, singer, time, index }) => {
  return (
    <div key={index} className="kybqblbsmr">
      <div className="ibymmdlsiw">
        <div className="fyaiadzrcb">
          <img src={image} alt="" className="gfmutzlmjv" />
          <IconPlay className='foxyurbrwb' />
        </div>
        <div className="ionozpfoim">
          <div className="psvgsgslfp">{title}</div>
          <div className="kdiczzbvtf">{singer}</div>
        </div>
      </div>

      <div className="jlbgbmkehm">
        <IconHeart className='akrlfhazbs' />
        <IconOption className='akrlfhazbs' />
      </div>
    </div>
  );
};

export default Song;
