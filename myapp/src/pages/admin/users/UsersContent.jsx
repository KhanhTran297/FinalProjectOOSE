import useAdmin from "@/hook/useAdmin";
import { Space, Table, Tag } from "antd";

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const UsersContent = (props) => {
  const { handleDeleteAccount } = useAdmin();
  console.log("ne ne ne", props.data);
  const columns = [
    {
      title: "Name",
      dataIndex: "fullName",
      key: "fullName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "LastLogin",
      dataIndex: "lastLogin",
      key: "lastLogin",
    },
    // {
    //   title: "Tags",
    //   key: "tags",
    //   dataIndex: "tags",
    //   render: (_, { tags }) => (
    //     <>
    //       {tags.map((tag) => {
    //         let color = tag.length > 5 ? "geekblue" : "green";
    //         if (tag === "loser") {
    //           color = "volcano";
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={handleDeleteAccount(record.id)}>Delete</a>
        </Space>
      ),
    },
  ];
  return <Table columns={columns} dataSource={props.data} />;
};
export default UsersContent;
