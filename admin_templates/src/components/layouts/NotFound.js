import React, { Component } from 'react';
import not_found from './../../images/not-found.png';
import {Row, Col} from 'antd';
class NotFound extends Component {
    render() {
        return (
            <Row type="flex" justify="center" align="middle">
                <Col xl={17}>
                <img src={not_found} alt="not-found-image"/>
                </Col>
            </Row>
        );
    }
}

export default NotFound;