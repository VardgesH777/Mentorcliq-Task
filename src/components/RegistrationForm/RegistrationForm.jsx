import {Button, Form, Input, Select} from "antd";
import React from "react";

const RegistrationForm = () => {
    const { Option } = Select;

    return <>
        <Form.Item className="form-input" name="firstName" label="FirstName" rules={[{
            required: true,
            message: "FirstName is required"
        }]}>
            <Input type="text" placeholder="FirstName"/>
        </Form.Item>
        <Form.Item className="form-input" name="lastName" label="LastName" rules={[{
            required: true,
            message: "LastName is required"
        }]}>
            <Input type="text" placeholder="LastName"/>
        </Form.Item>
        <Form.Item className="form-input" name="email" label="Email" rules={[{
            required: true,
            message: "Email is required"
        }]}>
            <Input type="email" placeholder="Email"/>
        </Form.Item>
        <Form.Item className="form-input" name="password" label="Password" rules={[{
            required: true,
            message: "Password is required"
        },  {
            min: 6,
            message: "Password can't be less than 6 characters"
        }
        ]}>
            <Input type="password" placeholder="Password"/>
        </Form.Item>
        <Form.Item className="form-input" name="gender" label="Gender" rules={[{
            required: true,
            message: "Gender is required"
        }]}>
            <Select placeholder="Gender">
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
            </Select>
        </Form.Item>
        <Form.Item className="form-input" name="department" label="Department" rules={[{
            required: true,
            message: "Department is required"
        }]}>
            <Input type="text" placeholder="Department"/>
        </Form.Item>
        <Form.Item className="form-input" name="jobTitle" label="Job Title" rules={[{
            required: true,
            message: "Job Title is required"
        }]}>
            <Input type="text" placeholder="Job Title"/>
        </Form.Item>
        <Form.Item className="form-input" name="country" label="Country" rules={[{
            required: true,
            message: "Country is required"
        }]}>
            <Input type="text" placeholder="Country"/>
        </Form.Item>
        <Form.Item className="form-input" name="city" label="City" rules={[{
            required: true,
            message: "City is required"
        }]}>
            <Input type="text" placeholder="City"/>
        </Form.Item>
        <Button htmlType="submit" className="submit-btn" form="sign-up-form">
            Register
        </Button>
    </>
}

export default RegistrationForm
