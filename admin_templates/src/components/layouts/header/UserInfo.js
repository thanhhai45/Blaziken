import React, { Component } from 'react'
import { Menu, Dropdown, Icon, Avatar } from 'antd';
import { Link } from 'react-router-dom';
export default class UserInfo extends Component {
    render() {
        const menu = (
            <Menu>
            <Menu.Item key="0">
                <Link to="http://www.alipay.com/">1st menu item</Link>
            </Menu.Item>
            <Menu.Item key="1">
                <Link to="http://www.taobao.com/">2nd menu item</Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">Logout</Menu.Item>
            </Menu>
        );
        return (
            <div>
            <Avatar size="large" icon="user" />
            <Dropdown overlay={menu} trigger={['click']}>
                <Link className="ant-dropdown-link" to="#" style={{ textDecoration:'none' }} >
                <span style={{paddingLeft: '5px', paddingRight: '5px'}}>Lê Thanh Hải</span>
                <Icon type="down" />
                </Link>
            </Dropdown>
            </div>
        )
    }
}
