import React, { Component } from 'react'
import { Menu, Icon } from "antd";
import { NavLink } from 'react-router-dom';
const SubMenu = Menu.SubMenu;
class MenuNavBar extends Component {

    render() {
        return (
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1">
                    <Icon type="pie-chart" />
                    <span><NavLink to='/' style={{color: '#fff'}}>Dashboard</NavLink></span>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="setting" />
                    <span><NavLink to="/author" style={{color: '#fff'}}>Settings</NavLink></span>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="desktop" />
                    <span><NavLink to='/category' style={{color: '#fff'}}>Category</NavLink></span>
                </Menu.Item>
                <SubMenu
                    key="sub1"
                    title={<span><Icon type="user" /><span>User</span></span>}
                >
                    <Menu.Item key="3">User</Menu.Item>
                    <Menu.Item key="4">Bill</Menu.Item>
                    <Menu.Item key="5">Alex</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub2"
                    title={<span><Icon type="team" /><span>Product</span></span>}
                >
                    <Menu.Item key="6">Team 1</Menu.Item>
                    <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>
                <Menu.Item key="9">
                    <Icon type="file" />
                    <span>File</span>
                </Menu.Item>
            </Menu>
        )
    }
}
export default MenuNavBar;
