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

import { logout } from '../utils/auth';

export const mainListItems = (
    <div>
        <Link href="/homes">
            <Tooltip title="Accueil" placement="right">
                <ListItem button style={{padding:'3vh'}}>
                    <ListItemIcon>
                        <DashboardIcon style={{fill: '#106B9C'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Accueil"/>
                </ListItem>
            </Tooltip>
        </Link>
        <Link href="/listClient">
            <Tooltip title="Clients" placement="right">
                <ListItem button style={{padding:'3vh'}}>
                    <ListItemIcon>
                        <PeopleIcon style={{fill: '#4ECC90'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Clients"/>
                </ListItem>
            </Tooltip>
        </Link>
        <Link href="/prospect">
            <Tooltip title="Prospects" placement="right">
                <ListItem button style={{padding:'3vh'}}>
                    <ListItemIcon>
                        <ShoppingCartIcon style={{fill: '#ffb27a'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Prospect"/>
                </ListItem>
            </Tooltip>
        </Link>


        <Link href="/agenda">
            <Tooltip title="Agenda" placement="right">
                <ListItem button style={{padding:'3vh'}}>
                    <ListItemIcon>
                        <DateRangeIcon style={{fill: '#269a9c'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Agenda"/>
                </ListItem>
            </Tooltip>
        </Link>

        <Link href="/import">
            <Tooltip title="Imports" placement="right">
                <ListItem button style={{padding: '3vh'}}>
                    <ListItemIcon>
                        <GetAppIcon style={{fill: '#9c1061'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Imports"/>
                </ListItem>
            </Tooltip>
        </Link>
        <ToggleMenu />

        <div style={{marginTop: '29%'}} onClick={() => logout()}>
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
