import React from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

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
  const [command, setCommand] = React.useState({ 
    project: props.projectDetails._id,
    prestation: [
      {
        prestation: '', 
        price: ''
      }
    ]
  });

  const handleChange = event => {
    setCommand(
      Object.assign({}, command, { prestations: [{prestations:{prestation: event.target.value} }]})
    );
  };

  const handlePriceChange = event => {
    setCommand(
      Object.assign({}, command, { price: event.target.value })
    )
  }

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await commandsServices.addCommand(command)
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Ajouter une commande</h1>
      <form onSubmit={handleSubmit}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Prestation</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={command.prestation}
            onChange={handleChange}
          >
            {props.prestations.map(prestation => {
              return <MenuItem value={prestation._id}>{prestation.name}</MenuItem>
            })}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="standard-adornment-amount">Prix</InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              value={command.price}
              onChange={handlePriceChange}
              startAdornment={<InputAdornment position="start">€</InputAdornment>}
            />
        </FormControl>
        <Button type="submit" variant="contained" color="primary">Valider</Button>
      </form>
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

export default AddCommand
