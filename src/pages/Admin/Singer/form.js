import { Button, Form, Input, InputNumber, message, Upload } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import config from "../../../config";
import {
  createSinger,
  updateSinger,
} from "../../../store/features/singerSlice";
import { singersApi } from "../../../services/singer";
import { handleUploadFile } from "../../../utils/upload";
import { UploadOutlined } from "@ant-design/icons";
import { validateMessages } from "../../../utils/validationForm";

const FormSinger = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // create
  const addSinger = (data) => {
    dispatch(createSinger(data))
      .unwrap()
      .then(() => navigate(config.routes.adminSingerList))
      .then(() => message.success("Thêm thành công!"))
      .catch(() => message.error("Lỗi!"));
  };

  // read
  const { id } = useParams();
  const [singer, setSinger] = useState({});
  useEffect(() => {
    (async (id) => {
      const { data } = await singersApi.read(id);
      setSinger(data);
    })(id ? id : "");
  }, [id]);

  // update
  const editSinger = (data) => {
    dispatch(updateSinger({ ...data, _id: id }))
      .unwrap()
      .then(() => navigate(config.routes.adminSingerList))
      .then(() => message.success("Sửa thành công!"))
      .catch(() => message.error("Lỗi!"));
  };

  const onFinish = async (data) => {
    if (!id) {
      const image = await handleUploadFile(file);
      addSinger({ ...data, image });
    } else {
      editSinger(data, { ...singer });
      const image = await handleUploadFile(file);
      editSinger({ ...data, image });
    }
  };

  const handleChange = async (e) => {
    const { originFileObj: file } = e.file;
    setFile(file);
  };
  if (!id) {
    return (
      <>
        <h1 className="text-center my-5">Thêm ca sĩ</h1>
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
            label="Tên ca sĩ"
            name="fullname"
            rules={[
              { required: true },
              {
                min: 2,
                message: "Tên ca sĩ bắt buộc phải nhập trên 2 kí tự!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Tuổi"
            name="age"
            rules={[{ required: true }, { type: "number", min: 1, max: 99 }]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            label="Quốc gia"
            name="country"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Ảnh" name="image" rules={[{ required: true }]}>
            <Upload onChange={handleChange} listType="picture">
              <Button icon={<UploadOutlined />}>Tải ảnh lên</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            label="Mô tả"
            name="description"
            rules={[{ required: true }]}
          >
            <Input />
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
    return Object.keys(singer).length ? (
      <>
        <h1 className="text-center my-5">Sửa ca sĩ</h1>
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
          initialValues={singer}
          onFinish={onFinish}
        >
          <Form.Item
            label="Tên ca sĩ"
            name="fullname"
            rules={[
              { required: true },
              {
                min: 2,
                message: "Tên ca sĩ bắt buộc phải nhập trên 2 kí tự!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Tuổi"
            name="age"
            rules={[{ required: true }, { type: "number", min: 1, max: 99 }]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            label="Quốc gia"
            name="country"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Ảnh" name="image" rules={[{ required: true }]}>
            <Upload onChange={handleChange} listType="picture">
              <img
                src={singer.image}
                alt={singer.image}
                style={{ width: "50px" }}
              />
              <Button icon={<UploadOutlined />}>Tải ảnh lên</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            label="Mô tả"
            name="description"
            rules={[{ required: true }]}
          >
            <Input />
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

export default FormSinger;
