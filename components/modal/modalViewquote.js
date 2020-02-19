import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import VisibilityIcon from "@material-ui/icons/Visibility";
import Grid from "@material-ui/core/Grid";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '1px solid',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: '1000px',
        minWidth: '100px',

    },
    button: {
        border: '0px',
        backgroundColor: 'transparent',
    },
    Visibility: {
        fill: '#19857b',

    },
    Table: {
        minWidth: '50px',
    }
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
        <div>
            <button color="secondary" onClick={handleOpen} className={classes.button} style={{padding: '6px'}}>
                <VisibilityIcon className={classes.Visibility}/>
            </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>

                    <div className={classes.paper}>
                        <div id="transition-modal-title" style={{fontSize:'30px', backgroundColor:'#19857b', color:'#F1F1F1'}}><strong style={{marginLeft:'10px'}}>Détails du devis </strong></div>
                        <br/>
                        <br/>
                        <Grid item xs={12}>
                            <h2 id="transition-modal-title" align="center">Logo Entreprise</h2>
                        </Grid>

                        <br/>
                        <br/>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <br/>
                                <br/>
                                <div id="transition-modal-description"><strong> Nom Responsable entreprise <br/>
                                </strong></div>
                                <br/>
                                <div> Date : 10/11/2019 <br/> Facture n° :</div>
                            </Grid>
                            <Grid item xs={6}>
                                <div id="transition-modal-description" align="right"> Numéro adresse<br/>Ville Code
                                    postal
                                </div>
                            </Grid>
                        </Grid>
                        <br/>
                        <br/>
                        <Grid item xs={12}>
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

                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                Base de donnée
                                            </TableCell>
                                            <TableCell align="right">3000 €</TableCell>
                                            <TableCell align="right">2</TableCell>
                                            <TableCell align="right">3000 €</TableCell>

                                        </TableRow>

                                    </TableBody>
                                </Table>
                            </TableContainer>

                            <br/>
                            <br/>
                            <br/>


                            <Grid container spacing={3}>
                                <Grid item xs={4} align="center">
                                    <div id="transition-modal-description" ><strong> RIB <br/>
                                    </strong></div>
                                    <br/>
                                    <div> IBAN :  **** **** **** 1234 <br/> BIC n° : 123 123 123</div>
                                </Grid>
                                <Grid item xs={4} align="center">
                                    <div id="transition-modal-description" align="center" style={{fontSize:'30px'}}> A Régler avant le <br/></div>
                                    <div><strong style={{fontSize:'20px'}}> 10/10/20</strong></div>
                                </Grid>
                                <Grid item xs={4} align="center">
                                    <div id="transition-modal-description" align=""> Total<br/>
                                        <div style={{fontSize:'30px', color:'#19857b'}}><strong>3000 € </strong></div>
                                    </div>
                                </Grid>
                            </Grid>

                        </Grid>


                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
