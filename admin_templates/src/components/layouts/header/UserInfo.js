import React, { Component } from 'react'
import { Menu, Dropdown, Icon, Avatar } from 'antd';
export default class UserInfo extends Component {
    render() {
        const menu = (
            <Menu>
            <Menu.Item key="0">
                <a href="http://www.alipay.com/">1st menu item</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a href="http://www.taobao.com/">2nd menu item</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">Logout</Menu.Item>
            </Menu>
        );
        return (
            <div>
            <Avatar size="large" icon="user" />
            <Dropdown overlay={menu} trigger={['click']}>
                <a className="ant-dropdown-link" href="javascript:void()" style={{ textDecoration:'none' }} >
                <span style={{paddingLeft: '5px', paddingRight: '5px'}}>Lê Thanh Hải</span>
                <Icon type="down" />
                </a>
            </Dropdown>
            </div>
        )
    }
}
