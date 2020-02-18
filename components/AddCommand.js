import React, {useState} from "react";
import {lighten, makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
const useStyles = makeStyles(theme => ({
    root: {
        width: "100%"
    },
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
    }
}));

export default function EnhancedTable() {
    const classes = useStyles();
    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };
    const handleCloseCsv = () => {
        setShowCsv(false);
    };

    const handleFiles = files => {
        const reader = new FileReader();
        reader.onload = function (e) {
            // Use reader.result
            let csvResult = reader.result;
            let ar = csvResult.split("\n");
            delete ar[0];
            setCsvData(ar);
            console.log("ar", ar[1].split(",")[1]);
            // console.log("ar", ar);
            setShowCsv(true);
        };
        reader.readAsText(files[0]);
    };

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer}/>
            <Container maxWidth="false" className={classes.container}>
                <React.Fragment>
                    <Container maxWidth="false">
                        <Grid item  sm={12}>
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

                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                Base de donnée
                                            </TableCell>
                                            <TableCell align="right">3000 €</TableCell>
                                            <TableCell align="right">2</TableCell>
                                            <TableCell align="right">3000 €</TableCell>

                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                <TextField label="Produit" id="produit" defaultValue="" size="small" />
                                            </TableCell>
                                            <TableCell align="right"><TextField label="Prix unitaire" id="prix" defaultValue="" size="small" /></TableCell>
                                            <TableCell align="right"><TextField label="Quantité" id="quantite" defaultValue="" size="small" /></TableCell>
                                            <TableCell align="right"><TextField label="Total" id="total" defaultValue="" size="small" /></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">

                                            </TableCell>
                                            <TableCell align="right"></TableCell>
                                            <TableCell align="right"></TableCell>
                                            <TableCell align="right"><Fab color="primary"   size="small" aria-label="add">
                                                <AddIcon />
                                            </Fab></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>

                            <br/>
                            <br/>
                            <br/>
                        </Grid>

            </Container>
                </React.Fragment>
            </Container>
        </main>
    );
}
