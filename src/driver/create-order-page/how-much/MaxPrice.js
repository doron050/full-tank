import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import InputLabel from '@material-ui/core/InputLabel';

export default function MaxPrice(props) {


    const style = {
        fontSize: 30,
        // textAlign: 'center'

    };

    const dollarSign = <InputAdornment
        position="start"
    >
        <span style={style}>$</span>
    </InputAdornment>;

    return (
        <React.Fragment>


            <FormControlLabel
                label={<span style={style}>Full Tank</span>}
                labelPlacement="start"
                control={
                    <Switch
                        color="secondary"
                        checked={props.isFullTank}
                        onChange={(event) => props.onChange('isFullTank', event.target.checked)}
                        value="checkedA"
                    />
                }
            />

            {!props.isFullTank &&
            <FormControl>
                <InputLabel>Amount</InputLabel>
                <Input
                    id="adornment-amount"
                    value={props.value}
                    onChange={event => props.onChange('maxPrice', event.target.value)}
                    startAdornment={dollarSign}

                    disableUnderline={true}
                    style={style}
                />
            </FormControl>
            }
        </React.Fragment>
    )
}