import React, { useState } from 'react';
import Router from 'next/router';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import clientsServices from '../utils/clientsServices';
import companiesServices from '../utils/companiesServices';

function addClient(props) {
  const [formInfos, setFormInfos] = useState({
    email: '',
    firstname: '',
    lastname: '',
    company: '',
    phone: '',
    country: '',
    state: '',
    city: '',
    zip_code: '',
    street: ''
  })

  const handleSubmit = async event => {
    event.preventDefault();

    const infos = {
      email: formInfos.email,
      firstname: formInfos.firstname,
      lastname: formInfos.lastname,
      company: formInfos.company,
      phone: formInfos.phone,
      address : {
        country: formInfos.country,
        state: formInfos.state,
        city: formInfos.city,
        zip_code: formInfos.zip_code,
        street: formInfos.street
      }
    }

    try {
      const response = await clientsServices.addClient(infos);
      
      Router.push(`/clientProfil?id=${response._id}`)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ width: 300 }}>
      <Autocomplete
        id="company"
        freeSolo
        disableClearable={true}
        disableCloseOnSelect={true}
        options={props.companiesList.map(company => company.name)}
        onChange={(event, value) => {
          setFormInfos(
            Object.assign({}, formInfos, { company: value })
          )
        }}
        renderInput={params => (
          <TextField 
            {...params} 
            label="Entreprise" 
            margin="normal" 
            variant="outlined" 
            onChange={(event) => {
              setFormInfos(
                Object.assign({}, formInfos, { company: event.target.value })
              )
            }}
            fullWidth 
          />
        )}
      />
    </div>
      <label htmlFor="email">Email</label>
      <input 
        id="email" 
        type="email" 
        onChange={event => {
          setFormInfos(
            Object.assign({}, formInfos, { email: event.target.value })
          )
        }}
      />

      <label htmlFor="firstname">Prénom</label>
      <input 
        id="firstname" 
        type="text" 
        onChange={event => {
          setFormInfos(
            Object.assign({}, formInfos, { firstname: event.target.value })
          )
        }}
      />

      <label htmlFor="lastname">Nom</label>
      <input 
        id="lastname" 
        type="text" 
        onChange={event => {
          setFormInfos(
            Object.assign({}, formInfos, { lastname: event.target.value })
          )
        }}
      />

      <label htmlFor="phone">Téléphone</label>
      <input 
        id="phone" 
        type="text" 
        onChange={event => {
          setFormInfos(
            Object.assign({}, formInfos, { phone: event.target.value })
          )
        }}
      />

      <label htmlFor="country">Pays</label>
      <input 
        id="country" 
        type="text" 
        onChange={event => {
          setFormInfos(
            Object.assign({}, formInfos, { country: event.target.value })
          )
        }}
      />

      <label htmlFor="state">Région</label>
      <input 
        id="state" 
        type="text" 
        onChange={event => {
          setFormInfos(
            Object.assign({}, formInfos, { state: event.target.value })
          )
        }}
      />

      <label htmlFor="city">Ville</label>
      <input 
        id="city" 
        type="text" 
        onChange={event => {
          setFormInfos(
            Object.assign({}, formInfos, { city: event.target.value })
          )
        }}
      />

      <label htmlFor="zip_code">Code zip</label>
      <input 
        id="zip_code" 
        type="number" 
        onChange={event => {
          setFormInfos(
            Object.assign({}, formInfos, { zip_code: parseInt(event.target.value) })
          )
        }}
      />

      <label htmlFor="street">Rue</label>
      <input 
        id="street" 
        type="text" 
        onChange={event => {
          setFormInfos(
            Object.assign({}, formInfos, { street: event.target.value })
          )
        }}
      />

      <input type="submit" value="valider" />
    </form>
  )
}

addClient.getInitialProps = async ctx => {
  const companiesList = await companiesServices.getCompanies(ctx);

  return { companiesList: companiesList.data.data };
}

export default addClient;
