import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Tooltip from "@material-ui/core/Tooltip";
import { ThemeProvider } from '@material-ui/core/styles';
import Link from 'next/link';
const theme = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('José Massonnerie', 159, 6.0, 24, 4.0),
    createData('Mc Donalds', 237, 9.0, 37, 4.3),
    createData('Lemoineau & Co', 262, 16.0, 24, 6.0),
    createData('KapoupaKap', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),

];

export default function SimpleTable(props) {
    const classes = useStyles();

    return (
        <div>
        <TableContainer component={Paper}  style={{borderLeft:'solid 3px #58877B'}}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Nom</TableCell>
                        <TableCell align="right">Entreprise</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Téléphone</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.clientsList.map((client, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {client.firstname}
                            </TableCell>
                            <TableCell align="right">{client.company.name}</TableCell>
                            <TableCell align="right">{client.email}</TableCell>
                            <TableCell align="right">{client.phone}</TableCell>
                            <ThemeProvider theme={theme}>

                            <TableCell align="center">
                                <Tooltip title="Voir Plus" placement="bottom">
                                    <Link href={`/clientProfil?id=${client._id}`}>
                                        <Button color="primary">
                                            <VisibilityIcon />
                                        </Button>
                                    </Link>
                                </Tooltip>
                                <Tooltip title="Delete" placement="bottom">
                                    <Button><DeleteForeverIcon style={{fill:'#CF2C29'}} /></Button></Tooltip>
                                </TableCell>
                            </ThemeProvider>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

        </div>



    );
}
