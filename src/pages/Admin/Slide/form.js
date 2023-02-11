import { Button, Form, Input, message, Upload } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UploadOutlined } from "@ant-design/icons";
import config from "../../../config";
import { handleUploadFile } from "../../../utils/upload";
import { slidesApi } from "../../../services/slide";
import { validateMessages } from "../../../utils/validationForm";

const FormSlide = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  // create
  const add = async (data) => {
    await slidesApi.create(data);
    message.success("Thêm thành công!");
    navigate(config.routes.adminSlideList);
  };

  // read
  const { id } = useParams();
  const [slide, setSlide] = useState({});
  useEffect(() => {
    (async (id) => {
      const { data } = await slidesApi.read(id);
      setSlide(data);
    })(id ? id : "");
  }, [id]);

  // update
  const edit = async (slide) => {
    await slidesApi.update({ ...slide, _id: id });
    message.success("Sửa thành công!");
    navigate(config.routes.adminSlideList);
  };

  const onFinish = async (data) => {
    if (!id) {
      const image = await handleUploadFile(file);
      add({ ...data, image });
    } else {
      edit(data, { ...slide });
      const image = await handleUploadFile(file);
      edit({ ...data, image });
    }
  };

  const handleChange = async (e) => {
    const { originFileObj: file } = e.file;
    setFile(file);
  };
  if (!id) {
    return (
      <>
        <h1 className="text-center my-5">Thêm slide</h1>
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
            label="Tên slide"
            name="name"
            rules={[
              { required: true },
              {
                min: 2,
                message: "Tên slide bắt buộc phải nhập trên 2 kí tự!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Ảnh" name="image" rules={[{ required: true }]}>
            <Upload onChange={handleChange} listType="picture">
              <Button icon={<UploadOutlined />}>Tải ảnh lên</Button>
            </Upload>
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
    return Object.keys(slide).length ? (
      <>
        <h1 className="text-center my-5">Sửa slide</h1>
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
          initialValues={slide}
        >
          <Form.Item
            label="Tên slide"
            name="name"
            rules={[
              { required: true },
              {
                min: 2,
                message: "Tên slide bắt buộc phải nhập trên 2 kí tự!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Ảnh" name="image" rules={[{ required: true }]}>
            <Upload onChange={handleChange} listType="picture">
              <img
                src={slide.image}
                alt={slide.image}
                style={{ width: "50px" }}
              />
              <Button icon={<UploadOutlined />}>Tải ảnh lên</Button>
            </Upload>
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

export default FormSlide;
