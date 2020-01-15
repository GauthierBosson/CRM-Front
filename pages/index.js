import React from "react";
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

export default function SignIn() {
  const classes = useStyles();

  return (
      <div className={classes.background}>
    <Container component="main" maxWidth="sm">

    <div style={{height:'100px'}} ></div>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" style={{fontSize:'40px',color:'white'}}>
          Connexion <LockOpenIcon style={{marginLeft:'6px', fontSize:'40px', color:'white'}}/>
        </Typography>

        <Card style={{marginTop:'20px', backgroundColor:'#F1F1F1'}}>
          <CardContent>
        <form className={classes.form} noValidate>
          <Grid style={{ marginTop: "20px" }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
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
