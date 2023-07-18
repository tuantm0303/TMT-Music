import { Button } from "antd";
import { useEffect, useState } from "react";
import logo from '../../assets/images/logo.png';
import { menuApi } from "../../services/menu";
import ItemNavbar from "./ItemNavbar";
import './Navbar.scss';

const Navbar = () => {
  const [data, setData] = useState([])

  const getMenu = async () => {
    const { data } = await menuApi.list()
    setData(data)
  }
  useEffect(() => {
    getMenu()
  }, [])

  return (
    <div className="mnujqleebm">
      <div className="jkdzfirhal">
        <img src={logo} alt="" />
      </div>
      <ItemNavbar data={data} location='top' />
      <hr className="iakqsebcro" />
      <div className="qyotbfaklt">
        <ItemNavbar data={data} location='middle' />
        <div className="zjrxcwxdha">
          <div className="qdsfbritlb">Nghe nhạc không quảng cáo cùng kho nhạc PREMIUM</div>
          <Button className="mrhmmaomvh">Nâng cấp tài khoản</Button>
        </div>
        <ItemNavbar data={data} location='bottom' />
      </div>
      <div className="gmydssuzrk">
        <ItemNavbar data={data} location='relative' />
      </div>
    </div>
  )
};

export default Navbar;
