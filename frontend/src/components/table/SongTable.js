import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import Pagination from './Pagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles2 = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
}));

function SongTable(props) {
  const classes = useStyles2();
  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table className={classes.table}>
          <TableBody>
            {props.data.map(row => (
              <TableRow key={row.file} onClick={() => props.onSongSelected(row)}>
                <TableCell component="th" scope="row">
                  {row.title || row.file}
                </TableCell>
                <TableCell>{row.artist || 'Unknown'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <Pagination
                numRows={props.numRows}
                rowsPerPage={props.rowsPerPage}
                page={props.page}
                onChangePage={props.onChangePage}
                onChangeRowsPerPage={props.onChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </Paper>
  );
}

export default SongTable;