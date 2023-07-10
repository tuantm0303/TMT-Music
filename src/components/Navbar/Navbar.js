import { Button } from "antd";
import React from "react";
import logo from '../../assets/images/logo.png';
import ItemNavbar from "./ItemNavbar";
import './Navbar.scss';

const Navbar = () => {
  const dataMenu = [
    {
      id: 1,
      title: 'Khám Phá',
      type: 'top'
    },
    {
      id: 2,
      title: '#zingchart',
      type: 'top'
    },
    {
      id: 3,
      title: 'Radio',
      type: 'top'
    },
    {
      id: 4,
      title: 'Thư Viện',
      type: 'top'
    },
    {
      id: 5,
      title: 'BXH Nhạc Mới',
      type: 'middle'
    },
    {
      id: 6,
      title: 'Chủ Đề & Thể Loại',
      type: 'middle'
    },
    {
      id: 7,
      title: 'Top 100',
      type: 'middle'
    },
    {
      id: 8,
      title: 'Nghe gần đây',
      type: 'bottom'
    },
    {
      id: 9,
      title: 'BXH Nhạc Mới',
      type: 'bottom'
    },
    {
      id: 10,
      title: 'Bài hát yêu thích',
      type: 'bottom'
    },
    {
      id: 11,
      title: 'Playlist',
      type: 'bottom'
    },
    {
      id: 12,
      title: 'Album',
      type: 'bottom'
    },
    {
      id: 13,
      title: 'Đã tải lên',
      type: 'bottom'
    },
    {
      id: 13,
      title: 'Tạo Playlist',
      type: 'relative'
    },
  ]

  return (
    <div className="mnujqleebm">
      <div className="jkdzfirhal">
        <img src={logo} alt="" />
      </div>
      <ItemNavbar data={dataMenu} location='top' />
      <hr className="iakqsebcro" />
      <div className="qyotbfaklt">
        <ItemNavbar data={dataMenu} location='middle' />
        <div className="zjrxcwxdha">
          <div className="qdsfbritlb">Nghe nhạc không quảng cáo cùng kho nhạc PREMIUM</div>
          <Button className="mrhmmaomvh">Nâng cấp tài khoản</Button>
        </div>
        <ItemNavbar data={dataMenu} location='bottom' />
      </div>
      <div className="gmydssuzrk">
        <ItemNavbar data={dataMenu} location='relative' />
      </div>
    </div>
  )
};

export default Navbar;
