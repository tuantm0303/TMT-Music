import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import config from "../../../config";
import { createCategories } from "../../../store/features/categorySlice";

const AddCategory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = (data) => {
    dispatch(createCategories(data));
    navigate(config.routes.adminCategoryList);
  };

  return (
    <>
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
};
export default AddCategory;
