import React, { Component } from 'react'
import { Menu, Dropdown, Icon, Avatar } from 'antd';
import { Link, Redirect } from 'react-router-dom';
export default class UserInfo extends Component {
    removeAuthentication(){
        localStorage.removeItem("user");
        console.log("logout")
    }

    render() {
        // if(localStorage.getItem("user")){
        //     return <Redirect />
        // }
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <Link to="http://www.alipay.com/">1st menu item</Link>
                </Menu.Item>
                <Menu.Item key="1">
                    <Link to="http://www.taobao.com/">2nd menu item</Link>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3"><Link onClick={this.removeAuthentication} to='/'>Logout</Link></Menu.Item>
            </Menu>
        );
        return (
            <div>
                <Avatar size="large" icon="user" />
                <Dropdown overlay={menu} trigger={['click']}>
                    <Link className="ant-dropdown-link" to="#" style={{ textDecoration: 'none' }} >
                        <span style={{ paddingLeft: '5px', paddingRight: '5px' }}>Lê Thanh Hải</span>
                        <Icon type="down" />
                    </Link>
                </Dropdown>
            </div>
        )
    }
}
