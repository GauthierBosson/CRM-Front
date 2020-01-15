import React from 'react';
import {lighten, makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/container';
import Grid from '@material-ui/core/Grid';
import ArchiveIcon from '@material-ui/icons/Archive';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}));

export default function EnhancedTable() {
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(true);
    const [rowsPerPage, setRowsPerPage] = React.useState(7);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };





    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <React.Fragment>
                    <Container maxWidth="lg">
                        <div className={classes.root}>
                            <div style= {{padding:'5px'}}>
                                <h1 style={{color:'#19857b'}}>Mentions Légales de l'application</h1>
                            </div>
                            <Grid container>

                                <Grid item xs={12}>
                                    <Paper>
                                        <br/>
                                        <br/>
                                        <Grid container>
                                            <Grid item sm={12} style={{padding:'10px'}}>
                                                <div align="center">
                                                    <p style={{textAlign:'center'}}><span style={{color:'#FF0000'}}><span style={{backgroundColor:'#D3D3D3'}}>Si vous utilisez nos Mentions Légales, vous vous engagez à laisser les liens </span><strong><span style={{backgroundColor:'#D3D3D3'}}>Crédit sans en modifier ni les liens ni les ancres.</span></strong><span style={{backgroundColor:'#D3D3D3'}}> </span></span><br />
                                                        <span style={{color:'#FF0000'}}><span style={{backgroundColor:'#D3D3D3'}}>Par avance merci pour votre compréhension et le respect du travail effectué par toute l'équipe</span></span></p>

                                                    <h1>MENTIONS LEGALES :</h1>

                                                    <p style={{textAlign:'justify'}}><strong> </strong><br />
                                                        Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., nous portons à la connaissance des utilisateurs et visiteurs du site : <a href="http://ballue-jerome.fr" target="_blank">ballue-jerome.fr</a> les informations suivantes :</p>

                                                    <p style={{textAlign:'justify'}}><strong>ÉDITEUR</strong></p>

                                                    <p style={{textAlign:'justify'}}>Le site <a href="http://ballue-jerome.fr" style={{color:'#0782C1', fontFamily: 'sans-serif, Arial, Verdana'}} target="_blank">ballue-jerome.fr</a> est la propriété exclusive de <strong>SARL </strong><strong>GCJ Corporate</strong>, qui l'édite.</p>

                                                    <p style={{textAlign:'justify'}}><strong>GCJ Corporate</strong><strong> </strong><br />
                                                        <strong>SARL </strong>au capital de<strong> </strong><strong>100 000 ? </strong>€Tél  : <strong>0672644509</strong></p>

                                                    <p style={{textAlign:'justify'}}><strong>24 Place Saint-MArc  </strong><strong>76000 ROUEN</strong><br />
                                                        Immatriculée au Registre du Commerce et des Sociétés de  <strong>blbla </strong>sous le numéro<strong> </strong><strong>192U387246836</strong><strong> </strong></p>

                                                    <p style={{textAlign:'justify'}}>Numéro TVA intracommunautaire : <strong>01</strong><br />
                                                        Adresse de courrier électronique : <strong>commercial@gcjco.com</strong> <br />
                                                        <br />
                                                        Directeur de la  publication : <strong>Gauthier Bosson</strong><br />
                                                        Contactez le responsable de la publication : <strong>chefkrezus@gmail.com</strong></p>

                                                    <p style={{textAlign:'justify'}}> </p>

                                                    <p style={{textAlign:'justify'}}><strong>HÉBERGEMENT</strong></p>

                                                    <p style={{textAlign:'justify'}}>Le site est hébergé par <strong>gauthier boson https;//crm-campus.fr 93000 Drancy</strong><br />
                                                        <u><strong>CREDITS :</strong></u> les mentions légales ont étés générées par <strong><a href="https://www.generer-mentions-legales.com">mentions légales</a></strong><br />
                                                        Horaires de la <strong><a href="http://www.patinoire.biz/p+patinoire-de-lyon---charlemagne+113.html">Patinoire Lyon</a></strong></p>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                            </Grid>

                        </div>
                    </Container>
                </React.Fragment>
            </Container>
        </main>

    );
}
