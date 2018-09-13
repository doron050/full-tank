import React from 'react';
import Orange from '@material-ui/core/colors/orange';
import Grey from '@material-ui/core/colors/grey';
// import Divider from '@material-ui/core/Divider/Divider';

export default function MainBox(props) {
    const styles = {
        box: {
            padding: 10,
            backgroundColor: Orange[100],
            borderRadius: 9,
            margin: 10,
        },
        title: {
            fontSize: 20,
            textAlign: 'left',
            color: Grey[700],
        },
        content:{
            margin:10,
        }
    };

    return (
        <div style={styles.box}>
            <div style={styles.title}>{props.title}</div>
            <div style={styles.content}>
            {props.children}
            </div>
        </div>
    )
}