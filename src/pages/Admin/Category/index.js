import React from "react";
import { Button, message, Popconfirm, Space, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { removeCategories } from "../../../store/features/categorySlice";
import { Link } from "react-router-dom";

const AdminCategory = () => {
  const { categories } = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeCategories(id))
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
      title: "Tên",
      dataIndex: "name",
      key: "name",
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

  const data = categories?.map((item, key) => ({
    key,
    stt: key + 1,
    name: item.name,
    description: item.description,
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
        Danh sách thể loại
      </h2>
      <Table columns={columns} dataSource={data} />
    </>
  );
};
export default AdminCategory;
