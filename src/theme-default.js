import primaryColor from '@material-ui/core/colors/orange';
import Blue from '@material-ui/core/colors/blue';
import {createMuiTheme} from '@material-ui/core/styles';

export const theme = createMuiTheme({
    direction: 'rtl',
    palette: {
        primary: {
            light: '#757ce8',
            main: primaryColor[500],
            dark: '#002884',
            contrastText: '#ffffff',
        },

        secondary: {
            light: '#757ce8',
            main: Blue[700],
            dark: '#002884',
            contrastText: '#ffffff',
        },
    },
});
