import { Button, Form, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import config from "../../../config";
import { authorsApi } from "../../../services/author";

const FormAuthor = () => {
  const navigate = useNavigate();
  // add
  const add = async (data) => {
    await authorsApi.create(data);
    message.success("Thêm thành công!");
    navigate(config.routes.adminAuthorList);
  };

  // read
  const { id } = useParams();
  const [author, setAuthor] = useState({});
  useEffect(() => {
    (async (id) => {
      const { data } = await authorsApi.read(id);
      setAuthor(data);
    })(id ? undefined : "");
  }, [id]);

  // update
  const edit = async (author) => {
    await authorsApi.update({ ...author, _id: id });
    message.success("Sửa thành công!");
    navigate(config.routes.adminAuthorList);
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
        <h1 className="text-center my-5">Thêm thể loại</h1>
        <Form
          name="basic"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          autoComplete="off"
          onFinish={onFinish}
        >
          <Form.Item
            label="Tên thể loại"
            name="name"
            rules={[
              {
                required: true,
                message: "Bắt buộc phải nhập tên thể loại!",
              },
              {
                min: 2,
                message: "Bắt buộc phải nhập trên 2 kí tự!",
              },
            ]}
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
    return Object.keys(author).length ? (
      <>
        <h1 className="text-center my-5">Sửa thể loại</h1>
        <Form
          name="basic"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          autoComplete="off"
          initialValues={author}
          onFinish={onFinish}
        >
          <Form.Item
            label="Tên thể loại"
            name="name"
            rules={[
              {
                required: true,
                message: "Bắt buộc phải nhập tên thể loại!",
              },
              {
                min: 2,
                message: "Bắt buộc phải nhập trên 2 kí tự!",
              },
            ]}
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

export default FormAuthor;
