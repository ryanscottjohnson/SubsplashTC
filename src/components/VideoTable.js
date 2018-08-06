import React from 'react';
import ReactDOM from 'react-dom';
class VideoTable extends React.Component {
    constructor(props) {
    super(props);
    this.renderVideo = this.renderVideo.bind(this);
  }

renderVideo (data) {
//  return data.map((item, index) => {
//   return <tr key={index}><td>{item.title}</td></tr>
//   });
}

  render(){
     const result = JSON.stringify(this.props.result)
     //this is where the table will go .. example
     return (
       <div>
      <h1>Subsplash Video Table</h1>
      <table>
         <tbody>
           <tr>
             {/* <th>id</th> */}
             <th>title</th>
             <th>youtubeURL</th>
             <th>published</th>
             <th>reach</th>
           </tr>
         </tbody>
       </table>

       <table>
         <tbody>
           {this.renderVideo(result)}
           <tr>
             {/* <td>{result}</td>
             <td>{id}</td>
             <td>{title}</td>
             <td>{youtube_url}</td>
             <td>{published_at}</td>
             <td>{reach}</td> */}



           </tr>
         </tbody>
       </table>
       </div>
     )
  }
}
  export default VideoTable