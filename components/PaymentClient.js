import React from 'react';
import EuroIcon from '@material-ui/icons/Euro';
import {lighten, makeStyles} from "@material-ui/core/styles";
import DateRangeIcon from "@material-ui/icons/DateRange";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Button from "@material-ui/core/Button";
import CreditCardIcon from "@material-ui/icons/CreditCard";


const useStyles = makeStyles(theme => ({

    paper: {
        width: "100%",
        marginBottom: theme.spacing(2)
    },
    table: {
        minWidth: 750
    },
    visuallyHidden: {
        border: 0,
        clip: "rect(0 0 0 0)",
        height: 1,
        margin: -1,
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        top: 20,
        width: 1
    },
    root: {
        flexGrow: 1,
        maxWidth: 752,
        width: "100%"
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));

export default function TransitionsModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
            <div>
                <div style={{fontSize: '30px', borderLeft: 'solid 3px #19857b'}}><strong
                    style={{marginLeft: '10px'}}>Récapitulatif </strong> <EuroIcon style={{fill: '#269a9c',  marginLeft:'2vh'}}/></div>
            </div>




            <div color="primary" align="center"><Button href="/PaymentClient">Regler la facture <CreditCardIcon style={{marginLeft: '4px'}}/></Button>
            </div>
        </>
    )
}

