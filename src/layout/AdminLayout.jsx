import AdminHeader from "@/components/admin/AdminHeader";
import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SideBar from "@/components/admin/SideBar";

const DashboardStyles = styled.div`
  max-width: 100%;
  margin: 0 auto;
  .dashboard {
    &-heading {
      font-weight: bold;
      font-size: 25px;
      margin-bottom: 5px;
      color: black;
    }
    &-short-desc {
      font-size: 14px;
      color: gray;
    }
    &-main {
      display: grid;
      grid-template-columns: 300px minmax(0, 1fr);
      padding: 40px 20px;
      gap: 0 40px;
      align-items: start;
    }
    @media screen and (max-width: 1023.98px) {
      &-heading {
        font-size: 20px;
      }
      &-main {
        grid-template-columns: 100%;
        padding: 20px;
      }
    }
  }
`;
const AdminLayout = () => {
  return (
    <div className="">
      <Outlet></Outlet>
    </div>
  );
};

export default AdminLayout;
