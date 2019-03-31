//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, TextInput , Button, TouchableHighlight, Platform, Keyboard,  Image, KeyboardAvoidingView, ScrollView} from 'react-native';
// import all basic components
import logo from '../image/logo1.png'
import text from '../image/text.png'
import {Header} from 'react-navigation'

export default class Screen1 extends Component {

constructor() {
    super();
    this.unsubscribe = null;
    this.state = {
        inputUsername: '',
        inputPassword : '',
        padding: 0
    };
   this._keyboardDidShow = this._keyboardDidShow.bind(this)
   this._keyboardDidHide= this._keyboardDidHide.bind(this)
   
}

componentDidMount () {
  this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
  this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
}

componentWillUnmount () {
  this.keyboardDidShowListener.remove();
  this.keyboardDidHideListener.remove();
}

_keyboardDidShow() {
  this.setState({padding: 60})
//  this._scrollView.scrollTo({x: 0, y: 1000, animated: true})
}

_keyboardDidHide () {
 this.setState({padding: 0})
}

  //Screen1 Component

 
  render() {
    const content = (
      <View style={[styles.MainContainer, {paddingBottom: this.state.padding}]}>
      <Image source={logo} style={{ width: 150 , height: 150, marginBottom: 15, marginTop:65}} resizeMode={"contain"}/>
    <Image source={text} style={{width: 220, height: 50, marginBottom: 10 }} resizeMode={"contain"}/>
    <Text style={styles.logIn}>LOG IN</Text>
      <TextInput placeholder={"USERNAME"} placeholderTextColor="#babec4" style={styles.textInput}  multiline = {false} onChangeText={(inputUsername) => this.setState({inputUsername})}  value={this.state.inputUsername}/>
      <TextInput  placeholder={"PASSWORD"} placeholderTextColor="#babec4" style={[styles.textInput, {marginTop: 20}]} secureTextEntry={true} multiline = {false} onChangeText={(inputPassword) => this.setState({inputPassword})}  value={this.state.inputPassword}/>
      <TouchableHighlight style={styles.fullWidthButton} onPress={()=> this.props.navigation.navigate("Second")}>
             <Text style={styles.fullWidthButtonText}>SUBMIT</Text>
      </TouchableHighlight>
      <Text style={styles.txtx}>No account yet? Sign In!</Text>
    </View>
    )

    return (
     
      
       <KeyboardAvoidingView behavior={'padding'} 
      style={{flex:1}}>
      <ScrollView keyboardDismissMode="interactive"
                  keyboardShouldPersistTaps="always"
                  ref={(ref)=> this._scrollView = ref } style={{flex: 1}}
                  onContentSizeChange={(contentWidth, contentHeight)=>{        
        this._scrollView.scrollToEnd({animated: true});
    }}>
      {content}
      </ScrollView>
      
          
      </KeyboardAvoidingView>
          
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
    flex:1, 
    justifyContent: 'flex-start',
    backgroundColor : 'white'

  },
  textInput: {
      width: "80%",
      height: 50,
      backgroundColor: "#e4ede3",
      paddingLeft: 13,
      color: "#4b4c4a"
  },
  fullWidthButton: {
    backgroundColor: '#0c562e',
    height:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: "80%",
    marginTop: 25
  },
  fullWidthButtonText: {
    fontSize:24,
    color: 'white',
    fontWeight: "bold"
  },
  logIn:{
    fontSize: 29,
    width: "100%",
    textAlign : "center",
    marginBottom: 20,
    fontFamily : "sans-serif-light"
  },
  txtx:{
    fontSize: 18,
    width: "100%",
    textAlign : "center",
    marginTop: 7,
    fontFamily : "sans-serif-light",
    color: '#0c562e'
  },
});