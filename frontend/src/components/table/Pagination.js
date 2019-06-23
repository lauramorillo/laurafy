import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import PaginationActions from './PaginationActions';

export default function Pagination(props) {
  return (<TablePagination
            rowsPerPageOptions={[1, 5, 10, 25]}
            colSpan={3}
            count={props.numRows}
            rowsPerPage={props.rowsPerPage}
            page={props.page}
            SelectProps={{
              inputProps: { 'aria-label': 'Rows per page' },
              native: true,
            }}
            onChangePage={props.onChangePage}
            onChangeRowsPerPage={props.onChangeRowsPerPage}
            ActionsComponent={PaginationActions}
          />)
}