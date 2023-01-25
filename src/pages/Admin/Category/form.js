import { Button, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import config from "../../../config";
import { categoriesApi } from "../../../services/category";
import {
  createCategories,
  updateCategories,
} from "../../../store/features/categorySlice";

const FormCategory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // create
  const addCategory = async (data) => {
    dispatch(createCategories(data));
    navigate(config.routes.adminCategoryList);
  };

  // read
  const { id } = useParams();
  const [category, setCategory] = useState({});
  useEffect(() => {
    (async (id) => {
      const { data } = await categoriesApi.read(id);
      setCategory(data);
    })(id);
  }, [id]);

  //update
  const editCategories = async (data) => {
    dispatch(updateCategories({ ...data, _id: id }));
    navigate(config.routes.adminCategoryList);
  };

  const onFinish = (data) => {
    if (id) {
      editCategories(data);
    } else {
      addCategory(data);
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
            label="Mô tả"
            name="description"
            rules={[
              {
                required: true,
                message: "Bắt buộc phải nhập mô tả!",
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
    return Object.keys(category).length ? (
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
          initialValues={category}
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
            label="Mô tả"
            name="description"
            rules={[
              {
                required: true,
                message: "Bắt buộc phải nhập mô tả!",
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
export default FormCategory;