import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Input} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import Tooltip from '@material-ui/core/Tooltip';

import categoriesServices from '../utils/categoriesServices';





const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: '#19857b',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

function createData(name) {
    return { name };
}

const rows = [
    createData('Tertiaire'),
    createData('Primaire'),
    createData('Secondaire'),
    createData('Agro-alimentaire'),

];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function Categories(props) {
    const classes = useStyles();

    const [newCategory, setNewCategory] = useState('')
    const [categories, setCategories] = useState(props.categories)

    async function addCategory() {
        const response = await categoriesServices.addCategory({name: newCategory});
        setCategories(
            [
                ...categories,
                response.data.doc
            ]
        )
        setNewCategory(
            ''
        )
    }

    return (
        <div>
            <h1 style={{color:'#19857b'}}>Liste des catégories</h1>

            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Nom de catégorie</StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {categories.map(category => (
                        <StyledTableRow key={category.name}>
                            <StyledTableCell component="th" scope="row">
                                <strong>{category.name}</strong>
                            </StyledTableCell>
                            <StyledTableCell></StyledTableCell>


                        </StyledTableRow>
                    ))}
                    <StyledTableRow><StyledTableCell><Input onChange={event => setNewCategory(event.target.value)} value={newCategory} placeholder="Ajouter une catégorie"></Input></StyledTableCell>
                        <StyledTableCell align="right"><Tooltip title="Ajouter" placement="bottom"  ><Button onClick={() => addCategory()} style={{color:'#269a9c'}}><PlaylistAddIcon style={{fontSize:'30px'}}/></Button></Tooltip></StyledTableCell>
                    </StyledTableRow>
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
}
