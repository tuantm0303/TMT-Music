import { Form, Select } from "antd";
import React, { useEffect, useState } from "react";
import { categoriesApi } from "../../../../../services/category";
import { singersApi } from "../../../../../services/singer";
import { authorsApi } from "../../../../../services/author";

const SelectOptions = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await categoriesApi.list();
      setCategories(data);
    })();
  }, []);

  const [singers, setSingers] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await singersApi.list();
      setSingers(data);
    })();
  }, []);

  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await authorsApi.list();
      setAuthors(data);
    })();
  }, []);

  const dataItem = [
    {
      label: "Thể loại",
      nameLabel: "categoryId",
      data: categories.map((item, index) => (
        <Select.Option key={index} value={item._id}>
          {item?.name}
        </Select.Option>
      )),
    },
    {
      label: "Ca sĩ",
      nameLabel: "singerId",
      data: singers.map((item, index) => (
        <Select.Option key={index} value={item._id}>
          {item?.fullname}
        </Select.Option>
      )),
    },
    {
      label: "Tác giả",
      nameLabel: "authorId",
      data: authors.map((item, index) => (
        <Select.Option key={index} value={item._id}>
          {item?.name}
        </Select.Option>
      )),
    },
  ];

  return dataItem.map((item, index) => (
    <Form.Item
      key={index}
      label={item.label}
      name={item.nameLabel}
      rules={[{ required: true }]}
    >
      <Select defaultValue={item.label}>{item.data}</Select>
    </Form.Item>
  ));
};

export default SelectOptions;
