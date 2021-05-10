import { Layout } from "antd";
import React from "react";

const { Header, Footer, Sider, Content } = Layout;

const Home = () => {
    return (
        <>
            <Layout>
                <Sider>Sider</Sider>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </>
    )
};

export default Home;
