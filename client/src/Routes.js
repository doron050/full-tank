import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import App from './App';
import CreateOrderPageContainer from './driver/create-order-page/CreateOrderPage';
import StatusPage from './driver/status-page';
import PendingOrdersPage from './provider/pending-orders-page';
import AllOrdersPage from './driver/all-orders-page';

export default function Routes() {
    return (
        <Router>
            <App>
                <Route exact path="/" component={CreateOrderPageContainer}/>

                {/*Driver*/}
                <Route path={"/driver"} component={CreateOrderPageContainer}/>
                <Route path={"/new-order"} component={CreateOrderPageContainer}/>
                <Route path={"/order-status/:orderId"} component={StatusPage}/>
                <Route path={"/all-orders"} component={AllOrdersPage}/>

                {/*Service provider*/}
                <Route path={"/pending-orders"} component={PendingOrdersPage}/>
            </App>
        </Router>
    );
}
