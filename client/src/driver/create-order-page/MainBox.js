import React from 'react';
import Grey from '@material-ui/core/colors/grey';
import Paper from '@material-ui/core/Paper';

export default function MainBox(props) {
    const styles = {
        box: {
            // boxShadow: "1px 1px",
            padding: 10,
            backgroundColor: "white",
            borderRadius: 9,
            margin: "10px 10px 20px 10px",
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
        <Paper style={styles.box}>
            <div style={styles.title}>{props.title}</div>
            <div style={styles.content}>
            {props.children}
            </div>
        </Paper>
    )
}