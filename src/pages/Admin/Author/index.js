import { Button, message, Popconfirm, Space, Table } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeAuthor } from "../../../store/features/authorSlice";

const AdminAuthor = () => {
  const { authors } = useSelector((state) => state.authorReducer);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeAuthor(id))
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
