import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2978A8',
        },
        secondary: {
            main: '#2978A8',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: 'rgba(241,241,241,0.88)',
        },
    },
});

export default theme;
