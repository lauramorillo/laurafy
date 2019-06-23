import React from 'react';
import Table from '../table/Table';
import Player from '../player/Player';
import SongService from '../../services/SongService';

import './App.css';
import Uploader from '../uploader/Uploader';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.playSong = this.playSong.bind(this);
  }

  playSong(song) {
    this.setState({playingSongUrl: SongService.getSongUrl(song)})
  }

  render() {
    return (
      <div className="App">
        <Player src={this.state.playingSongUrl}/>
        <Table onSongSelected={this.playSong} />
        <Uploader/>
      </div>
    );
  }
}

export default App;