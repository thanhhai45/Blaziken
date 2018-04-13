import React, { Component } from 'react'
import { Menu, Dropdown, Icon, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import Profile from './modal/Profile';
export default class UserInfo extends Component {
    state={
        visible:false
    }

    onLogoutSuccess=()=>{
        this.props.onLogoutSuccess();
    }
    removeAuthentication=(e)=>{
        e.preventDefault();
        localStorage.removeItem("auth_token");
        this.onLogoutSuccess();
    }
    showModal=()=>{
        this.setState({
            visible:true
        })
    }

    render() {
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <Link to="#" onClick={this.showModal}>Profile</Link>
                </Menu.Item>
                <Menu.Item key="1">
                    <Link to="http://www.taobao.com/">Change Password</Link>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3"><Link onClick={this.removeAuthentication} to='/'>Logout</Link></Menu.Item>
            </Menu>
        );
        return (
            <div>
                <Profile visible={this.state.visible}/>
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
