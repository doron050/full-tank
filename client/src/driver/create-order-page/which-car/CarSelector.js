import React from 'react';
import CarNumber from './CarNumber';
import Dialog from '@material-ui/core/Dialog';
import _ from 'lodash';

export default class CarSelector extends React.Component {
    state = {
        dialogOpen: false,
    };

    toggleDialog(dialogOpen) {
        this.setState({
            dialogOpen,
        })
    }

    render() {
        return (
            <React.Fragment>
                <div style={{width: '50%', margin: 'auto'}}>
                    <CarNumber
                        carNumber={this.props.carNumber}
                        onClick={() => this.toggleDialog(true)}
                    />
                </div>

                <Dialog
                    open={this.state.dialogOpen}
                    onClose={() => this.toggleDialog(false)}
                >
                    <div style={{padding: 20}}>
                        {_.map(this.props.cars, car => {
                            return (
                                <div style={{padding: 5}} key={car.number}>
                                    <CarNumber
                                        key={car.number}
                                        carNumber={car.number}
                                        onClick={() => {
                                            this.props.selectCar(car.number);
                                            this.toggleDialog(false);
                                        }}
                                    />
                                </div>
                            )
                        })}
                    </div>

                </Dialog>
            </React.Fragment>
        )
    }
}