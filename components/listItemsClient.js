import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import Link from "next/link";
import Tooltip from "@material-ui/core/Tooltip";
import DateRangeIcon from '@material-ui/icons/DateRange';
import GetAppIcon from '@material-ui/icons/GetApp';
import ToggleMenu from '../components/Togglemenu/ToggleMenu';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import { logout } from '../utils/auth';

export const mainListItemsClient = (
    <div>
        <Link href="/DashboardClient">
            <Tooltip title="Projets" placement="right">
                <ListItem button style={{padding:'3vh'}}>
                    <ListItemIcon>
                        <DashboardIcon style={{fill: '#106B9C'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Projets"/>
                </ListItem>
            </Tooltip>
        </Link>
        <Link href="/#">
            <Tooltip title="Agenda" placement="right">
                <ListItem button style={{padding:'3vh'}}>
                    <ListItemIcon>
                        <EventAvailableIcon style={{fill: '#209c99'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Agenda"/>
                </ListItem>
            </Tooltip>
        </Link>

        <div style={{marginTop: '63vh'}} onClick={() => logout()}>
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
