import React from 'react';
import Menu from '@material-ui/core/Menu';
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
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

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
            <Tooltip title="Voir plus" placement="right">
            <ListItem button aria-controls="simple-menu" aria-haspopup="true" style={{padding:'3vh'}} onClick={handleClick}>
                <ListItemIcon align="left">
                    <MoreHorizIcon color="primary"/>
                </ListItemIcon>
                <ListItemText primary="Plus"/>
            </ListItem>
            </Tooltip>

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
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
            </Menu>
        </div>
    );
}
