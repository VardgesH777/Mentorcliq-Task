import React  from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {Routes} from "./Routes";

import { UserEmail } from "./shared/utils/Storage";
import "antd/dist/antd.css";

const App = () => {
    const PrivateRoute = ({ path, isExact, component }) => {
        return UserEmail.get() ? (
            <Route path={path} exact={isExact} component={component} />
        ) : (
            <Redirect to="/" />
        );
    };

    return (
        <>
            <Router>
                <Switch>
                    {Routes.map((route, index) => {
                        const { path, isExact, component, isPrivate } = route
                        return isPrivate ? <PrivateRoute path={path} component={component} isExact={isExact} key={index}/> : (
                            <Route path={path} component={component} exact={isExact} key={index}/>
                        )
                    })}
                </Switch>
            </Router>
        </>
    );
};

export default App;
