import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {lighten, makeStyles} from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

function createData(name, calories, fat, carbs, protein) {
    return {name, calories, fat, carbs, protein};
}

const rows = [
    createData('JeanJean & co',21, 3.7, 67),
    createData('Donut Entreprise', 452, 25.0, 51),
    createData('Nfacto Date', 262, 16.0, 24),
    createData('Bonjour & Co', 159, 6.0, 24),
    createData('Campus Saint-Marc', 356, 16.0, 49),
    createData('Mabichette', 408, 3.2, 87),
    createData('RosaParks', 237, 9.0, 37),
    createData('Billy Jean', 375, 0.0, 94),
    createData('KitKatBall Entreprise', 518, 26.0, 65),
    createData('Lollipop', 392, 0.2, 98),
    createData('Marshmallow', 318, 0, 81),
    createData('Nougat', 360, 19.0, 90),
    createData('Oreo', 437, 18.0, 63),
];

function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
    return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const headCells = [
    {id: 'name', numeric: false, disablePadding: true, label: 'Nom entreprise'},
    {id: 'calories', numeric: true, disablePadding: false, label: 'Date'},
    {id: 'fat', numeric: true, disablePadding: false, label: 'Montant €'},
    {id: 'carbs', numeric: true, disablePadding: false, label: ''},

];





const useToolbarStyles = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    title: {
        flex: '1 1 100%',
    },
}));


const EnhancedTableToolbar = props => {
    const classes = useToolbarStyles();
    const {numSelected} = props;

    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            {numSelected > 0 ? (
                <Typography className={classes.title} color="inherit" variant="subtitle1">
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography className={classes.title} variant="h6" id="tableTitle" style={{borderLeft:'solid 3px #4ECC90', padding:'10px'}}>
                   Récapitulatif de paiement

                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton aria-label="delete">
                        <DeleteIcon/>
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton aria-label="filter list">

                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}));

export default function EnhancedTable() {
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(true);
    const [rowsPerPage, setRowsPerPage] = React.useState(7);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = event => {
        if (event.target.checked) {
            const newSelecteds = rows.map(n => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };


    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = event => {
        setDense(event.target.checked);
    };

    const isSelected = name => selected.indexOf(name) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);






    const handleChange = event => {
        handleChangePage(event.target.value);
    };
    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg"  className={classes.container}>
                <React.Fragment>
                    <Container maxWidth="lg" sm="12" md="12">
                        <div className={classes.root}>
                            <Paper  className={classes.paper} style={{borderLeft:'solid 3px #4ECC90',padding:'10px'}}>
                                <EnhancedTableToolbar numSelected={selected.length}/>
                                <br/>


                                <h2 align="center"> <strong>Règlement par : </strong></h2>

                            <div align="center" style={{padding:'10px', backgroundColor:'#F1F1F1'}}>
                                <Checkbox

                                    value="secondary"
                                    color="primary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}

                                />
                                Visa Card
                                <Checkbox

                                    value="secondary"
                                    color="primary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}

                                />
                                Master Card
                                <Checkbox
                                    value="secondary"
                                    color="primary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}

                                />
                                Paypal

                                <h4>Numéro de carte*</h4>
                                <TextField style={{marginTop:'-20px'}} id="standard-basic" label="1234 1234 1234 1234" />
                                <br/>
                                <h4>Date d'expiration*</h4>
                                <Select style={{marginRight:'5px'}}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                        onChange={handleChange}

                                >

                                    <MenuItem >01</MenuItem>
                                    <MenuItem >02</MenuItem>
                                    <MenuItem >03</MenuItem>
                                    <MenuItem >04</MenuItem>
                                    <MenuItem >05</MenuItem>
                                    <MenuItem >06</MenuItem>
                                    <MenuItem >07</MenuItem>
                                    <MenuItem >08</MenuItem>
                                    <MenuItem >09</MenuItem>
                                    <MenuItem >10</MenuItem>
                                    <MenuItem >11</MenuItem>
                                    <MenuItem >12</MenuItem>
                                </Select>
                                <Select style={{width:'70px'}}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    onChange={handleChange}

                                >

                                    <MenuItem >2020</MenuItem>
                                    <MenuItem >2021</MenuItem>
                                    <MenuItem >2022</MenuItem>
                                    <MenuItem >2023</MenuItem>
                                    <MenuItem >2024</MenuItem>
                                    <MenuItem >2025</MenuItem>
                                    <MenuItem >2026</MenuItem>
                                    <MenuItem >2027</MenuItem>
                                    <MenuItem >2028</MenuItem>
                                    <MenuItem >2029</MenuItem>
                                    <MenuItem >2030</MenuItem>
                                    <MenuItem >2031</MenuItem>
                                </Select>
                                <br/>
                                <h4>Code</h4>
                                <TextField style={{marginTop:'-20px'}} id="standard-basic" label="123" />
                                <br/>
                                <br/>
                                <br/>
                                <Button variant="contained" color="success" disableElevation>
                                    Valider
                                </Button>
                                <br/>

                            </div>
                            </Paper>


                        </div>
                    </Container>
                </React.Fragment>
            </Container>
        </main>

    );
}
