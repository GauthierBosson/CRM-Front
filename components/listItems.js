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
export const mainListItems = (
  <div>
    <Link href="/homes">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon style={{fill: '#106B9C'}} />
        </ListItemIcon>
        <ListItemText primary="Accueil" />
      </ListItem>
    </Link>

    <Link href="/prospect">
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon style={{fill: '#106B9C'}}/>
        </ListItemIcon>
        <ListItemText primary="Prospect" />
      </ListItem>
    </Link>

    <Link href="/clientProfil">
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon style={{fill: '#106B9C'}}/>
        </ListItemIcon>
        <ListItemText primary="Clients" />
      </ListItem>
    </Link>
    <Link href="/agenda">
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon style={{fill: '#106B9C'}}/>
        </ListItemIcon>
        <ListItemText primary="Agenda" />
      </ListItem>
    </Link>

    <Link href="/import">
      <ListItem button>
        <ListItemIcon>
          <LayersIcon style={{fill: '#106B9C'}}/>
        </ListItemIcon>
        <ListItemText primary="Imports" />
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset><h3>Rapports</h3></ListSubheader>
    <Link href="/bill">
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon style={{fill:'#384A6E'}}/>
        </ListItemIcon>
        <ListItemText primary="Factures" />
      </ListItem>
    </Link>
    <Link href="/quoteHistory">
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon style={{fill:'#384A6E'}}/>
        </ListItemIcon>
        <ListItemText primary="Devis" />
      </ListItem>
    </Link>
    <Link href="/category">
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon style={{fill:'#384A6E'}}/>
        </ListItemIcon>
        <ListItemText primary="Categories" />
      </ListItem>
    </Link>

    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon style={{fill:'#384A6E'}} />
      </ListItemIcon>
      <ListItemText primary="Mentions légales" />
    </ListItem>
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
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon style={{fill:'#384A6E'}}/>
      </ListItemIcon>
      <ListItemText primary="Historique" />
    </ListItem>
  </div>
);
