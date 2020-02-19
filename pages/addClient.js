/*import React, { useState } from 'react';
import Router from 'next/router';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import clientsServices from '../utils/clientsServices';
import companiesServices from '../utils/companiesServices';

function addClient(props) {
  const [formInfos, setFormInfos] = useState({
    email: '',
    firstname: '',
    lastname: '',
    company: '',
    phone: '',
    country: '',
    state: '',
    city: '',
    zip_code: '',
    street: ''
  })

  const handleSubmit = async event => {
    event.preventDefault();

    const infos = {
      email: formInfos.email,
      firstname: formInfos.firstname,
      lastname: formInfos.lastname,
      company: formInfos.company,
      phone: formInfos.phone,
      address : {
        country: formInfos.country,
        state: formInfos.state,
        city: formInfos.city,
        zip_code: formInfos.zip_code,
        street: formInfos.street
      }
    }

    try {
      const response = await clientsServices.addClient(infos);
      
      Router.push(`/clientProfil?id=${response._id}`)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ width: 300 }}>
      <Autocomplete
        id="company"
        freeSolo
        disableClearable={true}
        disableCloseOnSelect={true}
        options={props.companiesList.map(company => company.name)}
        onChange={(event, value) => {
          setFormInfos(
            Object.assign({}, formInfos, { company: value })
          )
        }}
        renderInput={params => (
          <TextField 
            {...params} 
            label="Entreprise" 
            margin="normal" 
            variant="outlined" 
            onChange={(event) => {
              setFormInfos(
                Object.assign({}, formInfos, { company: event.target.value })
              )
            }}
            fullWidth 
          />
        )}
      />
    </div>
      <label htmlFor="email">Email</label>
      <input 
        id="email" 
        type="email" 
        onChange={event => {
          setFormInfos(
            Object.assign({}, formInfos, { email: event.target.value })
          )
        }}
      />

      <label htmlFor="firstname">Prénom</label>
      <input 
        id="firstname" 
        type="text" 
        onChange={event => {
          setFormInfos(
            Object.assign({}, formInfos, { firstname: event.target.value })
          )
        }}
      />

      <label htmlFor="lastname">Nom</label>
      <input 
        id="lastname" 
        type="text" 
        onChange={event => {
          setFormInfos(
            Object.assign({}, formInfos, { lastname: event.target.value })
          )
        }}
      />

      <label htmlFor="phone">Téléphone</label>
      <input 
        id="phone" 
        type="text" 
        onChange={event => {
          setFormInfos(
            Object.assign({}, formInfos, { phone: event.target.value })
          )
        }}
      />

      <label htmlFor="country">Pays</label>
      <input 
        id="country" 
        type="text" 
        onChange={event => {
          setFormInfos(
            Object.assign({}, formInfos, { country: event.target.value })
          )
        }}
      />

      <label htmlFor="state">Région</label>
      <input 
        id="state" 
        type="text" 
        onChange={event => {
          setFormInfos(
            Object.assign({}, formInfos, { state: event.target.value })
          )
        }}
      />

      <label htmlFor="city">Ville</label>
      <input 
        id="city" 
        type="text" 
        onChange={event => {
          setFormInfos(
            Object.assign({}, formInfos, { city: event.target.value })
          )
        }}
      />

      <label htmlFor="zip_code">Code zip</label>
      <input 
        id="zip_code" 
        type="number" 
        onChange={event => {
          setFormInfos(
            Object.assign({}, formInfos, { zip_code: parseInt(event.target.value) })
          )
        }}
      />

      <label htmlFor="street">Rue</label>
      <input 
        id="street" 
        type="text" 
        onChange={event => {
          setFormInfos(
            Object.assign({}, formInfos, { street: event.target.value })
          )
        }}
      />

      <input type="submit" value="valider" />
    </form>
  )
}

addClient.getInitialProps = async ctx => {
  const companiesList = await companiesServices.getCompanies(ctx);

  return { companiesList: companiesList.data.data };
}

export default addClient;*/


/////////////////////////////////////////////////////////////////////

import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {mainListItems} from '../components/listItems';
import MessageIcon from '@material-ui/icons/Message';
import AddClient from '../components/AddClient';

import clientsServices from '../utils/clientsServices';
import companiesServices from '../utils/companiesServices';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth = 240;

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

function AddClientPage(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        <strong>Ajout client</strong>
                    </Typography>

                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon} style={{backgroundColor: '#F1F1F1'}}>

                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </div>
                <Divider/>
                <List style={{backgroundColor: '#F1F1F1'}}>{mainListItems}</List>
                <Divider/>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <Container maxWidth="false" className={classes.container}>
                    <Paper style={{padding:"30px", borderLeft:'solid 2px darkgreen'}}>
                    <AddClient companiesList={props.companiesList} />
                    </Paper>
                    </Container>
            </main>
        </div>
    );
}

AddClientPage.getInitialProps = async ctx => {
  const companiesList = await companiesServices.getCompanies(ctx);

  return { companiesList: companiesList.data.data };
}

export default AddClientPage
