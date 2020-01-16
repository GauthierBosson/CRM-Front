import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DnsIcon from '@material-ui/icons/Dns';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "@material-ui/core/Link";
import Tooltip from "@material-ui/core/Tooltip";
import EuroSymbolIcon from "@material-ui/icons/EuroSymbol";
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import GavelIcon from '@material-ui/icons/Gavel';
import RestoreIcon from '@material-ui/icons/Restore';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div >
            <ListItem button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <ListItemIcon align="left">
                    <DnsIcon color="primary"/>
                </ListItemIcon>
                <ListItemText primary="Plus"/>
            </ListItem>

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <Link href="/bill" onClick={handleClose}>

                        <ListItem button oncli>
                            <ListItemIcon>
                                <EuroSymbolIcon style={{fill:'#cac52e'}}/>
                            </ListItemIcon>
                            <ListItemText primary="Factures" />
                        </ListItem>

                </Link>
                <Link href="/quoteHistory" onClick={handleClose}>

                        <ListItem button>
                            <ListItemIcon>
                                <PlaylistAddCheckIcon style={{fill:'#874ec2'}}/>
                            </ListItemIcon>
                            <ListItemText primary="Devis" />
                        </ListItem>

                </Link>
                <Link href="/category" onClick={handleClose}>

                        <ListItem button>
                            <ListItemIcon>
                                <ChromeReaderModeIcon style={{fill:'#6ba65f'}}/>
                            </ListItemIcon>
                            <ListItemText primary="Categories" />
                        </ListItem>

                </Link>
                <Link href="/legalNotice" onClick={handleClose}>

                        <ListItem button>
                            <ListItemIcon>
                                <GavelIcon style={{fill:'#df8a46'}} />
                            </ListItemIcon>
                            <ListItemText primary="Mentions légales" />
                        </ListItem>

                </Link>
                <Link href="/cgu" onClick={handleClose}>

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

                </Link>
                <Link href="/" onClick={handleClose}>

                        <ListItem button>
                            <ListItemIcon>
                                <RestoreIcon style={{fill:'#0096ba'}}/>
                            </ListItemIcon>
                            <ListItemText primary="Historique" />
                        </ListItem>

                </Link>
                <Link href="/index" onClick={handleClose}>
                        <ListItem button>
                            <ListItemIcon>
                                <ExitToAppIcon style={{fill:'#2e2e2e'}}/>
                            </ListItemIcon>
                            <ListItemText primary="Déconnexion"/>
                        </ListItem>
                </Link>

            </Menu>
        </div>
    );
}
