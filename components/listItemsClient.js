import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Link from "next/link";
import Tooltip from "@material-ui/core/Tooltip";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import { logout } from '../utils/auth';

export const mainListItemsClient = (
    <div>
        <Link href="/dashboardClient">
            <Tooltip title="Dashboard" placement="right">
                <ListItem button >
                    <ListItemIcon>
                        <DashboardIcon align="center" style={{fill: '#16939c'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Projets"/>
                </ListItem>
            </Tooltip>
        </Link>
        <Link href="/agendaClient">
            <Tooltip title="Agenda" placement="right">
                <ListItem button >
                    <ListItemIcon>
                        <EventAvailableIcon style={{fill: '#9c3f4e'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Agenda"/>
                </ListItem>
            </Tooltip>
        </Link>

        <div style={{marginTop: '42rem'}} onClick={() => logout()}>
            <Tooltip title="Déconnexion" placement="right">
                <ListItem button style={{padding: '3vh'}}>
                    <ListItemIcon>
                        <ExitToAppIcon style={{fill:'#2e2e2e'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Déconnexion"/>
                </ListItem>
            </Tooltip>
        </div>

    </div>
);