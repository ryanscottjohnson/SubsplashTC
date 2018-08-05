import React from 'react';
import ReactDom from 'react-dom';
import VideoTable from './VideoTable';
import appRequest from '../appRequest';

class App extends React.Component {
    constructor() {
        super();
        const results = appRequest.getVideos();
    }
    render() {
        return <VideoTable results={this.results} />
    }
}
expport default App;