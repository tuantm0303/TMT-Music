import { Button, message, Popconfirm, Space, Table } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeSinger } from "../../../store/features/singerSlice";

const AdminSinger = () => {
  const { singers } = useSelector((state) => state.singerReducer);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeSinger(id))
      .unwrap()
      .then(() => message.success("Xóa thành công!"))
      .catch(() => message.error("Lỗi!"));
  };

  const columns = [
    {
      title: "#",
      dataIndex: `stt`,
      key: "stt",
    },
    {
      title: "Họ tên",
      dataIndex: "fullname",
      key: "fullname",
    },
    {
      title: "Tuổi",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <img src={image} alt={image} width="50px" height="50px" />
      ),
    },
    {
      title: "Quốc gia",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Hành động",
      dataIndex: "action",
      key: "action",
    },
  ];

  const data = singers?.map((item, key) => ({
    key,
    stt: key + 1,
    fullname: item.fullname,
    age: item.age,
    image: item.image,
    country: item.country,
    action: (
      <Space size="middle">
        <Link to={item._id}>
          <Button
            type="primary"
            style={{ backgroundColor: "yellow", color: "black" }}
          >
            Sửa
          </Button>
        </Link>

        <Popconfirm
          title="Xóa"
          description={`Bạn có muốn xóa "${item.fullname}" không?`}
          onConfirm={() => handleRemove(item._id)}
          okText="Có"
          cancelText="Không"
          style={{ background: "#1677ff" }}
        >
          <Button
            type="primary"
            style={{ backgroundColor: "red", color: "black" }}
          >
            Xóa
          </Button>
        </Popconfirm>
      </Space>
    ),
  }));

  return (
    <>
      <h2 className="title-page font-bold text-center text-2xl py-5">
        Danh sách ca sĩ
      </h2>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default AdminSinger;
