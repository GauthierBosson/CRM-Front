import React from 'react';
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

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function AddCommand(props) {
  const classes = useStyles();

  return (
    <>
      <h1>Ajouter une commande</h1>
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
    </>
  )
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
