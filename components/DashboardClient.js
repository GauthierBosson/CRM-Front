import {withAuthSyncClient} from '../utils/authClient';
import React, {useState} from "react";
import {lighten, makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import FolderIcon from '@material-ui/icons/Folder';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

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

function generate(element) {
    return [0, 1, 2].map(value =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

function DashboardClient() {
    return (
        <main>
            <div>
                <Container maxWidth="false">
                    <React.Fragment>
                        <Container maxWidth="false" align="center">
                            <div>
                                <h1>Projets</h1>

                                <Button align="center"
                                        variant="contained"
                                        color="primary"
                                >
                                    Mes rendez-vous
                                </Button>
                            </div>

                            <div>

                                <List>

                                    <ListItem>
                                        <ListItemIcon>
                                            <FolderIcon/>
                                        </ListItemIcon>
                                        <Button href="/CommandeClient">
                                            <ListItemText
                                                primary="Dakr Project n°1"
                                                secondary
                                            />
                                        </Button>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <FolderIcon/>
                                        </ListItemIcon>
                                        <Button href="/CommandeClient">
                                            <ListItemText
                                                primary="Dakr Project n°2"
                                                secondary
                                            />
                                        </Button>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <FolderIcon/>
                                        </ListItemIcon>
                                        <Button href="/CommandeClient">
                                            <ListItemText
                                                primary="Dakr Project n°3"
                                                secondary
                                            />
                                        </Button>
                                    </ListItem>
                                </List>


                            </div>


                        </Container>
                    </React.Fragment>
                </Container>
            </div>
        </main>
    )
}

export default DashboardClient;
