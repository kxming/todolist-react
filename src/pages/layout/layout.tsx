import React from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';
import './layout.less';
import MainHeader from './header/header';
import MainMenu from './menu/menu';
import User from './user/user';
import Dashborad from '../dashboard/dashborad';

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
                padding: 15,
                minHeight: 280,
                background: '#f8f9fd',
                borderRadius: 30
              }}
            >
              <Switch>
                <Route exact path="/" component={Dashborad} />
              </Switch>
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
