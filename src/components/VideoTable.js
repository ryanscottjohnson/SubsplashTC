import React from 'react';
import ReactDOM from 'react-dom';
class VideoTable extends React.Component {
    constructor() {
    super();
    this.renderVideo = this.renderVideo.bind(this);
  }
renderVideo (data) {
 return data.map((item, index) =>{
  return <tr key={index}><td>{item.title}</td></tr>
 });
}

  render(){
     const result = JSON.stringify(this.props.result)
     //this is where the table will go .. example
     return (
       <table>
         <tbody>
           {this.renderVideo(result)}
           <tr>
             <td>{result}</td>
             <td>{id}</td>
             <td>{title}</td>
             <td>{youtube_url}</td>
             <td>{published_at}</td>
             <td>{reach}</td>



           </tr>
         </tbody>
       </table>
     )
  }
}
  export default VideoTable