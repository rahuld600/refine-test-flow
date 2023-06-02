import { useShow, useOne } from "@refinedev/core";

import { Show, MarkdownField } from "@refinedev/antd";

import { Typography } from "antd";

const { Title, Text } = Typography;

export const PostShow = () => {
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  const { data: userTypesData, isLoading: userTypesLoading } = useOne({
    resource: "userTypes",
    id: record?.userType || "",
    queryOptions: {
      enabled: !!record,
    },
  });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Id</Title>
      <Text>{record?.id}</Text>

      <Title level={5}>Name</Title>
      <Text>{record?.name}</Text>

      <Title level={5}>User Type</Title>
      <Text>{userTypesLoading ? "Loading..." : userTypesData?.data.title}</Text>
    </Show>
  );
};
