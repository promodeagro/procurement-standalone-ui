"use client";
import React, { useState } from "react";
import { roboto } from "@/font/font";
import {
  AccountBookFilled,
  BellFilled,
  ProjectFilled,
  IdcardFilled,
  SignalFilled,
  SearchOutlined,
  VideoCameraOutlined,
  RightOutlined,
  LeftOutlined,
  AppstoreFilled,
  CalendarFilled
} from "@ant-design/icons";
import navWatermark from "../../../public/asset/sideBar.png"
import NavLogo from "../../../public/asset/NavLogo.png";
import { useRouter } from "next/navigation";
import { Layout, Menu, Button } from "antd";
import Navbar from "@/components/Navbar/Navbar";
import NavLink from "../nav-link";
import Image from "next/image";

const { Sider, Content } = Layout;


const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSider = () => {
    setCollapsed(!collapsed);
  };
  const router = useRouter();
  return (
    <>
      <Layout theme="dark" style={{ minHeight: "100vh" }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          theme="light"
          className="fixed "
          style={{ position: "fixed", height: "100vh" , width:"9rem" }}
        >
          <div className=" h-[4.1rem] flex items-center justify-center  border-b">
            <Image className="" src={NavLogo} />
          </div>

          {/* ... your existing Sider content */}
          {/* <Menu
            className={`${roboto.className} relative`}
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
            // selectedKeys={[router.pathname]}
            items={[
              {
                key: "1",
                icon: <AppstoreFilled />,
                label: <NavLink href="/main">Dashboard</NavLink>,
              },
            ]
        }
          /> */}
          <Menu
            className={`${roboto.className} relative`}
            theme="light"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={[
              {
                key: "g1",
                label: "Menu",
                type: "group",
                children: [
                  {
                    key: "1",
                    icon: <AppstoreFilled />,
                    label: <NavLink href="/dashboard">Dashboard</NavLink>,
                  },
                ],
              },
              {
                key: "g2",
                label: "Approval centre",
                type: "group",
                children: [
                  {
                    key: "2",
                    icon:<CalendarFilled />,
                    label: <NavLink href="/dashboard/requester">My Requests</NavLink>,
                  },
                ],
              },
              {
                key: "g3",
                label: "Support",
                type: "group",
                children: [
                  {
                    key: "3",
                    icon:<CalendarFilled />,
                    label: "Settings",
                  },
                  {
                    key: "4",
                    icon:<CalendarFilled />,
                    label: "Help",
                  },
                ],
              },
            ]}
          />
          <Image src={navWatermark} className="opacity-10"></Image>
          {/* <Button
            theme="dark"
            className="bg-white absolute top-2/4 -right-3"
            type="text"
            icon={collapsed ? <RightOutlined className="" /> : <LeftOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 16,
              height: 64,
              clipPath: `polygon(0 0, 100% 21%, 99% 80%, 0% 100%)`,
            }}
          /> */}
        </Sider>
        <Layout
          className="site-layout"
          style={{ marginLeft: collapsed ? 80 : 200 }}
        >
          <Navbar />
          <Content
            style={{ margin: "0px 0px", padding: "0px 4px", minHeight: 280,}}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default MainLayout;
