import React from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';

import clientsServices from '../utils/clientsServices';

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
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
      </MuiPickersUtilsProvider>
    </>
  )
}

AppointementPropose.getInitialProps = async ctx => {
  const { id } = ctx.query;
  const infos = await clientsServices.getClient(id, ctx);

  return { clientInfos: infos.data.doc }
}

export default AppointementPropose;
