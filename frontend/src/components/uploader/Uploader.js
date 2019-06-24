import React from "react";
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import SongService from '../../services/SongService';

function Uploader(props) {
  return (<FilePond 
    server={{
      process: {
        url: SongService.uploadSongUrl(),
        method: 'POST',
        withCredentials: false,
        headers: {},
        timeout: 30000,
        onload: () => { props.onUpload() } 
      },
      revert: null
    }}
    allowMultiple={true}
  />)
}

export default Uploader;
