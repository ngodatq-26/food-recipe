import { Button, Checkbox, Form, Input } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import React from 'react';
import "./style.css";
import GoogleLogin from 'react-google-login';
import { ILogin } from '../../type/type.login';
import {Spin} from 'antd';

interface LoginProps {
    loginHandle(formValues : ILogin) : void,
    loading : boolean
}

const LoginForm = (props : LoginProps) => {
    
    const {loginHandle, loading} = props;

    const onFinish = (values: any) => {
        const data : ILogin = {
            email : values.email,
            password : values.password,
            remember : true,
        }
        loginHandle(data);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item 
                name="email"
                rules={[{ 
                    required: true, message: 'Please input your email!',
                }, {
                    type : 'email',
                    message : 'Email is invalid'
                }]}
                className="form-item"
            >
                <Input placeholder='Email'/>
            </Form.Item>

            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password placeholder='Password' />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>
                {(loading == true) ? <FormItem><Spin className='btn-input'/></FormItem> : <></>}
            <Form.Item  className="form-btn">
                <Button type="primary" htmlType="submit" className='btn-input'>
                    Sign In
                </Button>
                    <p className='text-p'>Don’t have an account?
                        <a style={{ color: "blue", textDecoration: "none"}} href="#"><i>Sign Up</i></a></p>
            </Form.Item>
            <FormItem>
                <h1>OR</h1>
            </FormItem>
            <FormItem>

                /**
                đoạn này chưa có gì
                 */
                    <GoogleLogin className='btn-input btn-primary'
                        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                        buttonText="Login"
                        cookiePolicy={'single_host_origin'}
                    />

            </FormItem>
        </Form>
        
        
        </>
    );
}

export default LoginForm;