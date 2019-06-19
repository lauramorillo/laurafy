import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

function TableView(props) {
  return(
    <ReactTable
      data={props.data}
      pages={props.pages}
      loading={props.loading}
      columns={[
        {
          Header: "Title",
          accessor: "title"
        }
      ]}
      defaultPageSize={10}
      className="-striped -highlight"
      loading={props.loading}
      showPagination={true}
      showPaginationTop={false}
      showPaginationBottom={true}
      pageSizeOptions={[5, 10, 20, 25, 50]}
      manual 
      onFetchData={props.onFetchData}
      getTrProps={(state, rowInfo) => ({
        onClick: () => props.onSongSelected(rowInfo.original)
      })}
    />
  );
}

export default TableView