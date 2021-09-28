import React from "react";

import Registration from "./pages/Registration";
import Suggestion from "./pages/Suggesstions";
import Login from "./pages/Login";

export const Routes = [
    {
        path: "/",
        isExact: true,
        component: () => <Login/>
    },
    {
        path: "/suggestions",
        isPrivate: true,
        isExact: true,
        component: () => <Suggestion/>
    },
    {
        path: "/registration",
        isExact: true,
        component: () => <Registration/>
    }
];
