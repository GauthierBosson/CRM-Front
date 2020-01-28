
import Button from '@material-ui/core/Button';
import ModifClientsModal from '../components/modal/modalModifDetailsClients/ModifClientsModal';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BusinessIcon from '@material-ui/icons/Business';

const clientProfil = () => {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper style={{padding: '10px', borderLeft:'solid 3px #4ECC90'}}><h3 style={{fontSize: '24px',borderLeft:'solid 3px #4ECC90', padding:'16px'}} align="left">Coordonnées <AccountCircleIcon style={{fill:'#24a2a3', fontSize:'30px', marginLeft: '5px'}}/></h3>

                        <p style={{marginLeft: '5px', fontSize: '15px'}}>
                            Nom/Prénom : <br/>
                            Adresse Complète :
                            <br/>
                            E-mail :
                            <br/>
                            Tel :
                        </p>


                        <div style={{padding: '6px'}}><h3 style={{fontSize: '24px',borderLeft:'solid 3px #4ECC90', padding:'16px'}} align="left">Coordonnées
                            d'entreprise <BusinessIcon style={{fill:'#248485', fontSize:'30px', marginLeft: '5px'}}/></h3>

                            <p style={{marginLeft: '5px', fontSize: '15px'}}>
                                Nom d'entreprise : <br/>
                                Tel :
                                <br/>
                                Adresse Complète :
                                <br/>
                                Dirigeant :
                                <br/>
                                SIRET :
                                <br/>
                                Catégorie Activité :
                                <br/>
                            </p>
                            <div align="right"><ModifClientsModal/></div>
                        </div>
                    </Paper>

                </Grid>


                <Grid item xs={6} align="right">
                    <Button variant="contained" color="primary" disableElevation>
                        Envoyer un mail <MailOutlineIcon style={{marginLeft: '6px'}}/>
                    </Button>
                </Grid>
                <Grid item xs={6} align="left">
                    <Button variant="contained" color="primary" disableElevation>
                        Voir Devis<ReceiptIcon style={{marginLeft: '6px'}} />
                    </Button>

                </Grid>


            </Grid>
        </div>
    );
};

export default clientProfil;
