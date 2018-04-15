import React, { Component } from 'react';
import { Modal, Button, Avatar, Row, Col, Tag, Icon, Form, Input, Select, DatePicker } from 'antd';
import './Profile-css.css';
import { EditIcon } from './../../../../commons/Button'
const FormItem = Form.Item;
function onChange(date, dateString) {
  console.log(date, dateString);
}
class Profile extends Component {
  state = {
    loading: false,
    visible: false,
    editDisable: true
  }
  showModal = () => {
    this.setState({
      visible: this.props.visible,
    });

  }
  handleOk = (e) => {
    this.setState({
      loading: true,
      editDisable: true
    });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 1000);
  }
  handleCancel = (e) => {
    this.setState({
      visible: false,
      editDisable: true
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.visible) {
      this.setState({
        visible: nextProps.visible
      })
    } else {
      this.setState({
        editDisable: true
      })
    }
  }
  editVisible = () => {
    this.setState({
      editDisable: false
    })
  }
  hasErrors = (fieldsError) => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }
  handleSubmit = () => {
    const form = this.props.form;
    this.setState({
      loading: true,
    });
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 1000);
  }
  render() {
    const Option = Select.Option;
    const { getFieldDecorator, getFieldsError, getFieldProps } = this.props.form;
    const { visible, loading, editDisable } = this.state;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    return (
      <div>
        <Modal
          title="My Mentor"
          visible={this.state.visible}
          footer={[
            <Button key="back" onClick={this.handleCancel}>Cancel</Button>,
            <Button key="submit" disabled={this.state.editDisable ? this.state.editDisable : this.hasErrors(getFieldsError())} type="primary" loading={loading} onClick={this.handleSubmit}>
              Submit
            </Button>,
          ]}
        >
          <Row type="flex" gutter={16} justify="center" align="middle" className='content-top'>
            <Col span={6}><Avatar style={{ width: '80px', height: '80px', lineHeight: '40px', borderRadius: '20px', background: 'red' }} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Col>
            <Col span={18}>
              <p style={{ fontFamily: "Times New Roman", fontWeight: 'bold' }}>LÊ THANH HẢI&nbsp;<span onClick={this.editVisible}><EditIcon title="Edit Profile" style={{ color: 'green', cursor: 'pointer' }} /></span></p>
              <span>Created&nbsp;<Tag color="green">1/4/2018</Tag></span>
              <span>Updated&nbsp;<Tag color="red">13/4/2018</Tag></span>
            </Col>
          </Row>
          <Row type="flex" gutter={16} style={{ width: '500px' }}>
            <Form style={{ width: '100%' }}>
              <FormItem {...formItemLayout} label="Role">
                {getFieldDecorator('role', {
                  rules: [{ required: true, message: 'The input is not valid Role!' }]
                })(
                  <Input disabled={this.state.editDisable} />
                )}
              </FormItem>
              <FormItem {...formItemLayout} label="Status">
                {getFieldDecorator('status', {
                  rules: [{ required: true, message: 'The input is not valid Status!' }]
                })(
                  <Input disabled={this.state.editDisable} />
                )}
              </FormItem>
              <FormItem {...formItemLayout} label="Featured">

                <Select
                  mode="multiple"
                  style={{ width: '100%' }}
                  placeholder="Please select"
                  disabled={this.state.editDisable}
                  {...getFieldProps('select', {
                    initialValue: ["1", "2"],
                    rules: [{ required: true, message: "The Featured isn't empty!" }],
                  })}
                >
                  <Option value="1">Admin</Option>
                  <Option value="2">Manager</Option>
                </Select>
              </FormItem>
            </Form>
          </Row>
        </Modal>
      </div>
    );
  }
}

export default Form.create()(Profile);