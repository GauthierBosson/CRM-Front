import { Fragment } from "react";
import { Container, Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

const clientProfil = () => {
  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6">News</Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ backgroundColor: "#eeeeee", marginTop: "50px" }}>
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="stretch"
        >
          <Grid item xs={12}>
            <p>Nom</p>
          </Grid>
          <Grid item xs={12}>
            <p>Prénom</p>
          </Grid>
          <Grid item xs={12}>
            <p>Email</p>
          </Grid>
          <Grid item xs={12}>
            <p>Entreprise</p>
          </Grid>
          <Grid item xs={12}>
            <p>Tel</p>
          </Grid>
          <Grid item xs={12}>
            <p>Factures</p>
          </Grid>
          <Grid item xs={12}>
            <p>Devis</p>
          </Grid>
          <Grid item xs={12}>
            <p>Rendez-vous</p>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default clientProfil;
