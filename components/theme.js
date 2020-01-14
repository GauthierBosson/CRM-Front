import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#3e3e3e',
        },
        secondary: {
            main: '#3e3e3e',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: 'rgba(241,241,241,0.88)',
        },

        success: {
            main: '#4ECC90',
        },
    },
});

export default theme;
