import Button from '@material-ui/core/Button';
import ClientModification from '../components/modal/modalModifDetailsClients/ClientModification';
import React from 'react';
import Link from 'next/link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BusinessIcon from '@material-ui/icons/Business';

const ProfileClient = (props) => {
    return (
        <div>
            <Grid container spacing={3}>
                <h2> Informations</h2>
                <Grid item xs={12}>

                        <p style={{marginLeft: '7px', fontSize: '15px'}}>
                            Nom/Prénom : <br/>
                            Adresse Complète :
                            <br/>
                            E-mail :
                            <br/>
                            Tel :
                        </p>



                            <div align="right"><ClientModification/></div>



                </Grid>



                <Grid item xs={12} align="center">
                    <Button variant="contained" href="/dashboardClient" color="primary" disableElevation>
                        Voir Projet<ReceiptIcon style={{marginLeft: '6px'}} />
                    </Button>

                </Grid>


            </Grid>
        </div>
    );
};

export default ProfileClient;
