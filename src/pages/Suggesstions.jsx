import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";

import Users from "../components/Suggesstions/Users";
import SuggestedUsers from "../components/Suggesstions/SuggestedUsers";

import { getUsers } from "../store/actions/Authentication";
import { setInitialStore } from "../store/reducers/Authentication";
import { ClearStorage } from "../shared/utils/Storage";

import "../components/Suggesstions/styles.scss"

const Suggesstions = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const authReducer = useSelector(store => store.auth);
    const userEmail = JSON.parse(localStorage.getItem("userEmail"))
    const { users } = authReducer;
    const loggedUser = {...users?.find(i => i.email === userEmail)}

    useEffect(() => {
        !users && dispatch(getUsers())
    }, [dispatch,users])

    const logOut = () => {
        dispatch(setInitialStore())
        ClearStorage()
        history.push("/")
    }

    return (
        <>
            <div className="suggestion">
                <div className="users-suggestions">
                    <div className="users-table">
                        <div className="title-profile">
                            <h2 className="title">Other Users</h2>
                            <h2 className="title logout" onClick={ logOut }>
                                {loggedUser.firstName} / Log Out
                            </h2>
                        </div>
                        <Users/>
                    </div>
                    <SuggestedUsers/>
                </div>
            </div>
        </>
    )
}

export default Suggesstions