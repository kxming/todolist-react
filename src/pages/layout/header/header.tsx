import React from "react";
import {Layout, Menu, Input, Icon} from "antd";
import './header.less';

const {Header} = Layout;
const {Search} = Input;

export default class MainHeader extends React.Component {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Header className="header">
                <div className="logo"/>
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['About']}
                    style={{lineHeight: '64px'}}
                >
                    <Menu.Item key="About">About Us</Menu.Item>
                    <Menu.Item key="News">News</Menu.Item>
                    <Menu.Item key="User">User Policy</Menu.Item>
                    <Menu.Item key="Contacts">Contacts</Menu.Item>
                </Menu>
                <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: 200 }}
                />
                <Input addonBefore={<Icon type="setting" />} defaultValue="mysite" />
                <Input addonBefore={<Icon type="setting" />} defaultValue="mysite" />
            </Header>
        );
    }
}
