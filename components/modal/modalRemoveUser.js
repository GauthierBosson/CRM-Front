import React, { useState, useEffect, Fragment } from "react";
import Modal from "@material-ui/core/Modal";
import clientsServices from "../../utils/clientsServices";
import Backdrop from "@material-ui/core/Backdrop";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Zoom from "@material-ui/core/Zoom";
import getUsersClients from "../../utils/clientsServices";

const ModalRemove = props => {
  const {
    openRemove,
    currentClient,
    handleClose,
    handleCloseDelete
    // history
  } = props;

  // const [user, setUser] = useState(currentUser);

  const deleteClient = () => {
    console.log("currenrClient", currentClient);
    clientsServices
      .deleteClient(currentClient._id)
      .then(() => {
        handleCloseDelete();
      })
      .catch(() => {
        new Error("Impossible de supprimer l'utilisateur");
      });
  };

  return (
    <Fragment>
      <Modal
        // Modal Delete
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openRemove}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Zoom in={openRemove}>
          <div>
            <h1>
              Voulez-vous supprimer{" "}
              <p>
                {/* {currentClient.first_name && currentClient.last_name}{" "}
                {currentClient && currentClient.first_name} */}
              </p>{" "}
              ?{" "}
            </h1>
            <Grid container justify="space-between">
              <Grid item xs={4}></Grid>
              <Grid item>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={deleteClient}
                >
                  Oui
                </Button>
              </Grid>
              <Grid item>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleCloseDelete}
                >
                  Non
                </Button>
              </Grid>
              <Grid item xs={4}></Grid>
            </Grid>
          </div>
        </Zoom>
      </Modal>
    </Fragment>
  );
};

export default ModalRemove;
