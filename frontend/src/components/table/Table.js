import React from "react";
import SongService from "../../services/SongService";
import TableView from "./TableView";

class Table extends React.Component {
  constructor() {
      super();
      this.state = {
        data: [],
        numRows: 0,
        rowsPerPage: 5,
        page: 0
      };
      this.fetchData = this.fetchData.bind(this);
      this.handleChangePage = this.handleChangePage.bind(this);
      this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
  }

  handleChangePage(event, page) {
    this.setState({ page: page }, this.fetchData );
  }

  handleChangeRowsPerPage(event) {
    this.setState({ rowsPerPage: parseInt(event.target.value, 10) }, this.fetchData);
  }

  fetchData() {
    SongService.getSongs(this.state.page, this.state.rowsPerPage, (res) => {
      const pages = Math.ceil(parseFloat(res.total) / parseFloat(this.state.rowsPerPage));
      this.setState({
          data: res.songs,
          pages: pages,
          numRows: res.total
      });
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { data, pages, page, numRows, rowsPerPage} = this.state;
    return (
      <TableView 
        data={data}
        pages={pages}
        page={page}
        numRows={numRows}
        rowsPerPage={rowsPerPage}
        onChangePage={this.handleChangePage}
        onChangeRowsPerPage={this.handleChangeRowsPerPage}
        onSongSelected={this.props.onSongSelected}
    />
    );
  }
}

export default Table;