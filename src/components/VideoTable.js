import React from 'react';
import ReactDOM from 'react-dom';

class VideoTable extends React.Component {
    constructor() {
        super();
    }
    render() {
        const result = JSON.stringify(this.props.result)
        // Table
        return <pre>{result}</pre>
    }
}
export default VideoTable;