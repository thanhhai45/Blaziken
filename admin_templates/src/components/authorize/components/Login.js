import React, { Component } from 'react';
import 'antd/dist/antd.css';
import logo_login from './../../../images/logo-login.png'
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
import { Redirect, Route } from "react-router-dom";
import App from './../../../App'
const FormItem = Form.Item;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      status:false
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // localStorage.setItem('user', JSON.stringify({ values }));
        console.log('Received values of form: ', values);
        this.setState({
          message: 'E-mail invalid',
          status:true
        })
      }
    });
  }


  render() {
    if (localStorage.getItem("user")) {
      return <App />
    }
    console.log(this.state.message)
    const { getFieldDecorator } = this.props.form;
    return (
      <Row type="flex" justify="center" align="middle">
        <Col lg={8} style={{ marginTop: '13%', borderRadius: '10px', borderStyle: 'outset' }}>
          <Row type="flex" justify="center" align="middle">
            <img src={logo_login} alt="logo-login" style={{ width: '50%' }} />
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator('email', {
                  rules: [
                    { required: true, message: 'Please input your E-email!' },
                    { type: 'email', message: 'The input is not valid E-mail!' }
                        ]
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="E-mail"/>
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