import axios from 'axios';
import store from '../../store'
import { setLoading } from "../../store/reducers/Authentication";
import { setError } from "../../store/reducers/Authentication";

const timeout = 40000;
const host = process.env.REACT_APP_API_URL;

const Http = async (url, method = "get", body, params, customError) => {
    const postUrl = host + url;
    store.dispatch(setLoading(true));
    const headers = {
        'Content-Type': 'application/json',
    };
    try {
        const response = await axios({
            url: postUrl,
            method,
            timeout,
            data: JSON.stringify(body),
            headers,
            params
        });
        store.dispatch(setLoading(false));
        store.dispatch(setError())
        return response?.data
    } catch (e) {
        store.dispatch(setLoading(false));
        store.dispatch(setError(customError || e.response.data.message))
        return e.response.data
    }
};

export default Http;
