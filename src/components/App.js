import React from 'react';
import ReactDOM from 'react-dom';
import VideoTable from './VideoTable.js';
import mockData from '../appReq.js';
// import appReq from '../appReq.js';

class App extends React.Component {
    constructor(props) {
    super(props);
    // const results = appReq.getVideos();
    const results = mockData.getVideos();
  }
  render(){
    return <VideoTable results={this.results} />
  }
  }
  export default App