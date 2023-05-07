import React, { useEffect } from "react";
import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
  AntDesignOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Breadcrumb,
  Button,
  Dropdown,
  Layout,
  Menu,
  Modal,
  Space,
  theme,
} from "antd";
import { useState } from "react";
import useAccount from "@/hook/useAccount";
import Edit from "@/components/profile/Edit";
import useCookie from "@/hook/useCookie";
import { useSelector } from "react-redux";
import ModalContent from "@/components/admin/ModalContent";
import { useNavigate } from "react-router-dom";
import UsersContent from "./users/UsersContent";
import useAdmin from "@/hook/useAdmin";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
// Items for sider

const AdminPage = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const selector = useSelector((state) => state.account);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { getListPost, getProfileAccount } = useAccount();
  const { handleGetListAccount, listAccount } = useAdmin();
  const { removeCookie, isLoggedIn } = useCookie();
  const [modalType, setModalType] = useState();
  // Method handle title of Modal
  const [titleModal, setTitleModal] = useState();
  // Method for handling Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (e) => {
    setModalType((state) => (state = e.target.innerText));
    setTitleModal((state) => (state = e.target.innerText));
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleLogOut = () => {
    removeCookie();
    navigate("/login");
  };
  // Items for userDropDown
  const items = [
    {
      key: "0",
      // type: "group",
      label: "Create account",
      children: [
        {
          key: "1-1",
          label: <p onClick={showModal}>Admin</p>,
        },
        {
          key: "1-2",
          label: <p onClick={showModal}>Expert</p>,
        },
      ],
    },
    {
      label: <p onClick={handleLogOut}>Log out</p>,
      key: "1",
    },
  ];
  const siderItems = [
    {
      label: (
        <div className=" flex items-center">
          <UserOutlined className=" mr-1" />
          User
        </div>
      ),
      key: "0",
    },
  ];
  //variables
  // const useraccount = selector.account;
  // useEffect(() => {
  //   if (isLoggedIn()) {
  //     getProfileAccount();
  //   }
  // }, [useraccount]);
  useEffect(() => {
    handleGetListAccount();
  }, [listAccount]);
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 140,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
            position: "relative",
            borderRadius: 10,
          }}
        >
          <img
            src="./img/logo.jpg"
            alt=""
            className=" absolute h-full w-full rounded-[10px]"
          />
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={siderItems}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className=" bg-white relative mb-9">
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
            className=" absolute right-[20px]"
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <Avatar
                  size={40}
                  className=" absolute right-0  top-0 -translate-x-[20px] translate-y-[10px] hover:cursor-pointer  "
                  src="./img/defaultAvatar.jpg"
                ></Avatar>
              </Space>
            </a>
          </Dropdown>
          {/* <Button type="primary" className=" bg-cyan-700">
            Create
          </Button> */}
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          {/* <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          <UsersContent
            data={listAccount?.data?.content ? listAccount.data.content : ""}
          ></UsersContent>
        </Content>

        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
      <Modal
        title={titleModal}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <ModalContent type={modalType}></ModalContent>
      </Modal>
    </Layout>
  );
};

export default AdminPage;
