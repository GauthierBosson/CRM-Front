import React, {useState} from 'react';
import Router from 'next/router';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import paper from '@material-ui/core/Paper';
import clientsServices from '../utils/clientsServices';
import companiesServices from '../utils/companiesServices';
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box";

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
            address: {
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
            <div>
                <Autocomplete
                    id="company"
                    freeSolo
                    disableClearable={true}
                    disableCloseOnSelect={true}
                    options={[]}
                    onChange={(event, value) => {
                        setFormInfos(
                            Object.assign({}, formInfos, {company: value})
                        )
                    }}
                    renderInput={params => (

                        <TextField item xs={12}
                            {...params}
                            label="Entreprise"
                            margin="normal"
                            variant="outlined"
                            onChange={(event) => {
                                setFormInfos(
                                    Object.assign({}, formInfos, {company: event.target.value})
                                )
                            }}
                            fullWidth
                        />
                    )}
                />
            </div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={3} align="center">
            <TextField id="email" label="Email" type="email" onChange={event => {
                setFormInfos(
                    Object.assign({}, formInfos, {email: event.target.value})
                )
            }}/>

                </Grid>
                <Grid item xs={12} sm={3} align="center">
            <TextField id="firstname" label="Prénom" type="text" onChange={event => {
                setFormInfos(
                    Object.assign({}, formInfos, {firstname: event.target.value})
                )
            }}/>
                </Grid>
                <Grid item xs={12} sm={3} align="center">

            <TextField id="lastname" label="Nom" type="text" onChange={event => {
                setFormInfos(
                    Object.assign({}, formInfos, {lastname: event.target.value})
                )
            }}/>
                </Grid>
                <Grid item xs={12} sm={3} align="center">
            <TextField id="phone" type="text" label="Téléphone" onChange={event => {
                setFormInfos(
                    Object.assign({}, formInfos, {phone: event.target.value})
                )
            }}/>
                </Grid>
            </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3} align="center">
            <TextField id="country" type="text" label="Pays" onChange={event => {
                setFormInfos(
                    Object.assign({}, formInfos, {country: event.target.value})
                )
            }}
            />
                    </Grid>
                    <Grid item xs={12} sm={3} align="center">
            <TextField id="state" type="text" label="Région"
                       onChange={event => {
                           setFormInfos(
                               Object.assign({}, formInfos, {state: event.target.value})
                           )
                       }}
            />
                    </Grid>
                    <Grid item xs={12} sm={3} align="center">

            <TextField id="city" type="text" label="Ville" onChange={event => {
                setFormInfos(
                    Object.assign({}, formInfos, {city: event.target.value})
                )
            }}
            />
                    </Grid>
                    <Grid item xs={12} sm={3} align="center">
            <TextField id="zip_code" type="number" label="Code Zip"
                onChange={event => {
                    setFormInfos(
                        Object.assign({}, formInfos, {zip_code: parseInt(event.target.value)})
                    )
                }}
            />
                    </Grid>
                </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={3} align="center">
            <TextField id="street" type="text" label="Rue"
                onChange={event => {
                    setFormInfos(
                        Object.assign({}, formInfos, {street: event.target.value})
                    )
                }}
            />
                </Grid>
            </Grid>
            <div align="center" style={{marginTop:'2%'}}>
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
export default addClient;
