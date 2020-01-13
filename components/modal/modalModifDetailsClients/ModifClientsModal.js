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
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField'


const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #000',
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

    const currencies = [
        {
            value: 'Primaire',
            label: '$',
        },
        {
            value: 'Secondaire',
            label: '€',
        },
        {
            value: 'AgroAlimentaire',
            label: '฿',
        },
        {
            value: 'Dentiste',
            label: '¥',
        },
    ];

    const handleChange = event => {
        setCurrency(event.target.value);
    };
    return (
        <div>
            <Button color="secondary" onClick={handleOpen} className={classes.button}>
                Modifier<EditIcon style={{marginLeft: '3px'}}/>
            </Button>
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
                        <div id="transition-modal-title"
                             style={{fontSize: '30px', backgroundColor: '#19857b', color: '#F1F1F1'}}><strong
                            style={{marginLeft: '10px'}}>Modification Profil Client </strong></div>

                        <form className={classes.root} noValidate autoComplete="off">
                            <h2 align="center">Détail Contact</h2>
                            <Grid container spacing={3}>

                                <Grid item xs={3}>
                                    <TextField
                                        id="standard-full-width"
                                        label="Nom/Prénom"
                                        style={{ margin: 8 }}
                                        placeholder="Placeholder"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }} />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        id="standard-full-width"
                                        label="Adresse"
                                        style={{ margin: 8 }}
                                        placeholder="Placeholder"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }} />
                                </Grid>
                                <Grid item xs={3}>

                                    <TextField
                                        id="standard-full-width"
                                        label="E-mail"
                                        style={{ margin: 8 }}
                                        placeholder="Placeholder"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }} />
                                </Grid>
                                <Grid item xs={3}>

                                    <TextField
                                        id="standard-full-width"
                                        label="Numéro de téléphone"
                                        style={{ margin: 8 }}
                                        placeholder="Placeholder"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }} />
                                </Grid>
                            </Grid>
                        </form>
                        <hr style={{marginTop:'30px', border:'solid 1px #36393F',color:'#36393F' ,width:'50%', marginBottom:'30px'}}/>
                        <form className={classes.root} noValidate autoComplete="off">
                            <h2 align="center">Détail Entreprise</h2>
                            <Grid container spacing={3}>

                                <Grid item xs={2}>

                                    <TextField
                                        id="standard-full-width"
                                        label="Nom d'Entreprise"
                                        style={{ margin: 8 }}
                                        placeholder="Nom"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                        shrink: true,
                                    }}
                                        />
                                </Grid>
                                <Grid item xs={2}>
                                    <TextField
                                        id="standard-full-width"
                                        label="Adresse"
                                        style={{ margin: 8 }}
                                        placeholder="Adresse"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <TextField
                                        id="standard-full-width"
                                        label="Tel"
                                        style={{ margin: 8 }}
                                        placeholder="Tel"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <TextField
                                        id="standard-full-width"
                                        label="SIRET"
                                        style={{ margin: 8 }}
                                        placeholder="SIRET"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={3}>

                                    <TextField style={{marginTop:'8px'}}
                                        id="standard-select-currency"
                                        select
                                        label="Catégories"
                                        value={currencies}
                                        onChange={handleChange}
                                        helperText="Selectionner la catégorie correspondante"
                                    />
                                </Grid>

                            </Grid>
                            <div align="right" style={{marginTop:'20px'}}>
                            <Button color="primary" align="right">Enregistrer</Button>
                            <Button color="error" href="/" align="right" style={{color:'#cf2c29'}}>Annuler</Button>
                            </div>
                            </form>

                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
