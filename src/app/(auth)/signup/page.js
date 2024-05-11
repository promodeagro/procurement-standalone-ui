"use client"
import React from 'react'
// import signup from '../../../../assets/singup.png'
import { Button, Checkbox, Form, Input, InputNumber } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';



const page = () => {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        localStorage.setItem('formData', JSON.stringify(values));
    };

    return (
        <div className="flex justify-between bg-blue-100 h-screen">
            <div className="w-1/2 flex justify-center items-center flex-col h-screen">
                {/* Center the form horizontally and vertically */}
                <div className='p-8 bg-white rounded-lg shadow-md w-96'>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='mb-8'>PTR Procurment</p>
                        <h1 className='text-xl font-semibold'>Sign up</h1>
                        <p className='text-sm mb-5'>Take the next step and sign in to your account</p>
                    </div>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="First Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your First Name!',
                                },
                            ]}
                        >
                            <Input placeholder="First Name" />
                        </Form.Item>
                        <Form.Item
                            name="Last Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Last Name!',
                                },
                            ]}
                        >
                            <Input placeholder="Last Name" />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            rules={[
                                { required: true, message: 'Please input your Work Email!' },
                                { type: 'email', message: 'Invalid email format!' },
                            ]}
                        >
                            <Input placeholder="Work email" />
                        </Form.Item>
                        <Form.Item
                            name="phoneNumber"
                            rules={[
                                { required: true, message: 'Please input your Phone Number!' },
                                { type: 'number', message: 'Invalid phone number format!' },
                            ]}
                        >
                            <InputNumber
                                placeholder="Phone number"
                                style={{ width: '100%' }}
                                min={0} // Optional: Set minimum value if needed
                                step={1} // Optional: Set step value for increment/decrement buttons
                            />
                        </Form.Item>
                        <Form.Item
                            name="Company Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Company Name!',
                                },
                            ]}
                        >
                            <Input placeholder="Company Name" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button bg-blue-500 w-[50%] flex justify-center items-center">
                                Sign Up
                            </Button>
                        </Form.Item>
                    </Form>

                </div>
                <div className='mt-7'>
                    <p>
                        You already have an account?{" "}
                        <Link href="/login" className="text-blue-500 cursor-pointer">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
            <div className="w-1/2">
                <Image src='/asset/signup.png' alt='' className='' width={700} height={500}/>
            </div>
        </div>

    )
}

export default page
