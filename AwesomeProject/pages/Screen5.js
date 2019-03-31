//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, TextInput , Button, TouchableHighlight, AsyncStorage ,  Image} from 'react-native';
// import all basic components
import logo from '../image/logoTEC.png'
import graph from '../image/GRAPH.png'

import moment from 'moment'
export default class Screen5 extends Component {

constructor() {
    super();
    this.unsubscribe = null;
    this.state = {
        data : [],
        pillsForgottenMonth : 0, 
        pillsForgottenWeek: 0, 
        pillsForgottenYear: 0
    };
        // this._updates = this._updates.bind(this)
}

_retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('TASKS');
      if (value !== null) {
        // We have data!!
        console.log(JSON.parse(value));
        return JSON.parse(value)
     
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  componentDidMount = async() =>{
    const data = await this._retrieveData()
    console.log(data)

  }
  //Screen1 Component
  render() {
    return (
      <View style={styles.MainContainer}>
              </View>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'flex-start',

  },
  bigText:{
      fontSize: 29,
      width: "100%",
      textAlign : "center",
      marginBottom: 20,
      paddingLeft: 15,
      paddingRight: 15,
      fontFamily : "sans-serif-light"
  },
  smallText:{
      fontSize: 25,
      width: "100%",
      textAlign : "left",
      paddingLeft:15,
      marginBottom: 10,
      fontFamily : "sans-serif-light"
      
      
  },
  textInput: {
      width: "80%",
      height: 50,
      backgroundColor: "#d5e0f2",
      paddingLeft: 13
  },
  fullWidthButton: {
    backgroundColor: '#4286f4',
    height:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: "80%",
    marginTop: 25
  },
  fullWidthButtonText: {
    fontSize:24,
    color: 'white'
  }
});