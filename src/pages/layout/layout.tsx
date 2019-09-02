import React from 'react';
import {Layout, Menu, Icon, Breadcrumb, Input} from 'antd';
import './layout.less';
import MainHeader from "./header/header";
import MainMenu from "./menu/menu";

const {SubMenu} = Menu;
const {Header, Sider, Content, Footer} = Layout;
const {Search} = Input;

export default class MainLayout extends React.Component {

    render() {
        return (
            <Layout>
                <MainHeader/>
                <Content style={{padding: '0 50px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout style={{padding: '24px 0'}}>
                        <Sider width={200}>
                            <MainMenu/>
                        </Sider>
                        <Content style={{padding: '0 24px', minHeight: 280, background: '#f8f9fd'}}>Content</Content>
                    </Layout>
                </Content>
                <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        );
    }
}
