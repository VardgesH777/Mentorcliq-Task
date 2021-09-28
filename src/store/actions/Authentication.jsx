import Http from "../../shared/utils/Https";

import { handleChange } from "../reducers/Authentication";

export const userRegister = (data,users) => async dispatch => {
    await Http("/users", "post",data);
    dispatch(handleChange({name: "users", value: users}))
}

export const getUsers = () => async dispatch => {
    const response = await Http("/users", "get")
    dispatch(handleChange({name: "users", value: response}))
}

export const editSuggestion = (loginUser,updatedUsers) => async dispatch => {
    await Http(`/users/${loginUser.id}`, "put", loginUser)
    dispatch(handleChange({name: "users", value: updatedUsers}))
}
