import React, {Component} from 'react';
import Header from './header/Header';
import PropTypes from 'prop-types';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {theme} from './theme-default';

export default class App extends Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <MuiThemeProvider theme={theme}>
                    <Header/>

                    {this.props.children}
                </MuiThemeProvider>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.any,
};
