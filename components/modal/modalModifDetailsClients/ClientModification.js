import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField'
import Tooltip from "@material-ui/core/Tooltip";


const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        width: '1000px',
        minWidth: '50px',
        height: '300px',
        minHeight: '200px',
        overflow:'scroll',

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
            <Tooltip title="Modifier" placement="bottom" style={{fontSize:'20px'}}>
                <Button   onClick={handleOpen} className={classes.button}>
                    <EditIcon style={{fontSize:'35px', fill:'#248485'}} />
                </Button>
            </Tooltip>
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
                        <div style={{padding:'20px'}}>
                            <div id="transition-modal-title"

                                 style={{fontSize: '30px', padding:'10px', borderLeft:'solid 3px #4ECC90'}}><strong
                                style={{color:''}}>Modification Profil Client </strong></div>

                            <form className={classes.root} noValidate autoComplete="off">
                                <h2 align="center">Détail Contact</h2>
                                <Grid container spacing={3}>

                                    <Grid item sm={3}>
                                        <TextField
                                            id="standard-full-width"
                                            label="Nom/Prénom"
                                            style={{ margin: 8 }}
                                            placeholder=""
                                            fullWidth
                                            margin="normal"
                                            InputLabelProps={{
                                                shrink: true,
                                            }} />
                                    </Grid>
                                    <Grid item sm={3}>
                                        <TextField
                                            id="standard-full-width"
                                            label="Adresse"
                                            style={{ margin: 8 }}
                                            placeholder=""
                                            fullWidth
                                            margin="normal"
                                            InputLabelProps={{
                                                shrink: true,
                                            }} />
                                    </Grid>
                                    <Grid item sm={3}>
                                        <TextField
                                            id="standard-full-width"
                                            label="E-mail"
                                            style={{ margin: 8 }}
                                            placeholder="mail"
                                            fullWidth
                                            margin="normal"
                                            InputLabelProps={{
                                                shrink: true,
                                            }} />
                                    </Grid>
                                    <Grid item sm={3}>

                                        <TextField
                                            id="standard-full-width"
                                            label="Numéro de téléphone"
                                            style={{ margin: 8 }}
                                            placeholder="Tel"
                                            fullWidth
                                            margin="normal"
                                            InputLabelProps={{
                                                shrink: true,
                                            }} />
                                    </Grid>
                                </Grid>
                            </form>
                                <form className={classes.root} noValidate autoComplete="off">
                                <div align="right" style={{marginTop:'20px'}}>
                                    <Button style={{marginRight:'1%'}} color="primary" variant="contained" align="center">Enregistrer</Button>
                                    <Button variant="contained" href="/" align="center" >Annuler</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
