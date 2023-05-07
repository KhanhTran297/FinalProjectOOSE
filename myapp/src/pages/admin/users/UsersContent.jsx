import useAdmin from "@/hook/useAdmin";
import { Space, Table, Tag, Modal, Button } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { useSelector } from "react-redux";
import classNames from "@/utils/classNames";
const UsersContent = (props) => {
  const { handleDeleteAccount, handleGetListAccount } = useAdmin();
  const selector = useSelector((state) => state.account);
  const listAccount = selector.listAccount;
  const handleReloadTable = (id) => {
    handleDeleteAccount.mutate(id);
    // handleGetListAccount();
  };
  const { confirm } = Modal;
  // handle confirm Modal
  const showConfirm = (id) => {
    confirm({
      title: "Do you Want to delete these account?",
      icon: <ExclamationCircleFilled />,
      content: "Xóa là đi luôn ó nho :<",
      onOk() {
        handleReloadTable(id);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  const columns = [
    {
      title: "Avatar",
      dataIndex: "avatarPath",
      key: "avatarPath",
      render: (avatar) => (
        <img src={avatar} className=" w-[40px] h-[40px] rounded-full"></img>
      ),
    },
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
      title: "Last Login",
      dataIndex: "lastLogin",
      key: "lastLogin",
    },
    {
      title: "Role",
      dataIndex: "roleDto",
      key: "roleDto",
      render: (roleDto) => {
        let color = "#FFFFFF";
        if (roleDto && roleDto.name === "ROLE ADMIN") {
          color = "#FF0000"; // set red background for ROLE ADMIN
        } else if (roleDto && roleDto.name === "ROLE END USER") {
          color = "#00FF00"; // set green background for ROLE END USER
        } else if (roleDto && roleDto.name === "ROLE EXPERT") {
          color = "#448aff"; // set blue background for ROLE END USER
        }
        return (
          <span style={{ backgroundColor: color }} className=" p-2 rounded-5">
            {roleDto?.name}
          </span>
        );
      },
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
          <Button
            type="primary"
            className=" bg-cyan-900"
            onClick={() => {
              showConfirm(record.id);
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  // useEffect(() => {
  //   handleGetListAccount;
  // }, [listAccount]);
  return <Table columns={columns} dataSource={listAccount.content} />;
};
export default UsersContent;
