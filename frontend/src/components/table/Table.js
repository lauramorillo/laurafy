import React from "react";
import SongService from "../../services/SongService";
import TableView from "./TableView";

class Table extends React.Component {
   constructor() {
       super();
       this.state = {
          data: [],
          loading: false
       };
       this.fetchData = this.fetchData.bind(this);
   }

   fetchData(state, instance) {
    this.setState({ loading: true });
    SongService.getSongs(state.page, state.pageSize, (res) => {
        this.setState({
            data: res.songs,
            pages: res.pages,
            loading: false
        })
    });
   }

    render() {
      const { data, pages, loading } = this.state;
      return (
        <TableView 
          data={data}
          pages={pages}
          loading={loading}
          loading={this.state.loading}
          onFetchData={this.fetchData}
          onSongSelected={this.props.onSongSelected}
      />
      );
    }
}

export default Table;