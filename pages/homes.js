import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { mainListItems } from "../components/listItems";
import Deposits from "../components/Deposits";
import Orders from "../components/Orders";
import MessageIcon from "@material-ui/icons/Message";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import AddAlertIcon from "@material-ui/icons/AddAlert";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import Title from "../components/Title";
import Button from "@material-ui/core/Button";
import VisibilityIcon from "@material-ui/icons/Visibility";

import nextCookie from 'next-cookies';
import { withAuthSync } from '../utils/auth';

// TESTING PURPOSE
import categoriesServices from '../utils/categoriesServices';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    borderColor: theme.palette.primary
  },
  fixedHeight: {
    height: 100,
    textDecoration: "none",
    transition: "0.5",

    "&:hover": {
      /*backgroundImage: "url(" + "https://cdn.pixabay.com/photo/2018/03/15/08/54/grid-3227459_1280.jpg" + ")", */
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      borderBottom: "solid 3px #248485",
      overflow: "hidden"
    }
  }
}));

function Dashboard() {
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
    <div className={classes.root} style={{ backgroundColor: "transparent" }}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            <strong>Accueil</strong>
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Badge color="secondary">
              <MessageIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth={false} className={classes.container}>
          <Grid container spacing={2}>
            {/* Chart */}
            <Grid item xs={12} md={4} lg={3}>
              <Link href="/listClient" style={{ textDecoration: "none" }}>
                <Paper
                  className={fixedHeightPaper}
                  style={{ borderLeft: "solid 3px #248485" }}
                >
                  <Grid container>
                    <Grid item xs={6} style={{ marginTop: "8px" }}>
                      <Box justifyContent="center" style={{ display: "flex" }}>
                        <Badge color="secondary">
                          <PeopleAltIcon
                            style={{
                              fontSize: "3rem",
                              marginTop: "6px",
                              fill: "#248485"
                            }}
                          />
                        </Badge>
                      </Box>
                    </Grid>
                    <Grid item xs={6} style={{ marginTop: "8px" }}>
                      <Box justifyContent="center" style={{ display: "flex" }}>
                        <h3>
                          <strong>Clients</strong>
                        </h3>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </Link>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Link href="/prospect" style={{ textDecoration: "none" }}>
                <Paper
                  className={fixedHeightPaper}
                  style={{ borderLeft: "solid 3px #FFB27A" }}
                >
                  <Grid container>
                    <Grid item xs={6} style={{ marginTop: "8px" }}>
                      <Box justifyContent="center" style={{ display: "flex" }}>
                        <Badge color="secondary">
                          <SupervisedUserCircleIcon
                            style={{
                              fontSize: "3rem",
                              marginTop: "6px",
                              fill: "#FFB27A"
                            }}
                          />
                        </Badge>
                      </Box>
                    </Grid>
                    <Grid item xs={6} style={{ marginTop: "8px" }}>
                      <Box justifyContent="center" style={{ display: "flex" }}>
                        <h3>Prospect</h3>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </Link>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Link href="/mail" style={{ textDecoration: "none" }}>
                <Paper
                  className={fixedHeightPaper}
                  style={{ borderLeft: "solid 3px #4EA4CC" }}
                >
                  <Grid container>
                    <Grid item xs={6} style={{ marginTop: "8px" }}>
                      <Box justifyContent="center" style={{ display: "flex" }}>
                        <Badge color="secondary">
                          <MailOutlineIcon
                            style={{
                              fontSize: "3rem",
                              marginTop: "6px",
                              fill: "#4EA4CC"
                            }}
                          />
                        </Badge>
                      </Box>
                    </Grid>
                    <Grid item xs={6} style={{ marginTop: "8px" }}>
                      <Box justifyContent="center" style={{ display: "flex" }}>
                        <h3>Emails</h3>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </Link>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Link href="/" style={{ textDecoration: "none" }}>
                <Paper
                  className={fixedHeightPaper}
                  style={{ borderLeft: "solid 3px #CF2C29" }}
                >
                  <Grid container>
                    <Grid item xs={6} style={{ marginTop: "10px" }}>
                      <Box justifyContent="center" style={{ display: "flex" }}>
                          <PeopleAltIcon
                            style={{ fontSize: "3rem", marginTop: "6px" }}
                          />
                      </Box>
                    </Grid>
                    <Grid item xs={6} style={{ marginTop: "10px" }}>
                      <Box justifyContent="center" style={{ display: "flex" }}>
                        <h3>Utilisateurs</h3>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </Link>
            </Grid>

            {/* Recent Orders */}
            <Grid item xs={12} md={8} lg={6}>
              <Paper
                className={classes.paper}
                style={{ borderLeft: "solid 3px #248485" }}
              >
                <Orders />
                <Button color="secondary" style={{ marginTop: "10px" }}>
                  Voir Plus <VisibilityIcon style={{ marginLeft: "6px" }} />
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} md={8} lg={6}>
              <Paper
                className={classes.paper}
                style={{ borderLeft: "solid 3px #E86B56" }}
              >
                <Title>Calendrier</Title>
              </Paper>
            </Grid>
            <Grid item xs={12} md={8} lg={2}>
              <Paper
                className={classes.paper}
                style={{ borderLeft: "solid 3px #248485" }}
              >
                <Deposits />
              </Paper>
            </Grid>
            <Grid item xs={12} md={8} lg={10}>

            </Grid>
          </Grid>
        </Container>
      </main>
    </div>


  );
}

Dashboard.getInitialProps = async ctx => {
  const test = await categoriesServices.getCategories(ctx);

  return test;
}

export default withAuthSync(Dashboard, ['employee', 'admin']);

