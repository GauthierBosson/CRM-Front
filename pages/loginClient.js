import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import { login } from '../utils/authClient';

import axios from 'axios';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  background: {
    height: "100vh",
    backgroundSize: "cover",
    backgroundImage: 'radial-gradient(closest-corner,rgba(0, 28, 85,0) 60%,rgba(0, 28, 85,.5)),linear-gradient(to top left,#1F487E,#00ae5b 100%)'


  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function loginClient() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/v1/clients/login', { email: credentials.email, password: credentials.password });
      if (response.status === 200) {
        const { token } = response.data
        await login({ token })
      } else {
        console.log('Login failed.')
        // https://github.com/developit/unfetch#caveats
        let error = new Error(response.statusText)
        error.response = response
        throw error
      }
    } catch (error) {
      console.error('erreur : ', error)
    }
  }

  const classes = useStyles();

  return (
      <div className={classes.background}>
        <Container component="main" maxWidth="sm">

          <div style={{height:'100px'}} ></div>
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5" style={{fontSize:'40px',color:'white', fontFamily:'Public Sans, sans-serif'}}>
              Connexion client <LockOpenIcon style={{marginLeft:'6px', fontSize:'40px', color:'white'}}/>
            </Typography>

            <Card style={{marginTop:'20px', backgroundColor:'#F1F1F1', boxShadow:'-webkit-box-shadow: 11px 11px 16px 0px rgba(5,5,5,0.23);\n' +
                  '-moz-box-shadow: 11px 11px 16px 0px rgba(5,5,5,0.23);\n' +
                  'box-shadow: 11px 11px 16px 0px rgba(5,5,5,0.23);'}}>
              <CardContent>
                <form onSubmit={handleSubmit} className={classes.form}>
                  <Grid style={{ marginTop: "20px" }}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={event => {
                          setCredentials(
                            Object.assign({}, credentials, { email: event.target.value })
                          )
                        }}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Modt de passe"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={event => {
                          setCredentials(
                            Object.assign({}, credentials, { password: event.target.value })
                          )
                        }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                      Se connecter
                    </Button>
                  </Grid>
                </form>
              </CardContent>

            </Card>
          </div>
        </Container>
      </div>
  );
}
