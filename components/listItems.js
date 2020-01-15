import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import Link from "next/link";
import Tooltip from "@material-ui/core/Tooltip";
import GavelIcon from '@material-ui/icons/Gavel';
import RestoreIcon from '@material-ui/icons/Restore';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import DateRangeIcon from '@material-ui/icons/DateRange';
import GetAppIcon from '@material-ui/icons/GetApp';


export const mainListItems = (
  <div>
    <Link href="/homes">
        <Tooltip title="Accueil"placement="right">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon style={{fill: '#106B9C'}} />
        </ListItemIcon>
        <ListItemText primary="Accueil" />
      </ListItem>
        </Tooltip>
    </Link>
      <Link href="/listClient">
          <Tooltip title="Clients" placement="right">
          <ListItem button>
              <ListItemIcon>
                  <PeopleIcon style={{fill: '#4ECC90'}}/>
              </ListItemIcon>
              <ListItemText primary="Clients" />
          </ListItem>
          </Tooltip>
      </Link>
    <Link href="/prospect">
      <Tooltip title="Prospects" placement="right">
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon style={{fill: '#ffb27a'}}/>
        </ListItemIcon>
        <ListItemText primary="Prospect" />
      </ListItem>
      </Tooltip>
    </Link>


    <Link href="/agenda">
      <Tooltip title="Agenda" placement="right">
      <ListItem button>
        <ListItemIcon>
          <DateRangeIcon style={{fill: '#269a9c'}}/>
        </ListItemIcon>
        <ListItemText primary="Agenda" />
      </ListItem>
      </Tooltip>
    </Link>

    <Link href="/import">
      <Tooltip title="Imports" placement="right">
      <ListItem button>
        <ListItemIcon>
          <GetAppIcon style={{fill: '#9c1061'}}/>
        </ListItemIcon>
        <ListItemText primary="Imports" />
      </ListItem>
      </Tooltip>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <Link href="/bill">
      <Tooltip title="Factures" placement="right">
      <ListItem button>
        <ListItemIcon>
          <EuroSymbolIcon style={{fill:'#cac52e'}}/>
        </ListItemIcon>
        <ListItemText primary="Factures" />
      </ListItem>
      </Tooltip>
    </Link>
    <Link href="/quoteHistory">
      <Tooltip title="Devis" placement="right">
      <ListItem button>
        <ListItemIcon>
          <PlaylistAddCheckIcon style={{fill:'#874ec2'}}/>
        </ListItemIcon>
        <ListItemText primary="Devis" />
      </ListItem>
      </Tooltip>
    </Link>
    <Link href="/category">
      <Tooltip title="Catégories" placement="right">
      <ListItem button>
        <ListItemIcon>
          <ChromeReaderModeIcon style={{fill:'#6ba65f'}}/>
        </ListItemIcon>
        <ListItemText primary="Categories" />
      </ListItem>
      </Tooltip>
    </Link>
      <Link href="/legalNotice">
    <Tooltip title="Mentions légales" placement="right">
    <ListItem button>
      <ListItemIcon>
        <GavelIcon style={{fill:'#df8a46'}} />
      </ListItemIcon>
      <ListItemText primary="Mentions légales" />
    </ListItem>
    </Tooltip>
      </Link>
      <Link href="/cgu">
    <Tooltip title="Conditions d'utilisation" placement="right">
    <ListItem button>
      <ListItemIcon>
        <GavelIcon style={{fill:'#5350ba'}}/>
      </ListItemIcon>
      <ListItemText
        disableTypography={true}
        style={{ fontSize: "15px" }}
        primary="Conditions d'utilisation"
      />
    </ListItem>
    </Tooltip>
      </Link>
      <Link href="/">
    <Tooltip title="Historique" placement="right">
    <ListItem button>
      <ListItemIcon>
        <RestoreIcon style={{fill:'#0096ba'}}/>
      </ListItemIcon>
      <ListItemText primary="Historique" />
    </ListItem>
    </Tooltip>
      </Link>
  </div>
);
