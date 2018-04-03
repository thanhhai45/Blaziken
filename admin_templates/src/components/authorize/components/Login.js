import React, { Component } from 'react';
import 'antd/dist/antd.css';
import logo_login from './../../../images/logo-login.png'
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
import { Redirect } from "react-router-dom";
const FormItem = Form.Item;

class Login extends Component {
  constructor(props) {
    super(props);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        localStorage.setItem('user', { 'username': values });
        console.log('Received values of form: ', values);
        //const { from } = this.props.location.state || { from: { pathname: "/" } };
        //return <Redirect to={from} />;
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row type="flex" justify="center" align="middle">
        <Col lg={8} style={{ marginTop: '13%', borderRadius: '10px', borderStyle: 'outset' }}>
          <Row type="flex" justify="center" align="middle">
            <img src={logo_login} alt="logo-login" style={{ width: '50%' }} />
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>Remember me</Checkbox>
                )}
                <a className="login-form-forgot" href="">Forgot password</a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                                 </Button>
              </FormItem>
            </Form>
          </Row>
        </Col>
      </Row>
    );
  }
}


export default Form.create()(Login);