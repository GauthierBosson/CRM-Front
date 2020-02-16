import React from 'react';

import { withAuthSyncClient } from '../utils/authClient';

function DashboardClient() {
  return (
    <h1>Dashboard client</h1>
  )
}

export default withAuthSyncClient(DashboardClient, ['client']);