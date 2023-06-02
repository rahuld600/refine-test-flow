import React, { useState } from "react";
import { Edit, useForm, useSelect } from "@refinedev/antd";

import { Form, Input, Select } from "antd";

import MDEditor from "@uiw/react-md-editor";

export const PostEdit = () => {
  const { formProps, saveButtonProps, queryResult } = useForm();

  const postData = queryResult?.data?.data;
  const { selectProps: userTypesSelectProps } = useSelect({
    resource: "userTypes",
    defaultValue: postData?.userTypes,
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="User Type"
          name={"userType"}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select onSelect={(e) => console.log(e)} {...userTypesSelectProps} />
        </Form.Item>
      </Form>
    </Edit>
  );
};
