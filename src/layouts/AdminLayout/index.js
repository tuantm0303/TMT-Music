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
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
          }}
        />
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
