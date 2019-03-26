//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, TextInput , Button, TouchableHighlight, Image} from 'react-native';
// import all basic components
import logo from '../image/logoTEC.png'

export default class Screen1 extends Component {

constructor() {
    super();
    this.unsubscribe = null;
    this.state = {
        inputUsername: '',
        inputPassword : '',
    };
        // this._updates = this._updates.bind(this)
}
  //Screen1 Component
  render() {
    return (
      <View style={styles.MainContainer}>
          <Image source={logo} style={{ width: 100, height: 100, marginBottom: 15}} resizeMode={"contain"}/>
          <TextInput style={styles.textInput}  multiline = {false} onChangeText={(inputUsername) => this.setState({inputUsername})}  value={this.state.inputUsername}/>
          <TextInput style={[styles.textInput, {marginTop: 20}]} secureTextEntry={true} multiline = {false} onChangeText={(inputPassword) => this.setState({inputPassword})}  value={this.state.inputPassword}/>
          <TouchableHighlight style={styles.fullWidthButton} onPress={()=> this.props.navigation.navigate("Second")}>
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
    justifyContent: 'flex-start',

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