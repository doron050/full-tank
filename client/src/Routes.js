import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import App from "./App";
import HomePageContainer from "./pages/HomePageContainer";
import AboutPage from "./pages/AboutPage";
import DriverHomePageContainer from "./pages/driver-pages/home-page/DriverHomePageContainer";

export default function Routes() {
    return (
        <Router>
            <App>
                <Route exact path="/" component={HomePageContainer}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/driver/homepage" component={DriverHomePageContainer}/>
            </App>
        </Router>
    );
}