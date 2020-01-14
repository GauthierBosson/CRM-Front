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

export default function SimpleTable() {
    const classes = useStyles();

    return (
        <div>
        <TableContainer component={Paper}  style={{borderLeft:'solid 3px #58877B'}}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Entreprise</TableCell>
                        <TableCell align="right">Contact</TableCell>
                        <TableCell align="right">Responsable</TableCell>
                        <TableCell align="right">Options</TableCell>


                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right"><Button href="/clientProfil" color="primary">
                                Voir plus
                            </Button>
                                <Button><DeleteForeverIcon style={{fill:'#CF2C29'}} /></Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
}
