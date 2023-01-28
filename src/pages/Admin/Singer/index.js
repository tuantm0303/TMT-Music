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
      title: "Quốc gia",
      dataIndex: "country",
      key: "country",
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
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
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
    country: item.country,
    image: item.image,
    description: item.description,
    action: (
      <Space size="middle">
        <Button
          type="primary"
          style={{ backgroundColor: "yellow", color: "black" }}
        >
          <Link to={item._id}>Sửa</Link>
        </Button>
        <Button
          type="primary"
          style={{ backgroundColor: "red", color: "black" }}
        >
          <Popconfirm
            title="Xóa"
            description={`Bạn có muốn xóa "${item.fullname}" không?`}
            onConfirm={() => handleRemove(item._id)}
            okText="Có"
            cancelText="Không"
            style={{ background: "#1677ff" }}
          >
            Xóa
          </Popconfirm>
        </Button>
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
