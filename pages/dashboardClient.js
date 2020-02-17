import React from 'react';
import Button from '@material-ui/core/Button';

import { withAuthSyncClient } from '../utils/authClient';

function DashboardClient() {
  return (
    <>
      <h1>Dashboard client</h1>
      <Button 
        variant="contained" 
        color="primary"
      >
        Mes factures
      </Button>
      <Button 
        variant="contained" 
        color="primary"
      >
        Mes rendez-vous
      </Button>
    </>
  )
}

export default withAuthSyncClient(DashboardClient, ['client']);