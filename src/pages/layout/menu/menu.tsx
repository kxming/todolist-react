import React from 'react';
import { Icon, Menu } from 'antd';

export default class MainMenu extends React.Component {
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
      <Menu
        mode="inline"
        defaultSelectedKeys={['appstore']}
        defaultOpenKeys={['appstore']}
        style={{ border: 'none' }}
      >
        <Menu.Item key="appstore">
          <Icon type="appstore" theme="filled" />
          DashBoard
        </Menu.Item>
        <Menu.Item key="mail">
          <Icon type="mail" theme="filled" />
          Emails
        </Menu.Item>
        <Menu.Item key="file">
          <Icon type="file" theme="filled" />
          Invoice
        </Menu.Item>
        <Menu.Item key="cloud">
          <Icon type="cloud" theme="filled" />
          Files
        </Menu.Item>
        <Menu.Item key="fire">
          <Icon type="fire" theme="filled" />
          Events
        </Menu.Item>
        <Menu.Item key="team">
          <Icon type="team" />
          Teams
        </Menu.Item>
        <Menu.Item key="calendar">
          <Icon type="calendar" theme="filled" />
          Calendars
        </Menu.Item>
        <Menu.Item key="setting">
          <Icon type="setting" theme="filled" />
          Settings
        </Menu.Item>
      </Menu>
    );
  }
}
