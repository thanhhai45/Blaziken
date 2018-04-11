import React, { Component } from 'react'
import {Menu, Dropdown, Icon, Button} from 'antd';
// import PageSize from './../../constants';
const PageSize = 10;
class DropdownPage extends Component {
 
    handleClick = (e) => {
        console.log(e);
    }

    row = () => {
        var rows = [];
        for (let i = 1; i<=PageSize; i++) {
            rows.push(<Menu.Item onClick={this.handleClick.bind(this, i)} key={i}>{i*5}</Menu.Item>);
        }
        return rows;
    }
     
    render() {
        const menu = (
            <Menu>
                {this.row()}
            </Menu>
        );
        return (
            <Dropdown style={{paddingLeft: '90%'}} overlay={menu} trigger={['click']}>
                <Button className="ant-dropdown-link" href="#">
                    Change Page Size<Icon type="down" />
                </Button>
            </Dropdown>
        )
    }
}
export default DropdownPage;
