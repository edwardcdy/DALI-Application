import React from 'react';
import '../../styles/index.scss';
import { Button, Checkbox } from 'react-bootstrap';

const address = "http://mappy.dali.dartmouth.edu/";

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="profile-box">
        <Checkbox inline> Map location</Checkbox>
        <span className="name"> {this.props.member.name} </span>
        <span className="quote"> {this.props.member.message} </span>
        <img src = {address + this.props.member.iconUrl} />
      </div>
    )
  }
}
