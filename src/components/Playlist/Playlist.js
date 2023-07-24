import { Popover } from 'antd';
import { ReactComponent as IconHeart } from '../../assets/svgs/icon-heart.svg';
import { ReactComponent as IconOprion } from '../../assets/svgs/icon-option.svg';
import { ReactComponent as IconPlay } from '../../assets/svgs/icon-play.svg';
import './Playlist.scss';

const Playlist = () => {
  return (
    <div className="smfgfremag">
      <div className="rxbrbwhxrx">Có Thể Bạn Muốn Nghe</div>
      <div className="qtbdyqcgkb">
        {[0, 1, 2, 3].map((item, index) => {
          return (
            <div className="aksumtvqgj" key={index}>
              <div className="qfgknudtqa">
                <img src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/0/4/c/504c9667858918caac5f16ac59a8249a.jpg" alt="" className="ddvbdxnnwi" />
                <div className="yfjmslvdfs">
                  <div className='tcegurkgrc'>
                    <Popover content='Thêm vào thư viện' overlayClassName='hhekvibugv'>
                      <IconHeart />
                    </Popover>
                  </div>
                  <div className='etzfnsfikx'>
                    <IconPlay />
                  </div>
                  <div className='tcegurkgrc'>
                    <Popover content='Khác' overlayClassName='hhekvibugv'>
                      <IconOprion />
                    </Popover>
                  </div>
                </div>
              </div>
              <div className="rcihfvlxsd">Rap Việt Mới Nhất</div>
              <div className="udwhpapqfs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque quas ratione tempore accusamus, corrupti cumque debitis tenetur voluptate itaque amet hic harum nemo. Libero, aliquam quibusdam deleniti repellat quae in.</div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Playlist;
