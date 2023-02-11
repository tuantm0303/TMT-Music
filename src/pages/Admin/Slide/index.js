import { Button, message, Popconfirm, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { slidesApi } from "../../../services/slide";

const AdminSlide = () => {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await slidesApi.list();
      setSlides(data);
    })();
  }, []);

  const handleRemove = (id) => {
    slidesApi
      .remove(id)
      .then(() => setSlides(slides.filter((item) => id !== item._id)))
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
      title: "Tên",
      dataIndex: "name",
      key: "name",
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
      title: "Hành động",
      dataIndex: "action",
      key: "action",
    },
  ];

  const data = slides?.map((item, key) => ({
    key,
    stt: key + 1,
    name: item.name,
    image: item.image,
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
          description={`Bạn có muốn xóa "${item.name}" không?`}
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
        Danh sách slide
      </h2>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default AdminSlide;
