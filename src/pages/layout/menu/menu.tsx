import React from 'react';
import { Icon, Menu } from 'antd';
import { Link } from 'react-router-dom';

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
          <Link to="/">
            <Icon type="appstore" theme="filled" />
            DashBoard
          </Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Link to="mail">
            <Icon type="mail" theme="filled" />
            Emails
          </Link>
        </Menu.Item>
        <Menu.Item key="file">
          <Link to="file">
            <Icon type="file" theme="filled" />
            Invoice
          </Link>
        </Menu.Item>
        <Menu.Item key="cloud">
          <Link to="cloud">
            <Icon type="cloud" theme="filled" />
            Files
          </Link>
        </Menu.Item>
        <Menu.Item key="fire">
          <Link to="fire">
            <Icon type="fire" theme="filled" />
            Events
          </Link>
        </Menu.Item>
        <Menu.Item key="team">
          <Link to="team">
            <Icon type="team" />
            Teams
          </Link>
        </Menu.Item>
        <Menu.Item key="calendar">
          <Link to="calendar">
            <Icon type="calendar" theme="filled" />
            Calendars
          </Link>
        </Menu.Item>
        <Menu.Item key="setting">
          <Link to="setting">
            <Icon type="setting" theme="filled" />
            Settings
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}
