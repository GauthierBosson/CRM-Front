import React, {useState} from 'react';
import Router from 'next/router';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import paper from '@material-ui/core/Paper';
import clientsServices from '../utils/clientsServices';
import companiesServices from '../utils/companiesServices';
import userServices from '../utils/userServices';
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        borderColor: theme.palette.primary,
    },
    fixedHeight: {
        height: 100
    },
}));

function addUser(props) {
    const [formInfos, setFormInfos] = useState({
        name: '',
        email: '',
        role: ''
    })

    const handleSubmit = async event => {
        event.preventDefault();

        const infos = {
            email: formInfos.email,
            name: formInfos.name,
            role: formInfos.role
        }

        try {
            const response = await userServices.addUser(infos);
            Router.push(`/listUsers`)
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <h1>Créer un nouveau utilisateur</h1>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={3}>
            <TextField id="email" label="Email" type="email" onChange={event => {
                setFormInfos(
                    Object.assign({}, formInfos, {email: event.target.value})
                )
            }}/>

                </Grid>
                <Grid item xs={6} sm={3}>
            <TextField id="name" label="Nom" type="text" onChange={event => {
                setFormInfos(
                    Object.assign({}, formInfos, {name: event.target.value})
                )
            }}/>
                </Grid>
                <Grid item xs={6} sm={3}>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">Role</InputLabel>
                  <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={formInfos.role}
                      onChange={event => {
                        setFormInfos(
                            Object.assign({}, formInfos, {role: event.target.value})
                        )
                      }}
                  >
                      <MenuItem value={"employee"}>Employé</MenuItem>
                      <MenuItem value={"admin"}>Administrateur</MenuItem>
                  </Select>
                </FormControl>
                </Grid>
            </Grid>
            <div align="center">
            <Button variant="outlined" align="center"  type="submit" color="primary" style={{marginTop:"3%"}}>
                Valider
            </Button>
            </div>
        </form>
    )
}

/*
addClient.getInitialProps = async ctx => {
  const companiesList = await companiesServices.getCompanies(ctx);
  return { companiesList: companiesList.data.data };
}
*/
export default addUser;