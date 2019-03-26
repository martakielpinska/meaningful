//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, TextInput , Button, TouchableHighlight, Image, AsyncStorage} from 'react-native';

// import all basic components
 
export default class Screen2 extends Component {
  //Screen1 Component
  _storeData = async () => {
    try {
      await AsyncStorage.setItem('KEY', 'I like to save it.');
    } catch (error) {
      // Error saving data
    }
  };

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('KEY');
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <TouchableHighlight style={styles.fullWidthButton} onPress={this._storeData}>
                 <Text style={styles.fullWidthButtonText}>Submit</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.fullWidthButton} onPress={this._retrieveData}>
                 <Text style={styles.fullWidthButtonText}>Submit</Text>
          </TouchableHighlight>
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
    justifyContent: 'center',
    
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