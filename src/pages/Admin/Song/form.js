import { Button, Form, Input, message } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import config from "../../../config";
import { createSong, updateSong } from "../../../store/features/songSlice";
import { songsApi } from "../../../services/song";
import SelectOptions from "./components/SelectOptions";

const FormSong = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "Bắt buộc phải nhập ${label}!",
    types: {
      number: "${label} phải là một số!",
    },
    number: {
      range: "${label} từ ${min} đến ${max}",
    },
  };

  // create
  const add = (data) => {
    dispatch(createSong(data))
      .unwrap()
      .then(() => navigate(config.routes.adminSongList))
      .then(() => message.success("Thêm thành công!"))
      .catch(() => message.error("Lỗi!"));
  };

  // read
  const { id } = useParams();
  const [song, setSong] = useState({});
  useEffect(() => {
    (async (id) => {
      const { data } = await songsApi.read(id);
      setSong(data);
    })(id ? id : "");
  }, [id]);

  // update
  const edit = (data) => {
    dispatch(updateSong({ ...data, _id: id }))
      .unwrap()
      .then(() => navigate(config.routes.adminSongList))
      .then(() => message.success("Sửa thành công!"))
      .catch(() => message.error("Lỗi!"));
  };

  const onFinish = (data) => {
    if (!id) {
      add(data);
    } else {
      edit(data);
    }
  };

  if (!id) {
    return (
      <>
        <h1 className="text-center my-5">Thêm bài hát</h1>
        <Form
          name="basic"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          autoComplete="off"
          validateMessages={validateMessages}
          onFinish={onFinish}
        >
          <Form.Item
            label="Tên bài hát"
            name="title"
            rules={[
              { required: true },
              {
                min: 2,
                message: "Tên bài hát bắt buộc phải nhập trên 2 kí tự!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Ảnh" name="image" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <SelectOptions />
          <Form.Item
            label="Lời bài hát"
            name="lyric"
            rules={[{ required: true }]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              style={{ background: "#1677ff" }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  } else {
    return Object.keys(song).length ? (
      <>
        <h1 className="text-center my-5">Sửa bài hát</h1>
        <Form
          name="basic"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          autoComplete="off"
          validateMessages={validateMessages}
          onFinish={onFinish}
          initialValues={{
            ...song,
            categoryId: song.categoryId._id,
            authorId: song.authorId._id,
            singerId: song.singerId._id,
          }}
        >
          <Form.Item
            label="Tên bài hát"
            name="title"
            rules={[
              { required: true },
              {
                min: 2,
                message: "Tên bài hát bắt buộc phải nhập trên 2 kí tự!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Ảnh" name="image" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <SelectOptions />
          <Form.Item
            label="Lời bài hát"
            name="lyric"
            rules={[{ required: true }]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              style={{ background: "#1677ff" }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </>
    ) : null;
  }
};

export default FormSong;
