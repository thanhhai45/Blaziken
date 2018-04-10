import React, { Component } from 'react';
import SearchForm from './header/SearchForm';
import UserInfo from './header/UserInfo';
import { Layout, Row, Col } from 'antd';
const { Header } = Layout;
class TopTemplates extends Component {
    render() {
        return (
            <Header style={{background: '#fff', marginBottom: "20px"}}>
                <Row>
                    <Col span={20}><SearchForm/></Col>
                    <Col span={4}><UserInfo onLogoutSuccess={this.props.onLogoutSuccess}/></Col>
                </Row>
            </Header>
        )
    }
}
export default TopTemplates;
