import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Link from "next/link";
import Tooltip from "@material-ui/core/Tooltip";
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
          <BarChartIcon style={{fill: '#106B9C'}}/>
        </ListItemIcon>
        <ListItemText primary="Agenda" />
      </ListItem>
      </Tooltip>
    </Link>

    <Link href="/import">
      <Tooltip title="Imports" placement="right">
      <ListItem button>
        <ListItemIcon>
          <LayersIcon style={{fill: '#106B9C'}}/>
        </ListItemIcon>
        <ListItemText primary="Imports" />
      </ListItem>
      </Tooltip>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset><h3>Rapports</h3></ListSubheader>
    <Link href="/bill">
      <Tooltip title="Factures" placement="right">
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon style={{fill:'#384A6E'}}/>
        </ListItemIcon>
        <ListItemText primary="Factures" />
      </ListItem>
      </Tooltip>
    </Link>
    <Link href="/quoteHistory">
      <Tooltip title="Devis" placement="right">
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon style={{fill:'#384A6E'}}/>
        </ListItemIcon>
        <ListItemText primary="Devis" />
      </ListItem>
      </Tooltip>
    </Link>
    <Link href="/category">
      <Tooltip title="Catégories" placement="right">
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon style={{fill:'#384A6E'}}/>
        </ListItemIcon>
        <ListItemText primary="Categories" />
      </ListItem>
      </Tooltip>
    </Link>
    <Tooltip title="Mentions légales" placement="right">
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon style={{fill:'#384A6E'}} />
      </ListItemIcon>
      <ListItemText primary="Mentions légales" />
    </ListItem>
    </Tooltip>
    <Tooltip title="Conditions d'utilisation" placement="right">
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon style={{fill:'#384A6E'}}/>
      </ListItemIcon>
      <ListItemText
        disableTypography={true}
        style={{ fontSize: "15px" }}
        primary="Conditions d'utilisation"
      />
    </ListItem>
    </Tooltip>
    <Tooltip title="Historique" placement="right">
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon style={{fill:'#384A6E'}}/>
      </ListItemIcon>
      <ListItemText primary="Historique" />
    </ListItem>
    </Tooltip>
  </div>
);
