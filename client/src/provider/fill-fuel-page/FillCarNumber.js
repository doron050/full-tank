import React from 'react';

export default function CarNumber(props) {
    const style = {
        number: {
            backgroundColor: 'rgb(255, 204, 0)',
            paddingRight: 7,
            paddingLeft: 7,
            border: '1px solid black',
            borderRadius: 5,
            fontWeight: 'bold',
            width: 150,
        },
        box: {
            fontSize: 30,
            display: 'inline-block',
            marginLeft: '10px'
        }
    };

    return (
        <div style={style.box}>
            <div style={style.number}>
                {props.carNumber}
            </div>
        </div>
    )
}