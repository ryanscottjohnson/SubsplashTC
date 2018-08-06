import React from 'react';
import ReactDOM from 'react-dom';
import VideoTable from './VideoTable'
import appRequest from '../appReq'
class App extends React.Component {
    constructor() {
    super();
    const results = appRequest.getVideos()
  }
  render(){
    return <VideoTable results={this.results} />
  }
  }
  export default App