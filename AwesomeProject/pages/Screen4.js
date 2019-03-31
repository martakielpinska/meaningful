//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, TextInput , Button, TouchableHighlight, AsyncStorage ,  Image} from 'react-native';
// import all basic components
import logo from '../image/logoTEC.png'
import graph from '../image/GRAPH.png'

import moment from 'moment'
export default class Screen4 extends Component {

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
      const value = await AsyncStorage.getItem('PILLSFORGOTTEN');
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

    let pillsForgottenWeek = 0
    let pillsForgottenMonth = 0
    let pillsForgottenYear = 0
    
    data.forEach(el=>{
        let m1 = moment()
        let m2 = moment(el.date)
        pillsForgottenYear = m1.isSame(m2 , 'year') ? pillsForgottenYear+1 : pillsForgottenYear
        pillsForgottenMonth = m1.isSame(m2, 'month') ? pillsForgottenMonth +1 : pillsForgottenMonth
        pillsForgottenWeek = m1.isSame(m2, 'week') ? pillsForgottenWeek +1 : pillsForgottenWeek
    })

    this.setState({data, pillsForgottenMonth, pillsForgottenWeek, pillsForgottenYear})
  }
  //Screen1 Component
  render() {
    return (
      <View style={styles.MainContainer}>
          <Image source={graph} style={{ height: 200, width: "100%", marginBottom: 15}} resizeMode={"contain"}/>
          <Text style={styles.bigText }>YOU FORGET MOST PILLS IN THE MORNING</Text>
          <Text style={styles.smallText }>Pills forgotten this week <Text style={[styles.smallText , {color: 'red', fontWeight: 'bold'}]}>{this.state.pillsForgottenWeek}</Text></Text>
          <Text style={styles.smallText }>Pills forgotten this month <Text style={[styles.smallText , {color: 'red', fontWeight: 'bold'}]}>{this.state.pillsForgottenMonth}</Text></Text>
          <Text style={styles.smallText }>Pills forgotten this year <Text style={[styles.smallText , {color: 'red', fontWeight: 'bold'}]}>{this.state.pillsForgottenYear}</Text></Text>
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