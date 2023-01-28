import { Button, message, Popconfirm, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { authorsApi } from "../../../services/author";

const AdminAuthor = () => {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await authorsApi.list();
      setAuthors(data);
    })();
  }, []);

  const handleRemove = (id) => {
    authorsApi
      .remove(id)
      .then(() => setAuthors(authors.filter((item) => id !== item._id)))
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
      title: "Hành động",
      dataIndex: "action",
      key: "action",
    },
  ];

  const data = authors?.map((item, key) => ({
    key,
    stt: key + 1,
    name: item.name,
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
            description={`Bạn có muốn xóa "${item.name}" không?`}
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
        Danh sách tác giả
      </h2>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default AdminAuthor;
