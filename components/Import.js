import React, { useState } from "react";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ArchiveIcon from "@material-ui/icons/Archive";
import Button from "@material-ui/core/Button";
import secondaryListItems from "../components/listItems";
import ReactFileReader from "react-file-reader";
import PublishIcon from "@material-ui/icons/Publish";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
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
  }
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(7);
  const [showMenuCsv, setShowMenuCsv] = useState(true);
  const [showCsv, setShowCsv] = useState(false);
  const [csvData, setCsvData] = useState([]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const handleCloseCsv = () => {
    setShowCsv(false);
  };

  const handleFiles = files => {
    const reader = new FileReader();
    reader.onload = function(e) {
      // Use reader.result
      let csvResult = reader.result;
      let ar = csvResult.split("\n");
      delete ar[0];
      setCsvData(ar);
      console.log("ar", ar[1].split(",")[1]);
      // console.log("ar", ar);
      setShowCsv(true);
    };
    reader.readAsText(files[0]);
  };

  const handleMenuCsv = () => {
    setShowMenuCsv(false);
  };

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <React.Fragment>
          <Container maxWidth="lg">
            <div className={classes.root}>
              <div style={{ padding: "5px" }}>
                <h1 style={{ color: "#19857b" }}>
                  Import fichier .csv ou Json
                </h1>
              </div>

              <Grid container>
                <Grid item xs={12}>
                  <Paper>
                    <br />
                    <h3 align="center">
                      Cliquer sur Importer un fichier ou Glissez déposer le
                      fichier dans la zone <strong> ci-dessous</strong>
                    </h3>
                    <br />
                    <Grid container>
                      <Grid item sm={12} style={{ padding: "10px" }}>
                        <div align="center">
                          <div style={{ height: "250px" }}>
                            {" "}
                            <ReactFileReader
                              handleFiles={handleFiles}
                              fileTypes={".csv"}
                            >
                              <Button variant="contained" color="primary">
                                <PublishIcon />
                                Import CSV
                              </Button>
                            </ReactFileReader>
                            <br />
                            <div align="center">
                              <ArchiveIcon
                                style={{ fontSize: "200px", opacity: "0.2" }}
                              />
                            </div>
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>

              {showCsv && (
                <div style={{ marginTop: "30px" }}>
                  <Grid container direction="row" alignItems="center">
                    <Grid item xs={12}>
                      <h3 style={{ textAlign: "center" }}>Contenu du CSV</h3>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8} style={{ marginTop: "20px" }}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell align="center">
                              <h3>Prénom</h3>
                            </TableCell>
                            <TableCell align="center">
                              <h3>Nom</h3>
                            </TableCell>
                            <TableCell align="center">
                              <h3>Email</h3>
                            </TableCell>
                          </TableRow>
                        </TableHead>

                        <TableBody style={{ backgroundColor: "#e8f5e9" }}>
                          {csvData
                            .slice(
                              page * rowsPerPage,
                              page * rowsPerPage + rowsPerPage
                            )
                            .map(user => (
                              <TableRow>
                                <TableCell
                                  align="center"
                                  //   component={Link}
                                  style={{ textDecoration: "none" }}
                                >
                                  <h6>{user.split(",")[1]}</h6>
                                </TableCell>
                                <TableCell
                                  align="center"
                                  //   component={Link}
                                  style={{ textDecoration: "none" }}
                                  id={user.id}
                                >
                                  <h6>{user.split(",")[2]}</h6>
                                </TableCell>
                                <TableCell
                                  align="center"
                                  //   component={Link}
                                  style={{ textDecoration: "none" }}
                                >
                                  <h6>{user.split(",")[3]}</h6>
                                </TableCell>
                              </TableRow>
                            ))}
                        </TableBody>
                      </Table>
                    </Grid>
                    <Grid item xs={2}></Grid>
                  </Grid>

                  <Grid container direction="row" alignItems="center">
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid
                      item
                      xs={2}
                      style={{ textAlign: "center", marginTop: "20px" }}
                    >
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "#2e7d32", color: "white" }}
                        // onClick={handleAddCsv}
                      >
                        <CheckCircleIcon /> Valider CSV
                      </Button>
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      style={{ textAlign: "center", marginTop: "20px" }}
                    >
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "#d32f2f", color: "white" }}
                        // onClick={handleCloseCsv}
                      >
                        <CancelPresentationIcon /> Annuler
                      </Button>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                  </Grid>
                </div>
              )}
            </div>
          </Container>
        </React.Fragment>
      </Container>
    </main>
  );
}
