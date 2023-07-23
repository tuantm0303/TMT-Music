import { Button, Form, Input, Select, message } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import config from "../../../config";
import { menuApi } from "../../../services/menu";
import { validateMessages } from "../../../utils/validationForm";
import './form.scss';

const FormMenu = () => {
  const navigate = useNavigate();
  // add
  const add = async (data) => {
    await menuApi.create(data);
    message.success("Thêm thành công!");
    navigate(config.routes.adminMenuList);
  };

  // read
  const { id } = useParams();
  const [menu, setMenu] = useState({});
  useEffect(() => {
    (async (id) => {
      const { data } = await menuApi.read(id);
      setMenu(data);
    })(id ? id : "");
  }, [id]);

  // update
  const edit = async (menu) => {
    await menuApi.update({ ...menu, _id: id });
    message.success("Sửa thành công!");
    navigate(config.routes.adminMenuList);
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
        <h1 className="appcseaslr">Thêm menu</h1>
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
            label="Tên"
            name="name"
            rules={[
              { required: true },
              {
                min: 2,
                message: "Tên menu bắt buộc phải nhập trên 2 kí tự!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Icon"
            name="icon"
            rules={[
              { required: true },
            ]}
          >
            <Input />
          </Form.Item>
          {/* <Form.Item
            label="Đường dẫn"
            name="path"
            rules={[
              { required: true },
            ]}
          >
            <Input />
          </Form.Item> */}
          <Form.Item
            label="Type"
            name="type"
            rules={[
              { required: true },
            ]}
          >
            <Select defaultValue='Type'>
              <Select.Option value="top">top</Select.Option>
              <Select.Option value="middle">middle</Select.Option>
              <Select.Option value="bottom">bottom</Select.Option>
              <Select.Option value="relative">relative</Select.Option>
            </Select>
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
    return Object.keys(menu).length ? (
      <>
        <h1 className="text-center my-5">Sửa menu</h1>
        <Form
          name="basic"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          autoComplete="off"
          initialValues={menu}
          validateMessages={validateMessages}
          onFinish={onFinish}
        >
          <Form.Item
            label="Tên"
            name="name"
            rules={[
              { required: true },
              {
                min: 2,
                message: "Tên menu bắt buộc phải nhập trên 2 kí tự!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Icon"
            name="icon"
            rules={[
              { required: true },
            ]}
          >
            <Input />
          </Form.Item>
          {/* <Form.Item
            label="Đường dẫn"
            name="path"
            rules={[
              { required: true },
            ]}
          >
            <Input />
          </Form.Item> */}
          <Form.Item
            label="Type"
            name="type"
            rules={[
              { required: true },
            ]}
          >
            <Select defaultValue='Type'>
              <Select.Option value="top">top</Select.Option>
              <Select.Option value="middle">middle</Select.Option>
              <Select.Option value="bottom">bottom</Select.Option>
              <Select.Option value="relative">relative</Select.Option>
            </Select>
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

export default FormMenu;
