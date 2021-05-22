import { Button, Checkbox, Form, Input } from 'antd';
import React, { FC, useState } from 'react';
import './Login.css';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Login: FC = () => {
  return (
    <div className="login-container">
      <h2>Log In</h2>
      <Form
        name="normal_login"
        initialValues={{ remember: true }}
      >
        <Form.Item
          className="login-form"
          name="username"
          rules={[{ required: true, message: 'Enter your username' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          className="login-form"
          name="password"
          rules={[{ required: true, message: 'Enter your password' }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <div className="login-form-password">
          <a href="" >
            Forgot password?
          </a>
        </div>
        <Form.Item >
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
        </Button>
        </Form.Item>

        <Form.Item>
          Don't have an account?&nbsp;
          <a className="login-form-signup" href="">
            Sign up
          </a>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
