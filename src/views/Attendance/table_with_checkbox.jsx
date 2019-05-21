import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import { InputLabel } from '@material-ui/core';
import DatePicker from "react-datepicker";
import NewWindow from 'react-new-window'
import swal from 'sweetalert';

import Button from "components/CustomButtons/Button.jsx";
import InputForm from 'views/Grades/InputForm';
import GridContainer from "components/Grid/GridContainer.jsx";
import moment from 'moment';
function getData(url = ``, data = {}) {
  // Default options are marked with *
  return fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",

      "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    //body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    .then(response => response.json()); // parses response to JSON
}


function postData(url = ``, data = {}) {
  // Default options are marked with *
  return fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",

      "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    .then(response => response.text()); // parses response to JSON
}

let counter = 0;
function createData(name, calories, fat, carbs, protein) {
  counter += 1;
  return { id: counter, name, calories, fat, carbs, protein };
}

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

const rows = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Name of students' },
  // { id: 'calories', numeric: true, disablePadding: false, label: 'Attendance' },
  //{ id: 'fat', numeric: true, disablePadding: false, label: 'Classes' },

];

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {

  };

  render() {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;


    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
          {rows.map(
            row => (
              <TableCell
                key={row.id}
                align={row.numeric ? 'right' : 'left'}
                padding={row.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === row.id ? order : false}
              >
                
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
               
              </TableCell>
            ),
            this,
          )}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,

  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,

  rowCount: PropTypes.number.isRequired,
};

const toolbarStyles = theme => ({

  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 1),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  spacer: {
    flex: '0 0 70%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 70%',
  },
});

let EnhancedTableToolbar = props => {
  const { numSelected, classes } = props;

  return (
    <Toolbar>
      <div className={classes.title}>

        {numSelected > 0 ? (
          <Typography color="inherit" variant="subtitle1">
            {numSelected} selected

          </Typography>
        ) : (
            <Typography variant="h6" style={{ background: "#e3f2fd" }}>
              List of Attendance
          </Typography>
          )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="Delete">

            </IconButton>
          </Tooltip>
        ) : (
            <Tooltip title="Filter list">
              <IconButton aria-label="Filter list">

              </IconButton>
            </Tooltip>
          )}
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

const styles = theme => ({


});

export class EnhancedTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: 'asc',
      orderBy: 'calories',
      selected: [],
      data: [],
      page: 0,
      rowsPerPage: 5,
      date: new Date(),
      searchString: "",
    };

    this.dateChanged = this.dateChanged.bind(this);
    this.search = this.search.bind(this);
    this.handleClick1=this.handleClick1.bind(this);
  }


  search = (event) => {
    event.preventDefault();
    if (event.target.value) {
      // console.log("event.target.value",event.target.value);
      let filtered = this.state.data.filter(item => {
        return (
          // item.name == event.target.value ||
          // item.mname.toLowerCase().includes(event.target.value.toLowerCase()) ||
          // item.id == Number(event.target.value) ||
          item.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
          item.mname.toLowerCase().includes(event.target.value.toLowerCase()) ||
          item.id.toLowerCase().includes(event.target.value.toLowerCase()) ||
          item.lname.toLowerCase().includes(event.target.value.toLowerCase())


        );
      });
      this.setState({
        ...this.state,
        searchString: event.target.value,
        data: filtered
      });
    } else {
      this.setState({
        ...this.state,
        data: this.state.data,
        searchString: "",
        // idString: "",
        // priceString: ""
      });
      setTimeout(() => {
        this.componentDidMount();
      }, 50);

    }
  };

  componentDidMount() {
    var th = this;
    //this.serverRequest = axios.get(this.props.source)
    getData(`http://localhost/test_project-master (4)/test_project-master/src/views/Attendance/gets.php`)
      .then(function (event) {
        th.setState({
          data: event//.data
        });
      })
  }



  handleSelectAllClick = event => {
    if (event.target.checked) {
      this.setState(state => ({ selected: state.data.map(n => n.name) }));
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
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
    this.setState({ selected: newSelected });


  };

  dateChanged(d) {
    this.setState({ date: d });
  }
  handleClick1 = (event, name) => {
    const  numSelected=this.state;
    event.preventDefault();
    console.log(this.state);
    postData(`http://localhost/test_project-master (4)/test_project-master/src/views/Attendance/insert.php`, this.state)
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error(error));
    
      swal("Attendance", "Thank you for enter Attendance");
    //event.checked.reset();

  }
  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id =>
    this.state.selected.indexOf(id) !== -1;

  getDate() {
    var date = { currentTime: new Date().toLocaleString() };

    this.setState({
      date: date
    });
  }

  render() {
    const { classes } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
    const {
      searchString
    } = this.state;
    const Demo = () => (
      <NewWindow>
        <h1>Hi 👋</h1>
      </NewWindow>
    )
    return (
      <GridContainer justify="center">
        <Paper style={{ width: "70%", textAlign: "center" }} >
          <br />
          <br />
          <InputForm inputType="date" inputKey="Date" inputLabel="Date" updateInput={this.updateInput} />
          <h3>Search of Students</h3>
          <input style={{ width: "50%", color: "#000", margin: "3px 0", height: "30px", textAlign: "right" }}
            type="search" placeholder="Search" name="search" value={searchString}
            onChange={this.search} />


          <EnhancedTableToolbar numSelected={selected.length} />
          <div style={{ width: "70%", textAlign: "center" }}>
            <Table aria-labelledby="tableTitle">
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                style={{ width: "70%", backgroundColor: "#0101010", textAlign: "center" }}
                onSelectAllClick={this.handleSelectAllClick}

                rowCount={data.length}
              />
              <TableBody>
                {stableSort(data, getSorting(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((n, x) => {
                    const isSelected = this.isSelected(n.name);
                    return (
                      <TableRow
                        hover
                        onClick={event => this.handleClick(event, n.name)}
                        role="checkbox"
                        aria-checked={isSelected}
                        tabIndex={-1}
                        key={x}
                        value="1"
                        selected={isSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox checked={isSelected} name="check" value="1" color="primary" />
                        </TableCell>
                        <TableCell component="th" scope="row" padding="none">
                          {n.name + " " + n.mname + " " + n.lname}
                        </TableCell>
                        {/*} <TableCell align="right">{n.mname}</TableCell>
                      <TableCell align="right">{n.lname}</TableCell>
                  
                      <TableCell align="right">{n.id}</TableCell>
                      <TableCell align="right">{n.level}</TableCell>*/}
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow>
                    <TableCell />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              'aria-label': 'Previous Page',
            }}
            nextIconButtonProps={{
              'aria-label': 'Next Page',
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
          <form  onSubmit={this.handleClick1}>
          <Button type="submit" color="info" onSubmit={this.handleClick1} value="store1">Store</Button>
          </form>
        </Paper>
      </GridContainer>
    );
  }
}


export default withStyles(styles)(EnhancedTable);
