import { Popover } from 'antd';
import { ReactComponent as IconHeart } from '../../assets/svgs/icon-heart.svg';
import { ReactComponent as IconOption } from '../../assets/svgs/icon-option.svg';
import { ReactComponent as IconPlay } from '../../assets/svgs/icon-play.svg';
import './Song.scss';

const Song = ({ image, title, singer }) => {
  return (
    <div className="kybqblbsmr">
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
        <Popover trigger='hover' content={<div style={{ whiteSpace: 'nowrap' }}>Thêm vào thư viện</div>}>
          <IconHeart className='akrlfhazbs' />
        </Popover>
        <Popover trigger='hover' content='Khác'>
          <IconOption className='akrlfhazbs' />
        </Popover>
      </div>
    </div>
  );
};

export default Song;
