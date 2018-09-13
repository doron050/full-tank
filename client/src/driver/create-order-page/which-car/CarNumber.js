import React from 'react';

export default function CarNumber(props) {
    if(!props.carNumber)
        return null;

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
            textAlign: "center",
        }
    };

    const number = props.carNumber.toString();

    return (
        <div style={style.box} onClick={props.onClick}>
            <div style={style.number}>
                {beutifyCarNumber(number)}
            </div>
        </div>
    )
}

export function beutifyCarNumber(number){
    return number.substr(0,2) + "-" + number.substr(2,3) + "-" + number.substr(5);
}