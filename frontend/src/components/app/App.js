import React from 'react';
import SongTable from '../table/SongTable';
import Player from '../player/Player';
import SongService from '../../services/SongService';

import './App.css';
import Uploader from '../uploader/Uploader';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      numRows: 0,
      rowsPerPage: 5,
      page: 0
    };
    this.playSong = this.playSong.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
  }

  playSong(song) {
    this.setState({playingSongUrl: SongService.getSongUrl(song)})
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

  handleChangePage(event, page) {
    this.setState({ page: page }, this.fetchData );
  }

  handleChangeRowsPerPage(event) {
    this.setState({ rowsPerPage: parseInt(event.target.value, 10), page: 0 }, this.fetchData);
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { data, page, numRows, rowsPerPage} = this.state;
    return (
      <div className="App">
        <Player src={this.state.playingSongUrl}/>
        <SongTable 
          data={data}
          page={page}
          numRows={numRows}
          rowsPerPage={rowsPerPage}
          onSongSelected={this.playSong}
          fetchData={this.fetchData}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
        <Uploader onUpload={this.fetchData}/>
      </div>
    );
  }
}

export default App;