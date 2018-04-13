import React, { Component } from 'react';
import { Modal, Button, Avatar, Row, Col, Tag, Icon } from 'antd';
import './Profile-css.css';

class Profile extends Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: this.props.visible,
    });

  }
  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.visible) {
      this.setState({
        visible: nextProps.visible
      })
    }
  }
  render() {
    return (
      <div>
        <Modal
          title="My Mentor"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Row type="flex" gutter={16} justify="center" align="middle" className='content-top'>
            <Col span={6}><Avatar style={{ width: '80px', height: '80px', lineHeight: '40px', borderRadius: '20px', background: 'red' }} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Col>
            <Col span={18}>
            <p style={{fontFamily: "Times New Roman",fontWeight: 'bold'}}>LÊ THANH HẢI</p>
            <span><Icon type="arrow-up" /><Tag color="green">1/4/2018</Tag></span>
            <span><Icon type="arrow-down" /><Tag color="red">13/4/2018</Tag></span>
            </Col>
          </Row>
          <Row type="flex" gutter={16} style={{width:'500px'}}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Row>
        </Modal>
      </div>
    );
  }
}

export default Profile;