import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, Input,message } from "antd";
import { hashString } from "react-hash-string";
import { useHistory } from "react-router-dom"

import { getUsers } from "../store/actions/Authentication";

import { UserEmail } from "../shared/utils/Storage";

import "../components/Reusable/styles/Registration.scss"

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const users = useSelector(store => store.auth.users);

    const login = (values) => {
        message.destroy();
        const { email, password } = values
        const hashedPassword = hashString(password)
        const existedUser = users.find(i => i.email === email && i.password === hashedPassword)
        if (existedUser) {
            UserEmail.set(existedUser.email)
            history.push("/suggestions")
        } else {
            message.error("Email or password is incorrect")
        }
    }

    useEffect(() => {
        !users && dispatch(getUsers())
    },[dispatch,users])

    return (
        <div className="content">
            <h2 className="title">Log In</h2>
            <Form name="login-form" onFinish={login}>
                <Form.Item className="form-input" name="email" label="Email" rules={[{
                    required: true,
                    message: "Email is required"
                }]}>
                    <Input type="email" placeholder="Email"/>
                </Form.Item>
                <Form.Item className="form-input" name="password" label="Password" rules={[{
                    required: true,
                    message: "Password is required"
                }, {
                    min: 6,
                    message: "Password can't be less than 6 characters"
                }]}>
                    <Input type="password" placeholder="Password"/>
                </Form.Item>
            </Form>
            <Button htmlType="submit" className="submit-btn" form="login-form">
                Login
            </Button>
            <div className="link" onClick={() => history.push("/registration")}>Don't have an account ? Register</div>
        </div>
    )
}

export default Login
