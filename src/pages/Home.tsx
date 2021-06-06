import "antd/dist/antd.css";

import { BookOutlined, HomeOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link, Route } from "react-router-dom";

import BookshelfList from "components/BookshelfList";
import React from "react";

const { Header, Footer, Sider, Content } = Layout;

const Home = () => {
  return (
    <>
      <Layout>
        <Header>
          <div className="logo" />
          <h1>Header</h1>
        </Header>
        <Layout>
          <Route></Route>
          <Sider>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={<BookOutlined />}>
                nav 1
              </Menu.Item>
              <Menu.Item key="2" icon={<HomeOutlined />}>
                nav 2
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/home/login">login</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content>
            <BookshelfList />
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};

export default Home;
