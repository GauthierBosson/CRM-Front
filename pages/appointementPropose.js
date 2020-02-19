import React from 'react';
import 'date-fns';
import nextCookie from 'next-cookies';
import jwtDecode from 'jwt-decode';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';

import AppointementProposeComponent from '../components/AppointementProposeComponent';
import clientsServices from '../utils/clientsServices';
import appointementsServices from '../utils/appointementsServices';

function AppointementPropose(props) {
  const [selectedBeginDate, setSelectedBeginDate] = React.useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = React.useState(new Date());

  const handleBeginDateChange = date => {
    setSelectedBeginDate(date);
  };

  const handleEndDateChange = date => {
    setSelectedEndDate(date);
  };

  return(
    <>
      <h1>Proposer un RDV à {props.clientInfos.firstname}</h1>
      <AppointementProposeComponent 
        clientInfos={props.clientInfos} 
        userId={props.userId}
        clientAppointements={props.clientAppointements}
        userAppointements={props.userAppointements}
      />
      {/*<MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            value={selectedBeginDate}
            onChange={handleBeginDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={selectedBeginDate}
            onChange={handleBeginDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={selectedEndDate}
            onChange={handleEndDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </Grid>
          </MuiPickersUtilsProvider>*/}
    </>
  )
}

AppointementPropose.getInitialProps = async ctx => {
  const { id } = ctx.query;
  const { token } = nextCookie(ctx);
  const decoded = jwtDecode(token);
  const infos = await clientsServices.getClient(id, ctx);
  const clientAppointements = await appointementsServices.getAppointementByUserId(id, ctx);
  const userAppointements = await appointementsServices.getAppointementByUserId(decoded.id, ctx)

  return { 
    clientInfos: infos.data.doc,
    userId: decoded.id,
    clientAppointements: clientAppointements.data.data,
    userAppointements: userAppointements.data.data
  }
}

export default AppointementPropose;
