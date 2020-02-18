import Button from "@material-ui/core/Button";
import ModifClientsModal from "../components/modal/modalModifDetailsClients/ModifClientsModal";
import React, { useState, Fragment, useEffect } from "react";
import Link from "next/link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ReceiptIcon from "@material-ui/icons/Receipt";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import BusinessIcon from "@material-ui/icons/Business";
import TextField from "@material-ui/core/TextField";
import clientsServices from "../utils/clientsServices";

const clientProfil = props => {
  const [showInfos, setShowInfos] = useState(true);
  const [showInput, setShowInput] = useState(false);
  const [bigInput, setBigInput] = useState({
    email: "",
    firstname: "",
    lastname: "",
    phone: ""
  });

  const [client, setClient] = useState({
    email: props.clientInfos.email,
    email: props.clientInfos.lastname,

    email: props.clientInfos.firstname,
    email: props.clientInfos.phone
  });

  const updateUser = client => {
    console.log(client);
    clientsServices
      .updateClient(client, bigInput)
      .then(c => {
        setClient(c.data.doc);
        // handleClose();
        setShowInput(false);
        setShowInfos(true);
        console.log(c);
      })
      .catch(() => {
        new Error("Impossible de mettre à jour l'utilisateur");
      });
  };

  const handleInput = () => {
    setShowInfos(false);
    setShowInput(true);
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper style={{ padding: "10px", borderLeft: "solid 3px #4ECC90" }}>
            <h3
              style={{
                fontSize: "24px",
                borderLeft: "solid 3px #4ECC90",
                padding: "10px",
                marginLeft: "20px"
              }}
              align="left"
            >
              Coordonnées{" "}
              <AccountCircleIcon
                style={{ fill: "#24a2a3", fontSize: "30px", marginLeft: "5px" }}
              />
            </h3>
            {showInfos && (
              <p style={{ marginLeft: "7px", fontSize: "15px" }}>
                Nom/Prénom : {client.lastname} {props.clientInfos.firstname}
                <br />
                Adresse Complète :{client.adress}
                <br />
                E-mail : {client.email}
                <br />
                Tel : {client.phone}
              </p>
            )}

            <Button
              variant="contained"
              color="primary"
              disableElevation
              onClick={handleInput}
            >
              Update Clients
            </Button>

            {showInput && (
              <Fragment>
                <TextField
                  variant="filled"
                  margin="normal"
                  fullWidth
                  name="firstname"
                  label="firstname"
                  id="firstname"
                  autoComplete="current-password"
                  onChange={event => {
                    setBigInput(
                      Object.assign({}, bigInput, {
                        firstname: event.target.value
                      })
                    );
                  }}
                />
                <TextField
                  variant="filled"
                  margin="normal"
                  fullWidth
                  name="lastname"
                  label="lastname"
                  id="lastname"
                  autoComplete="current-password"
                  onChange={event => {
                    setBigInput(
                      Object.assign({}, bigInput, {
                        lastname: event.target.value
                      })
                    );
                  }}
                />
                <TextField
                  variant="filled"
                  margin="normal"
                  fullWidth
                  name="email"
                  label="email"
                  id="email"
                  autoComplete="current-password"
                  onChange={event => {
                    setBigInput(
                      Object.assign({}, bigInput, { email: event.target.value })
                    );
                  }}
                />
                <TextField
                  variant="filled"
                  margin="normal"
                  fullWidth
                  name="phone"
                  label="phone"
                  id="phone"
                  autoComplete="current-password"
                  onChange={event => {
                    setBigInput(
                      Object.assign({}, bigInput, { phone: event.target.value })
                    );
                  }}
                />

                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  onClick={() => updateUser(props.clientInfos._id)}
                >
                  Update Clients
                </Button>
              </Fragment>
            )}

            <div style={{ padding: "6px" }}>
              <h3
                style={{
                  fontSize: "24px",
                  borderLeft: "solid 3px #4ECC90",
                  padding: "10px",
                  marginLeft: "20px"
                }}
                align="left"
              >
                Coordonnées d'entreprise{" "}
                <BusinessIcon
                  style={{
                    fill: "#248485",
                    fontSize: "30px",
                    marginLeft: "7px"
                  }}
                />
              </h3>

              <p style={{ marginLeft: "5px", fontSize: "15px" }}>
                Nom d'entreprise : <br />
                Tel :
                <br />
                Adresse Complète :
                <br />
                Dirigeant :
                <br />
                SIRET :
                <br />
                Catégorie Activité :
                <br />
              </p>
              <div align="right">
                <ModifClientsModal />
              </div>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={4} align="left">
          <Button variant="contained" color="primary" disableElevation>
            Envoyer un mail <MailOutlineIcon style={{ marginLeft: "6px" }} />
          </Button>
        </Grid>
        <Grid item xs={4} align="left">
          <Button variant="contained" color="primary" disableElevation>
            Voir Devis
            <ReceiptIcon style={{ marginLeft: "6px" }} />
          </Button>
        </Grid>
        <Grid item xs={4} align="left">
          <Link href={`/appointementPropose?id=${props.clientInfos._id}`}>
            <Button variant="contained" color="primary" disableElevation>
              Proposer RDV
              <ReceiptIcon style={{ marginLeft: "6px" }} />
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default clientProfil;
