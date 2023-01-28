import { Button, Form, Input, InputNumber, message } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import config from "../../../config";
import {
  createSinger,
  updateSinger,
} from "../../../store/features/singerSlice";
import { singersApi } from "../../../services/singer";

const FormSinger = () => {
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
  const addSinger = (data) => {
    dispatch(createSinger(data))
      .unwrap()
      .then(() => navigate(config.routes.adminSingerList))
      .then(() => message.success("Sửa thành công!"))
      .catch(() => message.error("Lỗi!"));
  };

  // read
  const { id } = useParams();
  const [singer, setSinger] = useState({});
  useEffect(() => {
    (async (id) => {
      const { data } = await singersApi.read(id);
      setSinger(data);
    })(id ? undefined : "");
  }, [id]);

  // update
  const editSinger = (data) => {
    dispatch(updateSinger({ ...data, _id: id }))
      .unwrap()
      .then(() => navigate(config.routes.adminSingerList))
      .then(() => message.success("Sửa thành công!"))
      .catch(() => message.error("Lỗi!"));
  };

  const onFinish = (data) => {
    if (!id) {
      addSinger(data);
    } else {
      editSinger(data);
    }
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
                message: "Tên thể loại bắt buộc phải nhập trên 2 kí tự!",
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
            <Input />
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
                message: "Tên thể loại bắt buộc phải nhập trên 2 kí tự!",
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
            <Input />
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
