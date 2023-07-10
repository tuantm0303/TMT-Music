import { Button, Input } from 'antd';
import { ReactComponent as ArrowNext } from '../../assets/svgs/arrow-next.svg';
import { ReactComponent as ArrowPrev } from '../../assets/svgs/arrow-prev.svg';
import { ReactComponent as DownloadDesktop } from '../../assets/svgs/download-desktop.svg';
import { ReactComponent as IconSearch } from '../../assets/svgs/icon-search.svg';
import { ReactComponent as IconSetting } from '../../assets/svgs/icon-setting.svg';
import './Header.scss';

const Header = () => {
  return (
    <>
      <div className="zjtpekizcb">
        <div className="updtyqlmxo">
          <div className="evvowvudfg">
            <ArrowPrev className='umoujeuolq' />
            <ArrowNext className='umoujeuolq' />
          </div>
          <Input prefix={<IconSearch />} placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát' className='qqmuxnccks' />
        </div>
        <div className="pfycktwghf">
          <Button icon={<DownloadDesktop />} className='mfkukvpsdk'>Tải bản Windows</Button>
          <div className="nrxqywgjhr">
            <IconSetting className="aakncbnome" />
          </div>
          <img src="https://s120.avatar.talk.zdn.vn/5/f/9/7/7/120/3f9907e2310087063774d0940e4a62ab.jpg" alt="" className="ypmkurlfjn" />
        </div>
      </div>
    </>
  );
};

export default Header;
