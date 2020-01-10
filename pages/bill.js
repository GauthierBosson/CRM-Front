
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/button'
import ArchiveIcon from '@material-ui/icons/Archive';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Box from "@material-ui/core/Box";
import Title from "../components/Title";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (

     <Container maxWidth="lg">
       <div style={{height:'100px'}} ></div>
       <Box justifyContent="center" style={{display:'flex'}}>
         <h2>Factures</h2>
       </Box>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><strong>Nom d'entreprise</strong></TableCell>
              <TableCell align="right"><strong>Date</strong></TableCell>
              <TableCell align="right"><strong>Montant €</strong></TableCell>
              <TableCell  align="center"><strong>Options</strong></TableCell>
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
                  <TableCell align="center"><Button color="secondary">Détails <VisibilityIcon style={{marginLeft:'6px'}} /> </Button>
                    <Button style={{color:'#CF2C29'}}>Archiver <ArchiveIcon style={{marginLeft:'6px'}} /> </Button>
                  </TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
     </Container>
  );
}

