import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import App from "./App";
import HomePageContainer from "./pages/HomePageContainer";
import AboutPage from "./pages/AboutPage";
import LocationPage from './pages/LocationPage';
import CreateOrderPageContainer from './driver/create-order-page';

export default function Routes() {
    return (
        <Router>
            <App>
                <Route exact path="/" component={HomePageContainer}/>
                <Route path="/about" component={AboutPage}/>
                <Route path={"/location"} component={LocationPage}/>

                {/*Driver*/}
                <Route path={"/new-order"} component={CreateOrderPageContainer}/>

                {/*Service provider*/}
            </App>
        </Router>
    );
}