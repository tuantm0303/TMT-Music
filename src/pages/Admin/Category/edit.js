import { Button, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import config from "../../../config";
import { categoriesApi } from "../../../services/category";
import { updateCategories } from "../../../store/features/categorySlice";

const EditCategory = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const [category, setCategory] = useState({});

  useEffect(() => {
    (async (id) => {
      const { data } = await categoriesApi.read(id);
      setCategory(data);
    })(id);
  }, [id]);

  const handleUpdate = (data) => {
    dispatch(updateCategories({ ...data, _id: id }));
    navigate(config.routes.adminCategoryList);
  };

  return Object.keys(category).length ? (
    <Form
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      autoComplete="off"
      initialValues={{ ...category }}
      onFinish={handleUpdate}
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
  ) : null;
};

export default EditCategory;
