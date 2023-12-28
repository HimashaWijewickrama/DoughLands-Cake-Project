import React, { Component } from 'react';


class DatePost extends Component {
  state={
    curTime : new Date().toLocaleString(),
  }
  render(){
    return (
      <div className="Datepost" align="left">
        <p>Issued Date and Time : {this.state.curTime}</p>
      </div>
    );
  }
}
export default DatePost;