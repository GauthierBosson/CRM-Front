import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import NotificationsIcon from "@material-ui/core/SvgIcon/SvgIcon";
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

  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignIn() {
  const classes = useStyles();

  return (
      <div className={classes.background} style={{background:'linear-gradient(89.54755525118753deg, rgba(255, 255, 255,1) 1.249348965163032%,rgba(254, 254, 254,1) 1.249348965163032%,rgba(207, 207, 207,1) 100.18164388524987%)'}}>
    <Container component="main" maxWidth="sm">

    <div style={{height:'100px'}} ></div>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" style={{fontSize:'40px'}}>
          Connexion <LockOpenIcon style={{marginLeft:'6px', fontSize:'40px'}}/>
        </Typography>

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
      </div>
    </Container>
      </div>
  );
}
