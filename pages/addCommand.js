import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {mainListItems} from '../components/listItems';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Link from 'next/link';
import Router from 'next/router';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { FieldArray, Form, Formik, Field } from 'formik';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import { withAuthSync } from '../utils/auth';

import projectsServices from '../utils/projectsServices';
import prestationsServices from '../utils/prestationsServices';
import commandsServices from '../utils/commandsServices';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
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

function AddCommand(props) {
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
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        <strong>Ajout facture</strong>
                    </Typography>

                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon} style={{backgroundColor: '#F1F1F1'}}>

                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </div>
                <Divider/>
                <List style={{backgroundColor: '#F1F1F1'}}>{mainListItems}</List>
                <Divider/>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <Container maxWidth="false" className={classes.container}>
                    <Paper style={{padding:"30px", borderLeft:'solid 2px darkgreen'}}>
                    <h1>Ajouter une facture</h1>
      <Formik 
        initialValues={{
          name: '',
          project: props.projectDetails._id,
          prestations: [
            {
              prestation: '',
              price: '',
              quantity: 1
            }
          ],
          dueDate: new Date(),
          total: 0
        }}
        onSubmit={async values => {
          values.prestations.forEach(prestation => {
            values.total = values.total + (prestation.price * prestation.quantity)
          })
          try {
            const response = await commandsServices.addCommand(values);
            Router.push(`/projectDetails?id=${props.projectDetails._id}`);
          } catch(error) {
            console.log(error)
          }
        }}
      >
        {formikProps => (
          <Form>
            <TextField
              id="standard-name"
              label="Nom de la facture"
              name="name"
              value={formikProps.values.name}
              onChange={formikProps.handleChange}
              margin="normal"
            />
            <FieldArray 
              name="prestations"
              render={arrayHelpers => (
                <div>
                  {formikProps.values.prestations && formikProps.values.prestations.length > 0 ? (
                    formikProps.values.prestations.map((prestation, index) => (
                      <div key={index}>
                        <Field name={`prestations.${index}.prestation`}>
                          {({ field, form, meta }) => (
                              <FormControl className={classes.formControl}>
                                <InputLabel id={`prestation${index}`}>Prestation</InputLabel>
                                <Select
                                  labelId={`prestation${index}`}
                                  id={`prestation${index}`}
                                  value={formikProps.values.prestations[index].prestation}
                                  onChange={formikProps.handleChange}
                                  name={field.name}
                                >
                                  {props.prestations.map((prestation, index) => {
                                    return <MenuItem key={index} value={prestation._id}>{prestation.name}</MenuItem>
                                  })}
                                </Select>
                              </FormControl>
                          )}
                        </Field>
                        <Field name={`prestations.${index}.price`}>
                          {({ field, form, meta }) => (
                            <FormControl className={classes.formControl}>
                              <InputLabel htmlFor={`prestation-price${index}`}>Prix</InputLabel>
                              <Input
                                id={`prestation-price${index}`}
                                type="number"
                                name={field.name}
                                value={formikProps.values.prestations[index].price}
                                onChange={formikProps.handleChange}
                                startAdornment={<InputAdornment position="start">€</InputAdornment>}
                              />
                            </FormControl>
                          )}
                        </Field>
                        <Field name={`prestations.${index}.quantity`}>
                          {({ field, form, meta }) => (
                            <FormControl className={classes.formControl}>
                              <InputLabel htmlFor={`prestation-quantity${index}`}>Quantité</InputLabel>
                              <Input 
                                id={`prestation-quantity${index}`}
                                type="number"
                                name={field.name}
                                value={formikProps.values.prestations[index].quantity}
                                onChange={formikProps.handleChange}
                              />
                            </FormControl>
                          )}
                        </Field>
                        <Button type="button" variant="contained" onClick={() => arrayHelpers.remove(index)}>-</Button>
                      </div>
                    ))
                  ): null}
                <Button type="button" variant="contained" onClick={() => arrayHelpers.push({ prestation: '', price: '' })}>+</Button>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="dueDate"
                    name="dueDate"
                    minDate={new Date()}
                    label="Echéance pour paiement"
                    value={formikProps.values.dueDate}
                    onChange={value => {
                      formikProps.setFieldValue('dueDate', value);
                    }}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </MuiPickersUtilsProvider>
            </div>
          )}
        />
        <Button type="submit" variant="contained" color="primary">Valider</Button>
      </Form>
        )}
      </Formik>
                    </Paper>
                    </Container>
            </main>
        </div>
    );
}

AddCommand.getInitialProps = async ctx => {
  const { id } = ctx.query;
  
  const projectDetails = await projectsServices.getProject(id, ctx);
  const prestations = await prestationsServices.getPrestations(ctx);

  return { 
    projectDetails: projectDetails.data.doc,
    prestations: prestations.data.data
   }
}

export default withAuthSync(AddCommand, ['admin', 'employee'])
