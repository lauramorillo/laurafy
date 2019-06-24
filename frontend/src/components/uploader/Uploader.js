import React from "react";
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import SongService from '../../services/SongService';

function Uploader(props) {
  return (<FilePond server={SongService.uploadSongUrl()} allowMultiple={true}/>)
}

export default Uploader;
