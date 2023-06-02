import { useMany } from "@refinedev/core";

import {
  List,
  TextField,
  useTable,
  EditButton,
  ShowButton,
  DeleteButton,
  ImageField,
} from "@refinedev/antd";

import { Table, Space } from "antd";

export const PostList = () => {
  const { tableProps } = useTable();

  const userUserTypes =
    tableProps?.dataSource?.map((item) => item.userType) ?? [];
  console.log(userUserTypes);
  const { data, isLoading } = useMany({
    resource: "userTypes",
    ids: userUserTypes,
    queryOptions: {
      enabled: userUserTypes.length > 0,
    },
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="id"
          title="ID"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="image"
          title="Image"
          render={(value) => (
            <ImageField
              style={{
                borderRadius: 10,
                width: 80,
                height: 80,
                objectFit: "contain",
              }}
              value={"https://picsum.photos/200/300"}
            />
          )}
        />
        <Table.Column
          dataIndex="name"
          title="Name"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex={"userType"}
          title="User Type"
          render={(value) => {
            console.log(value);
            if (isLoading) {
              return <TextField value="Loading..." />;
            }

            return (
              <TextField
                value={data?.data.find((item) => item.id === value)?.title}
              />
            );
          }}
        />
        <Table.Column
          title="Actions"
          dataIndex="actions"
          render={(_, record) => {
            return (
              <Space>
                <EditButton hideText size="small" recordItemId={record.id} />
                <ShowButton hideText size="small" recordItemId={record.id} />
                <DeleteButton hideText size="small" recordItemId={record.id} />
              </Space>
            );
          }}
        />
      </Table>
    </List>
  );
};
