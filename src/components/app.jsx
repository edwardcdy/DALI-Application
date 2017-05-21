import React from 'react';
import '../../styles/index.scss';
import Profile from './profile';
import axios from 'axios';

export default class App extends React.Component {
  constructor() {
    super();
    
    this.state = { loading: true, members: [] };

    // GET request for data from DALI json file
    this.requestData();
  }

  requestData(){
    // request for user data
    axios.get('http://mappy.dali.dartmouth.edu/members.json')
      .then((response) => {
        // switch out the loading a second after receiving data
        setTimeout(()=>{
          this.setState({ loading: false, members: response.data});
        }, 1000);
      }).catch(function(error){
        // log error to the console 
        console.log(error);
      });
  }

  render() {
    

    if (this.state.loading){
      // display loader 
      return (<div id="loader"> </div>);
    } else {
      // display user view
      return (
        <div id="profiles">
          {this.state.members.map((member)=>
            <Profile key={member.iconUrl} member={member}></Profile>
          )}
        </div>
        
        
      )
    }
   
    
  }
}
