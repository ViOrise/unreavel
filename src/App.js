import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import "./App.sass"
import {Navbar} from "./components/Navbar";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Help} from "./pages/Help";
import {Users} from "./pages/Users";
import {Alert} from "./components/Alert";
import {AlertState} from "./context/alert/AlertState";
import {GithubState} from "./context/github/GithubState";

function App() {
    return (
       <GithubState>
            <AlertState>
                <BrowserRouter>
                    <div className="main">
                        <Navbar/>
                        <div className="container">
                            <Alert text={"Error"}/>
                            <Switch>
                                <Route path="/" exact component={Home}/>
                                <Route path="/about" component={About}/>
                                <Route path="/help" component={Help}/>
                                <Route path="/users/:user" component={Users}/>
                            </Switch>

                        </div>
                    </div>
                </BrowserRouter>
            </AlertState>
        </GithubState>
    );
}

export default App;
