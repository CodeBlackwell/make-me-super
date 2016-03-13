import React, { Component } from 'react';
import axios from 'axios';

export default class Search extends Component {

  // search.js
  componentWillMount() {

    console.log('--------------------inside componentWillMount!');
    // fetch all batman activities from db

    // test get request
    axios.get('/api/search')
      .then(function(response) {
        console.log('----------------------get response.data: ', response.data);
        console.log('----------------------get response.status:' , response.status);
      })
      .catch(function(response) {
        console.log('----------------------get catch error: ', response.data);
      });

    // test post request
    axios.post('/api/test')
      .then(function(response) {
        console.log('----------------------post response.data: ', response.data);
        console.log('----------------------post response.status:' , response.status);
      })
      .catch(function(response) {
        console.log('----------------------post catch error: ', response.data);
      });
  }

  render(){
    return (
      <div>
        <button className="btn btn-primary btn-lg button" type="button">Make Me Batman!</button>
      </div>

    )
  }
}
