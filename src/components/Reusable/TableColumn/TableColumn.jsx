import React from "react";
import { Button } from "antd";

const TableColumn = (handleActionClick, actionName) => {
    return [
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: 'Department',
            dataIndex: 'department',
            key: 'department',
        },
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'country',
        },
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
        },
        {
            title: `${actionName}`,
            dataIndex: `${actionName}`,
            key: `${actionName}`,
            render: (_,user) => {
                return <Button onClick={() => handleActionClick(user.email)}>{actionName}</Button>

            }
        }
    ]
}

export default TableColumn
