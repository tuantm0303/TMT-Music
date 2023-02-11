import React, { useState } from "react";
import { Layout, theme } from "antd";
import { Link } from "react-router-dom";
import MenuAdmin from "./MenuAdmin";
import config from "../../config";

const { Header, Content, Footer, Sider } = Layout;

const AdminLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
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
            height: 70,
            margin: 16,
            padding: 10,
          }}
        >
          <Link to={config.routes.home}>
            <img
              src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg"
              alt=""
              class="w-full"
            />
          </Link>
        </div>
        <MenuAdmin />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content style={{ margin: "0 16px" }}>
          <div
            className="content"
            style={{
              padding: 10,
              borderRadius: 4,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            background: colorBgContainer,
          }}
        >
          TMT Music Admin
        </Footer>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
