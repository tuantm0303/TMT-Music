import { Button, message, Popconfirm, Space, Table } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listSong, removeSong } from "../../../store/features/songSlice";

const AdminSong = () => {
  const { songs } = useSelector((state) => state.songReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listSong());
  }, [dispatch]);
  const handleRemove = (id) => {
    dispatch(removeSong(id))
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
      dataIndex: "title",
      key: "title",
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
      title: "Tác giả",
      dataIndex: "authorId",
      key: "authorId",
    },
    {
      title: "Ca sĩ",
      dataIndex: "singerId",
      key: "singerId",
    },
    {
      title: "Thể loại",
      dataIndex: "categoryId",
      key: "categoryId",
    },
    {
      title: "Hành động",
      dataIndex: "action",
      key: "action",
    },
  ];

  const data = songs?.map((item, key) => ({
    key,
    stt: key + 1,
    title: item?.title,
    image: item?.image,
    authorId: item?.authorId?.name,
    singerId: item?.singerId?.fullname,
    categoryId: item?.categoryId?.name,
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
            description={`Bạn có muốn xóa "${item.title}" không?`}
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
        Danh sách bài hát
      </h2>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default AdminSong;
