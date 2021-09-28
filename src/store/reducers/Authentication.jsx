import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: null,
    suggestions: [],
    loggedUser: {}
}

const authentication = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        setLoading(state, action) {
            state.loading = action.payload
        },
        setError(state,action) {
            state.error = action.payload
        },
        handleChange(state,action) {
          state[action.payload.name] = action.payload.value
        },
        setInitialStore(){
            return initialState
        },
    }
})

export const { setError, setLoading, handleChange, setInitialStore } = authentication.actions

export default authentication.reducer
