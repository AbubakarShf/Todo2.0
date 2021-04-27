import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Signup from "./pages/SignUp/Signup";
import Login from "./pages/Login/Login";
import Todo from "./pages/Todo/Todo";
import "./App.css";
const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/todo" component={Todo} />
                    <Route path="/signUp" component={Signup} />
                    <Route path="/logout" exact component={Home} />
                    <Route path="/signin" component={Login} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
