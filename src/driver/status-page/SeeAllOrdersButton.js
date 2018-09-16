import Button from '@material-ui/core/Button'
import {withRouter} from 'react-router-dom';
import React from 'react';

function SeeAllOrdersButton(props) {
    return (
        <Button
            variant='contained'
            color='primary'
            children='See all orders'
            style={{
                width: '95%',
                marginTop: 30,
                margiBnottom: 20,
            }}
            onClick={() => props.history.push('/all-orders')}
        />
    );
}

export default withRouter(SeeAllOrdersButton);