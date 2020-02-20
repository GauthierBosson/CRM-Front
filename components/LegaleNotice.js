import React from "react";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ArchiveIcon from "@material-ui/icons/Archive";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
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

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="false" className={classes.container}>
        <React.Fragment>
          <Container maxWidth="false">
            <div className={classes.root}>
              <div style={{ padding: "5px" }}>
                <h1 style={{ color: "#19857b" }}>
                  Mentions Légales de l'application
                </h1>
              </div>
              <Grid container>
                <Grid item xs={12}>
                  <Paper>
                    <br />
                    <br />
                    <Grid container>
                      <Grid item sm={12} style={{ padding: "10px" }}>

                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </Container>
        </React.Fragment>
      </Container>
    </main>
  );
}
