import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, message } from "antd";
import { hashString } from "react-hash-string";

import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import { userRegister, getUsers } from "../store/actions/Authentication";
import { UserEmail } from "../shared/utils/Storage";

import "../components/Reusable/styles/Registration.scss"

const Registration = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const users = useSelector(store => store.auth.users)

    useEffect(() => {
        !users && dispatch(getUsers())
    },[dispatch,users])

    const registration = async (values) => {
        message.destroy()
        const alreadyRegisteredEmail = users.find(i => i.email === values.email);
            if (!alreadyRegisteredEmail) {
                await dispatch(userRegister({...values, password: hashString(values.password), suggestedUsers: []}));
                UserEmail.set(values.email)
                return history.push("/suggestions")
            } else {
                return message.error("Please use another email")
            }
    }

    return (
        <div className="content">
                <h2 className="main-title">Registration</h2>
                <Form onFinish={registration} name="sign-up-form">
                    <RegistrationForm/>
                </Form>
                <div className="link" onClick={() => history.push("/")}>Already have an account ? Log In</div>
        </div>
    )
}

export default Registration;
