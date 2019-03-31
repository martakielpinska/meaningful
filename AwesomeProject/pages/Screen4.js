//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, TextInput , Button, TouchableHighlight, AsyncStorage ,  Image, ScrollView} from 'react-native';
// import all basic components
import logo from '../image/logoTEC.png'
import graph from '../image/graph2.png'

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
       <ScrollView 
                keyboardDismissMode="interactive"
                keyboardShouldPersistTaps="always"
                getTextInputRefs={() => {
                return [this._textInput1, this._textInput2];
                }}
                ref={(ref)=> this._scrollView = ref } style={{flex: 1}}>
          <Image source={graph} style={{ height: 300, width: "100%"}} resizeMode={"stretch"}/>
          <View style={{justifyContent: "center", alignItems: "center", backgroundColor: "#ce3a45", width: "100%"}}>
            <Text style={styles.bigText }>YOU FORGET MOST PILLS IN THE MORNING</Text>
          </View>
           <Text style={[styles.smallText , {color: 'red', fontWeight: 'bold', marginTop: 13, marginBottom: 7 }]}>{this.state.pillsForgottenWeek}</Text>
          <Text style={styles.smallText }>PILLS FORGOTTEN THIS WEEK</Text>
          <Text style={[styles.smallText , {color: 'red', fontWeight: 'bold', marginTop: 13, marginBottom: 7}]}>{this.state.pillsForgottenMonth}</Text>
          <Text style={styles.smallText }>PILLS FORGOTTEN THIS MONTH </Text>
          <Text style={[styles.smallText , {color: 'red', fontWeight: 'bold', marginTop: 13, marginBottom: 7}]}>{this.state.pillsForgottenYear}</Text>
          <Text style={styles.smallText }>PILLS FORGOTTEN THIS YEAR </Text>
          </ScrollView>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  bigText:{
      fontSize: 29,
      width: "100%",
      textAlign : "center",
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 15,
      paddingBottom: 15,
      fontFamily : "sans-serif-light",
      color: 'white'
  },
  smallText:{
      fontSize: 22,
      width: "100%",
      textAlign : "center",
      paddingLeft:15,
      paddingRight: 15,
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