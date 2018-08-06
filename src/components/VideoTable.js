import React from 'react';
import ReactDOM from 'react-dom';
class VideoTable extends React.Component {
    constructor() {
    super();
  }
renderVideo (data){
 return videos.map((item, index) =>{
  return <tr key={index}><td>{item.title}</td></tr>
 });
}
  render(){
     const result = JSON.stringify(this.props.result)
     //this is where the table will go .. example
     return (
     <table>
       {this.renderVideos(result)}
         <pre>{result}</pre>
         </table>
     )
  }
  }
  export default VideoTable