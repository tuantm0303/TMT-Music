import { Button, message, Popconfirm, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { menuApi } from "../../../services/menu";

const AdminMenu = () => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await menuApi.list()
      setMenus(data);
    })();
  }, []);

  const handleRemove = (id) => {
    menuApi
      .remove(id)
      .then(() => setMenus(menus.filter((item) => id !== item?._id)))
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
      title: "Icon",
      dataIndex: "icon",
      key: "icon",
    },
    // {
    //   title: "Path",
    //   dataIndex: "path",
    //   key: "path",
    // },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Hành động",
      dataIndex: "action",
      key: "action",
    },
  ];

  const data = menus?.map((item, key) => ({
    key,
    stt: key + 1,
    name: item?.name,
    icon: <div dangerouslySetInnerHTML={{ __html: item?.icon }}></div>,
    path: item?.path,
    type: item?.type,
    action: (
      <Space size="middle">
        <Link to={item?._id}>
          <Button
            type="primary"
            style={{ backgroundColor: "yellow", color: "black" }}
          >
            Sửa
          </Button>
        </Link>

        <Popconfirm
          title="Xóa"
          description={`Bạn có muốn xóa "${item?.name}" không?`}
          onConfirm={() => handleRemove(item?._id)}
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
  console.log(data);

  return (
    <>
      <h2 className="title-page font-bold text-center text-2xl py-5">
        Danh sách menu
      </h2>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default AdminMenu;
