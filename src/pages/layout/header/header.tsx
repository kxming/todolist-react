import React from 'react';
import { Layout, Menu, Input, Icon, Row, Col } from 'antd';
import './header.less';

const { Header } = Layout;
const { Search } = Input;

export default class MainHeader extends React.Component {
  render():
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | string
    | number
    | {}
    | React.ReactNodeArray
    | React.ReactPortal
    | boolean
    | null
    | undefined {
    return (
      <Header className="header">
        <Row gutter={16}>
          <Col span={4}>
            <div className="logo">
              <Icon type="menu" />
              Constructor
            </div>
          </Col>
          <Col span={7}>
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={['About']}
              style={{ lineHeight: '64px', border: 'none' }}
            >
              <Menu.Item key="About">About Us</Menu.Item>
              <Menu.Item key="News">News</Menu.Item>
              <Menu.Item key="User">User Policy</Menu.Item>
              <Menu.Item key="Contacts">Contacts</Menu.Item>
            </Menu>
          </Col>
          <Col span={13}>
            <Row>
              <Col span={8}>
                <Search
                  allowClear
                  placeholder="Search"
                  onSearch={value => console.log(value)}
                  style={{ width: 200 }}
                />
              </Col>
              <Col span={8}>
                <Input
                  allowClear
                  prefix={<Icon type="environment" theme="filled" />}
                  placeholder="Environment"
                  style={{ width: 200 }}
                />
              </Col>
              <Col span={8}>
                <Input
                  allowClear
                  prefix={<Icon type="aliwangwang" />}
                  placeholder="Aliwangwang"
                  style={{ width: 200 }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
    );
  }
}
