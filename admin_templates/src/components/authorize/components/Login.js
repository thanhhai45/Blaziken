import React, { Component } from 'react';
import 'antd/dist/antd.css';
import logo_login from './../../../images/logo-login.png'
<<<<<<< HEAD
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
import { Redirect, Route } from "react-router-dom";
import App from './../../../App'
=======
import { Form, Icon, Input, Button, Checkbox, Row, Col, Spin } from 'antd';
import Http from './../../../utils/Http';
import './login-css.css';
>>>>>>> a52f76f632fe7f61c655ae5189dbbdb545a49737
const FormItem = Form.Item;


class Login extends Component {
<<<<<<< HEAD
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      status:false
    }
=======
  hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }
  state={
    loadingLogin:'loading-login-none'
  }
  onLoginSuccess = () => {
    this.props.onLoginSuccess();
>>>>>>> a52f76f632fe7f61c655ae5189dbbdb545a49737
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
<<<<<<< HEAD
        // localStorage.setItem('user', JSON.stringify({ values }));
        console.log('Received values of form: ', values);
        this.setState({
          message: 'E-mail invalid',
          status:true
        })
=======
        var formData = new FormData();
        formData.append('email', values.userName);
        formData.append('password', values.password);
        Http.RequestAPI("POST", "http://localhost:3001/v1/admin_staffs/sign_in",
          formData)
          .then(result => {
            if (result.status === 200 && result.statusText === "OK") {
              localStorage.setItem('auth_token', JSON.stringify({ result }));
              if(localStorage.getItem("auth_token")){
                this.onLoginSuccess();
              }
            }
          })
          .catch(error => {
            console.log(error);
          })
>>>>>>> a52f76f632fe7f61c655ae5189dbbdb545a49737
      }
    });
  }

<<<<<<< HEAD

  render() {
    if (localStorage.getItem("user")) {
      return <App />
    }
    console.log(this.state.message)
    const { getFieldDecorator } = this.props.form;
=======
  render() {

    const { getFieldDecorator, getFieldsError } = this.props.form;
>>>>>>> a52f76f632fe7f61c655ae5189dbbdb545a49737
    return (
      <Row type="flex" justify="center" align="middle">
        <Col lg={8}  className={this.state.loadingLogin}>
          <Spin size="large"/>
        </Col>
        <Col lg={8} style={{ marginTop: '13%', borderRadius: '10px', borderStyle: 'outset' }}>
          <Row type="flex" justify="center" align="middle">
            <img src={logo_login} alt="logo-login" style={{ width: '50%', paddingTop: '5%' }} />
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator('email', {
                  rules: [
                    { required: true, message: 'Please input your E-email!' },
                    { type: 'email', message: 'The input is not valid E-mail!' }
                        ]
                })(
<<<<<<< HEAD
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="E-mail"/>
=======
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} min={8}
                    max={12} />} placeholder="Username" />
>>>>>>> a52f76f632fe7f61c655ae5189dbbdb545a49737
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' },
                  ],
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
                <Button type="primary" htmlType="submit" disabled={this.hasErrors(getFieldsError())} className="login-form-button">
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