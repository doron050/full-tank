import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

export default function FuelAmountFilled(props) {
    const style = {
        fontSize: 30,
    };

    return (
        <FormControl>
            <InputLabel>Fuel Amount Filled (Liters)</InputLabel>
            <Input
                id="adornment-amount"
                value={props.value}
                onChange={event => props.onChange('fuelAmountFilled', event.target.value)}

                disableUnderline={true}
                style={style}
            />
        </FormControl>
    )
}