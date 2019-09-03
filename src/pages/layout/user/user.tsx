import React from 'react';
import { Avatar, Badge, Dropdown, Icon, Menu } from 'antd';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

export default class User extends React.Component {
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
      <div className="user" style={{ margin: '25px 0' }}>
        <div
          className="userInfo"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 10px',
            margin: '15px 0'
          }}
        >
          <Icon type="user" />
          <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
            <Icon type="ellipsis" />
          </Dropdown>
        </div>
        <div
          className="avatar"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 10px',
            margin: '15px 0'
          }}
        >
          <Badge count={1}>
            <Avatar size={96} icon="user" />
          </Badge>
        </div>
        <h4 style={{ textAlign: 'center' }}>
          Hello Adrain Nader <span>adrain.nader@yahoo.com</span>
        </h4>
      </div>
    );
  }
}
