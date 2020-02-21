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

export default function FactureClient(props) {
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
                    style={{marginLeft: '10px'}}>Détails de la Facture </strong></div>

                <br/>
                <br/>
                <Grid item sm={12}>
                    <h2 id="transition-modal-title" align="center">Logo Entreprise</h2>
                </Grid>

                <br/>
                <br/>
                <Grid container spacing={3}>
                    <Grid item sm={6}>
                        <br/>
                        <br/>
                        <div id="transition-modal-description"><strong> Nom Responsable entreprise <br/>
                        </strong></div>
                        <br/>
                        <div> Date : 10/11/2019 <br/> Facture n° :</div>
                    </Grid>
                    <Grid item sm={6}>
                        <div id="transition-modal-description" align="right"> Numéro adresse<br/>Ville Code
                            postal
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

                                {props.command.prestations.map(prestation => {
                                  return (
                                    <TableRow>
                                      <TableCell component="th" scope="row">
                                        {prestation.prestation.name}
                                      </TableCell>
                                      <TableCell align="right">{prestation.price} €</TableCell>
                                      <TableCell align="right">{prestation.quantity}</TableCell>
                                      <TableCell align="right">{prestation.quantity * prestation.price} €</TableCell>
                                    </TableRow>
                                  )
                                })}
                                
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <br/>
                    <br/>
                    <br/>


                    <Grid container spacing={3}>
                        {/*<Grid item sm={4} align="center">
                            <div id="transition-modal-description"><strong> RIB <br/>
                            </strong></div>
                            <br/>
                            <div> IBAN : **** **** **** 1234 <br/> BIC n° : 123 123 123</div>
                              </Grid>*/}
                        <Grid item sm={6} align="center">
                            <div id="transition-modal-description" align="center" style={{fontSize: '30px'}}> A Régler
                                avant
                                le <br/></div>
                            <div><strong style={{fontSize: '20px'}}> {moment(props.command.dueDate).format('DD/MM/YYYY')}</strong></div>
                        </Grid>
                        <Grid item sm={6} align="center">
                            <div id="transition-modal-description" align=""> Total<br/>
                                <div style={{fontSize: '30px', color: '#19857b'}}><strong>{props.command.total} € </strong></div>
                            </div>
                        </Grid>
                    </Grid>

                </Grid>

            </div>


        </>
    )
}