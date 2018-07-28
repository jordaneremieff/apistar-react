import React, { Component } from 'react';
import { View, Text } from 'react-primitives';
import axios from 'axios';

export default class App extends Component {
  state = {data: null};

  componentDidMount(){
    axios.get("http://localhost:8000/hello/")
         .then(response => this.setState({data:response.data}))
         .catch(function(error) {
           console.log('Fetch error: ' + error.message);
         });
  }  

  render() {
    const data = this.state.data;
    if (data === null) {
      return <View><Text>Loading...</Text></View>;
    }

    return (
      <View>
        <Text>{data.message}</Text>
      </View>
    );
  }
}

