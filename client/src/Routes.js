import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import App from "./App";
import HomePageContainer from "./pages/HomePageContainer";
import AboutPage from "./pages/AboutPage";
import CreateOrderPageContainer from './driver/create-order-page/CreateOrderPage';
import StatusPage from './driver/status-page';
import PendingOrdersPageContainer from './provider/pending-orders-page/PendingOrdersPageContainer';

export default function Routes() {
    return (
        <Router>
            <App>
                <Route exact path="/" component={HomePageContainer}/>
                <Route path="/about" component={AboutPage}/>

                {/*Driver*/}
                <Route path={"/driver"} component={CreateOrderPageContainer}/>
                <Route path={"/new-order"} component={CreateOrderPageContainer}/>
                <Route path={"/status-page/:orderId"} component={StatusPage}/>

                {/*Service provider*/}
                <Route path={"/pending-orders"} component={PendingOrdersPageContainer}/>
            </App>
        </Router>
    );
}
