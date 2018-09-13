import Button from '@material-ui/core/Button'
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import MainBox from "../../driver/create-order-page/MainBox";
import FillCarNumber from "./FillCarNumber";
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Input from "@material-ui/core/Input/Input";

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
                            <img src={this.props.selectedCar.image} style={{width: '100px', paddingRight: '15px'}}/>
                        </div>
                        <div style={{verticalAlign: 'middle', lineHeight: '36px', paddingRight: '20px'}}>
                            <div>Car Number: <FillCarNumber carNumber={this.props.selectedCar.number}/></div>
                            <div>Fuel Type: <span style={{fontWeight: 'bold'}}>{this.props.selectedCar.fuelType}</span></div>
                            <div>Driver Phone: <span style={{fontWeight: 'bold'}}>{this.props.selectedCar.driverPhone}</span></div>
                        </div>
                        <Button variant={'contained'} color={'secondary'} style={{height: '10px'}} children={"Open Lid"} onClick={() => ""} />
                    </div>
                </MainBox>

                <MainBox title={'Order Details'}>
                    <div style={styles.orderDetailsBox}>
                        <div>Last Fuel Time: <span style={{fontWeight: 'bold'}}>{this.props.selectedOrder.lastFuelTime}</span></div>
                        <div>Should Fill Full Tank: <span style={{fontWeight: 'bold'}}>{this.props.selectedOrder.isFullTank.toString()}</span></div>

                        {this.props.selectedOrder.maxPrice &&
                        <div>MaxPrice: <span style={{fontWeight: 'bold'}}>{this.props.selectedOrder.maxPrice}</span></div>
                        }

                        <br/>
                        <FormControl>
                            <InputLabel>Liter Amount</InputLabel>
                            <Input
                                id="adornment-amount"
                                value="1312"
                                onChange={event => ''}
                                disableUnderline={true}
                                style={{fontSize: 30, textAlign: 'left'}}
                            />
                        </FormControl>
                    </div>
                </MainBox>

                <Button variant={'contained'} color={'primary'} children={"Mark this order as Completed"} style={{width: "97%", marginBottom: 20}} onClick={() => ""} />
            </div>
        );
    }
}
