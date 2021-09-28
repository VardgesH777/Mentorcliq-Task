import React from "react";
import { useSelector } from "react-redux";

import Spinner from "../Reusable/Spinner/Spinner";

import "./styles.scss"

const InnerPage = ({ children }) => {
    const loading = useSelector(store => store.auth.loading)
    return (
        <div className="inner-page">
        { loading && <Spinner/> }
        { children }
        </div>
    )
};

export default InnerPage
