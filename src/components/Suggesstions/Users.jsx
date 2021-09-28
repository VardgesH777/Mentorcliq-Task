import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, message } from "antd";

import tableColumn from "../Reusable/TableColumn/TableColumn";
import { editSuggestion } from "../../store/actions/Authentication";
import { UserEmail } from "../../shared/utils/Storage";

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(store => store.auth.users) || [];
    const userEmail = UserEmail.get();
    const loggedUser = { ...users?.find(i => i.email === userEmail) }

    const suggestUser = async (email) => {
        message.destroy();
        if (loggedUser.suggestedUsers.length < 5) {
            loggedUser.suggestedUsers = loggedUser.suggestedUsers.concat(email)
            const updatedUsers = users.map(item => {return {...item}})
            updatedUsers.find(i => i.email === userEmail).suggestedUsers = loggedUser.suggestedUsers
            await dispatch(editSuggestion(loggedUser,updatedUsers))
            message.success("You added suggestions")
        } else{
            message.error("You can't have more than 5 suggestions")
        }
    }

    const columns = tableColumn(suggestUser,"Suggest")
    const availableUsers = users.filter(i => i.email !== userEmail && !loggedUser.suggestedUsers?.includes(i.email))

    return (
        <>
            <Table
                dataSource={availableUsers}
                bordered
                className="tickets-table-container"
                columns={columns}
                pagination={false}
                rowKey={record => record.id}
            />
        </>
    )
};

export default Users
