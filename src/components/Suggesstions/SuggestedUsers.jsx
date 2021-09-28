import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Table } from "antd";

import tableColumn from "../Reusable/TableColumn/TableColumn";
import { editSuggestion } from "../../store/actions/Authentication";
import { UserEmail } from "../../shared/utils/Storage";

const SuggestedUsers = () => {
    const dispatch = useDispatch();

    const users = useSelector(store => store.auth.users) || [];
    const userEmail = UserEmail.get()
    const loggedUser = {...users.find(i => i.email === userEmail)}

    const deleteSuggestedUser = async (email) => {
        const suggestedUsersEmails = [ ...loggedUser.suggestedUsers ];
        suggestedUsersEmails.splice(loggedUser.suggestedUsers.indexOf(email),1);

        const updatedUsers = users.map(item => {return {...item}});
        updatedUsers.find(i => i.email === userEmail).suggestedUsers = suggestedUsersEmails;

        await dispatch(editSuggestion({
            ...loggedUser,
            suggestedUsers: suggestedUsersEmails
        },updatedUsers))
    }

    const columns = tableColumn(deleteSuggestedUser,"Delete");
    const suggestedUsers = users.filter(i => loggedUser.suggestedUsers?.includes(i.email))

    return (
        <>
            <div className="suggested-users">
                <h2 className="title">Suggested Users</h2>
                <Table
                    dataSource={suggestedUsers}
                    bordered
                    className="tickets-table-container"
                    columns={columns}
                    pagination={false}
                    rowKey={record => record.id}
                />
            </div>
        </>
    )
};

export default SuggestedUsers
