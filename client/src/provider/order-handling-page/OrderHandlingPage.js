import Button from '@material-ui/core/Button'
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import MainBox from "../../driver/create-order-page/MainBox";
import FuelAmountFilledContainer from "./fuel-amount-filled/FuelAmountFilledContainer";
import CarNumber from "../../driver/create-order-page/which-car/CarNumber";

const styles = {
    carDetailsBox: {
        textAlign: 'left',
        paddingTop: '10px',
        fontSize: '18px',
        display: 'flex',
        justifyContent: 'space-around'
    },
    orderDetailsBox: {
        textAlign: 'left',
        paddingTop: '10px',
        fontSize: '18px',
        lineHeight: '32px'
    }
};

export default class OrderHandlingPage extends Component {

    constructor(props) {
        super(props);
        autoBind(this);
    }

    render() {
        return (
            <div>
                <MainBox title={'Car Details'}>
                    <div style={styles.carDetailsBox}>
                        <div >
                            <img src={this.props.selectedCar.image} style={{width: '100px', paddingRight: '15px'}} alt="driver's car"/>
                        </div>
                        <div style={{verticalAlign: 'middle', lineHeight: '36px', paddingRight: '20px'}}>
                            <div style={{display: 'flex'}}> Car Number: <div style={{paddingLeft: "10px"}}><CarNumber carNumber={this.props.selectedCar.number}/></div></div>
                            <div>Fuel Type: <span style={{fontWeight: 'bold'}}>{this.props.selectedCar.fuelType}</span></div>
                            <div>Driver Phone: <span style={{fontWeight: 'bold'}}>{this.props.selectedCar.driverPhone}</span></div>
                        </div>
                        <Button variant={'contained'} color={'secondary'} style={{height: '10px'}} children={"Open Lid"} onClick={this.props.onOpenLid} />
                    </div>
                </MainBox>

                <MainBox title={'Order Details'}>
                    <div style={styles.orderDetailsBox}>
                        <div>Last Fuel Time: <span style={{fontWeight: 'bold'}}>{new Date(this.props.selectedOrder.lastFuelTime).toLocaleDateString()}</span></div>
                        <div>Should Fill Full Tank: <span style={{fontWeight: 'bold'}}>{this.props.selectedOrder.isFullTank.toString()}</span></div>

                        {!this.props.selectedOrder.maxPrice &&
                            <div>MaxPrice: <span style={{fontWeight: 'bold'}}>{this.props.selectedOrder.maxPrice}</span></div>
                        }

                        <FuelAmountFilledContainer/>
                    </div>
                </MainBox>

                <Button variant={'contained'} color={'primary'} children={"Mark this order as Completed"} style={{width: "97%", marginBottom: 20}} onClick={this.props.onCompletedOrder} />
            </div>
        );
    }
}
