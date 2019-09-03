import React from 'react';
import { Layout } from 'antd';
import './layout.less';
import MainHeader from './header/header';
import MainMenu from './menu/menu';
import User from './user/user';

const { Sider, Content, Footer } = Layout;

export default class MainLayout extends React.Component {
  render() {
    return (
      <Layout>
        <MainHeader />
        <Content style={{ padding: '0 50px' }}>
          <Layout style={{ padding: '24px 0' }}>
            <Sider width={250}>
              <User />
              <MainMenu />
            </Sider>
            <Content
              style={{
                margin: '0 24px',
                padding: 10,
                minHeight: 280,
                background: '#f8f9fd',
                borderRadius: 30
              }}
            >
              Content
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}
