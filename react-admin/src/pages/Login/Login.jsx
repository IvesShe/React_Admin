import React, { Component } from 'react'
import './Login.less'
import logo from './images/logo.jpg'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export default class Login extends Component {

  render() {
    const onFinish = (values) => {
      console.log('Received values of form: ', values)
    }
    return (
      <div className='login'>
        <header className='login-header'>
          <img src={logo} alt="logo" />
          <h1>React項目： 後台管理系統</h1>
        </header>
        <section className='login-content'>
          <h2>用戶登入</h2>
          <div>
            <Form
              name="normal_login" 
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    whitespace: true,
                    message: '用戶名必須輸入!',
                  },
                  {
                    min: 4,
                    message: '用戶名至少4位!',
                  },
                  {
                    max: 12,
                    message: '用戶名最多12位!',
                  },
                  {
                    pattern: /^[a-zA-Z-0-9_]+$/,
                    message: '用戶名必須是英文、數字或下劃線組成!',
                  },
                  
                ]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用戶名" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  // {
                  //   required: true,
                  //   message: 'Please input your Password!',
                  // },
                  ({ getFieldValue }) => ({
                    
                    validator(_, value) {
                      console.log("@@@getFieldValue",value)
                      if(!value){
                        return Promise.reject(new Error('密碼必須輸入!'));
                      }else if(value.length<4){
                        return Promise.reject(new Error('密碼長度不能小於4位!'));
                      }else if(value.length>12){
                        return Promise.reject(new Error('密碼長度不能大於12位!'));
                      }
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The two passwords that you entered do not match!'));
                    },
                  }),
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="密碼"
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登入
                </Button>
              </Form.Item>
            </Form>
          </div>
        </section>
      </div>
    )
  }
}
