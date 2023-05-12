import { Button, Form, Input, Select } from "antd";
import React  from "react";
import useAdmin from "@/hook/useAdmin";


const SearchForm = (props) => {
  const { fieldSearch } = props;
  const { setParams} = useAdmin();
  const handleSearch = (value) => {
    const params = new URLSearchParams();
    Object.keys(value).forEach((key) => {
      if (value[key] !== undefined && value[key] !== "") {
        //object bao gồm các key và value của các field có trên search form,
        params.set(key, value[key]);
      }
     setParams(params)
    });
  };
  return (
    <Form onFinish={handleSearch}>
      {fieldSearch.map((field) => {
        return (
          <Form.Item name={field.key}>
            {field.type == "Select" ? (
              <Select
                options={field.options}
                placeholder={field.placeholder}
                allowClear={true}
              ></Select>
            ) : (
              <Input placeholder={field.placeholder}></Input>
            )}
          </Form.Item>
        );
      })}
      <Form.Item>
        <Button htmlType="submit">Search</Button>
      </Form.Item>
    </Form>
  );
};

export default SearchForm;
