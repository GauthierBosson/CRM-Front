import React, {useState} from "react";
import {lighten, makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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
                        <div id="title" style={{borderLeft: 'solid 3px #19857b'}}><strong><h2 style={{marginLeft: '3%' }}> Categorie Name </h2></strong></div>
                        <div style={{padding: '%', marginTop: '3%'}}>
                            <p>Liste des prestations associées : </p>
                            <ListItem>
                                <ListItemText
                                    primary="Mockups"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Warframe"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Création de jeux"
                                />
                            </ListItem>
                        </div>
                    </Container>
                </React.Fragment>
            </Container>
        </main>
    );
}
