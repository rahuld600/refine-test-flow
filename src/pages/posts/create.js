import React, { useState } from "react";
import { Create, useForm, useSelect } from "@refinedev/antd";

import { Form, Input, Select } from "antd";

import MDEditor from "@uiw/react-md-editor";

export const PostCreate = () => {
  const { formProps, saveButtonProps } = useForm();

  const { selectProps: userTypesSelectProps } = useSelect({
    resource: "userTypes",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
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
          <Select {...userTypesSelectProps} />
        </Form.Item>
      </Form>
    </Create>
  );
};
