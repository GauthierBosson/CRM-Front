
import Button from '@material-ui/core/Button';
import ModifClientsModal from '../components/modal/modalModifDetailsClients/ModifClientsModal';
import React, { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BusinessIcon from '@material-ui/icons/Business';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import projectsServices from '../utils/projectsServices';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}))

const detailsCompany = (props) => {
    const classes = useStyles();
    const [openModal, setOpenModal] = useState(false);
    const [project, setProject] = useState({ name: '', clientId: props.companyInfos._id })

    const handleOpenModal = () => {
        setOpenModal(true);
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    }

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const response = await projectsServices.addProject(project);
            handleCloseModal();
            Router.push(`/projectDetails?id=${response.data.doc._id}`)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper style={{padding: '10px', borderLeft:'solid 3px #4ECC90'}}>
                        <div style={{padding: '6px'}}><h3 style={{fontSize: '24px',borderLeft:'solid 3px #4ECC90', padding:'10px', marginLeft:'20px'}} align="left">Coordonnées
                            d'entreprise <BusinessIcon style={{fill:'#248485', fontSize:'30px', marginLeft: '7px'}}/></h3>

                            <p style={{marginLeft: '5px', fontSize: '15px'}}>
                                Nom d'entreprise : <br/>
                                Tel :
                                <br/>
                                Adresse Complète :
                            </p>
                            <div align="right"><ModifClientsModal/></div>
                        </div>
                    </Paper>

                </Grid>


                <Grid item xs={3} align="left">
                    <Button disabled={true} variant="contained" color="primary" disableElevation>
                        Envoyer un mail <MailOutlineIcon style={{marginLeft: '6px'}}/>
                    </Button>
                </Grid>
                <Grid item xs={3} align="left">
                    <Button variant="contained" color="primary" disableElevation>
                        Voir Devis<ReceiptIcon style={{marginLeft: '6px'}} />
                    </Button>

                </Grid>
                <Grid item xs={3} align="left">
                    <Button onClick={handleOpenModal} variant="contained" color="primary" disableElevation>
                        Créer un projet<ReceiptIcon style={{marginLeft: '6px'}} />
                    </Button>
                </Grid>
            </Grid>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={openModal}
                    onClose={handleCloseModal}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={openModal}>
                        <div className={classes.paper}>
                            <form onSubmit={handleSubmit}>
                                <TextField 
                                    id="project-title" 
                                    label="Intitulé du projet" 
                                    onChange={event => {
                                        setProject(
                                            Object.assign({}, project, { name: event.target.value })
                                        )
                                    }}
                                />
                                <Button type="submit">Valider</Button>
                            </form>
                        </div>
                    </Fade>
                </Modal>
        </div>
    );
};

export default detailsCompany;
