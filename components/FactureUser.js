import React from 'react';
import Grid from "@material-ui/core/Grid";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import {lighten, makeStyles} from "@material-ui/core/styles";

import moment from 'moment';


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

export default function FactureUser(props) {
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
                <div id="transition-modal-title" style={{fontSize: '30px', borderLeft: 'solid 3px #19857b'}}><strong
                    style={{marginLeft: '10px'}}>Détails de la Facture : {props.command.name} </strong></div>

                <br/>
                <br/>
                <Grid item sm={12}>
                    <h2 id="transition-modal-title" align="center">Web Partner</h2>
                </Grid>

                <br/>
                <br/>
                <Grid container spacing={3}>
                    <Grid item sm={6}>
                        <br/>
                        <br/>
                        <br/>
                    </Grid>
                    <Grid item sm={6}>
                        <div id="transition-modal-description" align="right"> {props.command.project.clientId.name}<br/>{props.command.project.clientId.address.street}<br/>{props.command.project.clientId.address.city} {props.command.project.clientId.address.zip_code}
                        </div>
                    </Grid>
                </Grid>
                <br/>
                <br/>
                <Grid item sm={12}>
                    <TableContainer component={Paper}>
                        <Table className={classes.Table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Designation</TableCell>
                                    <TableCell align="right">Prix Unitaire €</TableCell>
                                    <TableCell align="right">Quantité </TableCell>
                                    <TableCell align="right">Total</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.command.prestations.map(prestation => (
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            {prestation.prestation.name}
                                        </TableCell>
                                        <TableCell align="right">{prestation.price} €</TableCell>
                                        <TableCell align="right">{prestation.prestation.quantity}</TableCell>
                                        <TableCell align="right">{prestation.price * prestation.prestation.quantity} €</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>

                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell align="right">{props.command.total} € HT</TableCell>

                        </Table>
                    </TableContainer>

                    <br/>
                    <br/>
                    <br/>


                    <Grid container spacing={3}>
                        <Grid item sm={6} align="center">
                            <div id="transition-modal-description" align="center" style={{fontSize: '30px'}}> A Régler
                                avant
                                le <br/></div>
                            <div><strong style={{fontSize: '20px'}}>{moment(props.command.dueDate).format('DD/MM/YYYY')}</strong></div>
                        </Grid>
                        <Grid item sm={6} align="center">
                            <div id="transition-modal-description" align=""> Total<br/>
                                <div style={{fontSize: '30px', color: '#19857b'}}><strong>{props.command.total + (props.command.total * 0.2)} € </strong></div>
                            </div>
                        </Grid>
                    </Grid>

                </Grid>

            </div>


        </>
    )
}