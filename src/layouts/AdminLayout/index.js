import React, { useState } from "react";
import { Layout, theme } from "antd";
import MenuAdmin from "./MenuAdmin";

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
        color: "red",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ backgroundColor: "#252C47" }}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            backgroundColor: "#252C47",
          }}
        />
        <MenuAdmin />
      </Sider>
      <Layout className="site-layout" style={{ backgroundColor: "#1C2039" }}>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            backgroundColor: "#1C2039",
          }}
        />
        <Content style={{ margin: "0 16px", backgroundColor: "#272A49" }}>
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
            color: "whitesmoke",
            backgroundColor: "#1C2039",
          }}
        >
          TMT Music Admin
        </Footer>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
