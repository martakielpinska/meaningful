import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput , Button, TouchableHighlight, Image, AsyncStorage, ScrollView} from 'react-native';
import moment from 'moment'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'

 
export default class Screen3 extends Component {
  
constructor() {
    super();
    this.state = {
        data: '',
        inputUsername: "",

    };
    //if error is saying this.smth is undefined u have to bind "this"
    // this._updates = this._updates.bind(this)
}
_storeData = async () => {
  try {
    await AsyncStorage.setItem('PILLS', JSON.stringify(pillData));
  } catch (error) {
    // Error saving data
  }
};

_retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('PILLS');
    if (value !== null) {
      // We have data!!
      return JSON.parse(value)
    
    }
  } catch (error) {
    // Error retrieving data
  }
};

componentDidMount = async () => {
  //   alert(moment().format("YYYY-MM-DD HH:mm"))
    const send = this._storeData()
    const data = await this._retrieveData()
    if(typeof data !== 'undefined'){
      
      this.setState({data : makeArrayWithData(data)})
      
    }
  }

  makeTextInput = (expr) => {

    let inputName = null

    switch (expr) {
      case 'MondayMorning':
      inputName = (<TextInput placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(monMor) => this.setState({monMor})}  value={this.state.monMor}/>     )
      break;
      case 'MondayAfternoon':
      inputName = (<TextInput placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(monAft) => this.setState({monAft})}  value={this.state.monAft}/>     )
      break;
      case 'MondayEvening':
      inputName = (<TextInput placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(monEv) => this.setState({monEv})}  value={this.state.monEv}/>     )
      break;

      case 'TuesdayMorning':
      inputName = (<TextInput placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(tueMor) => this.setState({tueMor})}  value={this.state.tueMor}/>     )
      break;
      case 'TuesdayAfternoon':
      inputName = (<TextInput placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(tueAft) => this.setState({tueAft})}  value={this.state.tueAft}/>     )
      break;
      case 'TuesdayEvening':
      inputName = (<TextInput placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(tueEv) => this.setState({tueEv})}  value={this.state.tueEv}/>     )
      break;

      case 'WednesdayMorning':
      inputName = (<TextInput placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(wMor) => this.setState({wMor})}  value={this.state.wMor}/>     )
      break;
      case 'WednesdayAfternoon':
      inputName = (<TextInput placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(wAft) => this.setState({wAft})}  value={this.state.wAft}/>     )
      break;
      case 'WednesdayEvening':
      inputName = (<TextInput placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(wEv) => this.setState({wEv})}  value={this.state.wEv}/>     )
      break;

      case 'ThursdayMorning':
      inputName = (<TextInput placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(thMor) => this.setState({thMor})}  value={this.state.thMor}/>     )
      break;
      case 'ThursdayAfternoon':
      inputName = (<TextInput placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(thAft) => this.setState({thAft})}  value={this.state.thAft}/>     )
      break;
      case 'ThursdayEvening':
      inputName = (<TextInput placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(thEv) => this.setState({thEv})}  value={this.state.thEv}/>     )
      break;

      case 'FridayMorning':
      inputName = (<TextInput placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(frMor) => this.setState({frMor})}  value={this.state.frMor}/>     )
      break;
      case 'FridayAfternoon':
      inputName = (<TextInput placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(frAft) => this.setState({frAft})}  value={this.state.frAft}/>     )
      break;
      case 'FridayEvening':
      inputName = (<TextInput placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(frEv) => this.setState({frEv})}  value={this.state.frEv}/>     )
      break;

      case 'SaturdayMorning':
      inputName = (<TextInput placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(satMor) => this.setState({satMor})}  value={this.state.satMor}/>     )
      break;
      case 'SaturdayAfternoon':
      inputName = (<TextInput placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(satAft) => this.setState({satAft})}  value={this.state.satAft}/>     )
      break;
      case 'SaturdayEvening':
      inputName = (<TextInput placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(satEv) => this.setState({satEv})}  value={this.state.satEv}/>     )
      break;

      case 'SundayMorning':
      inputName = (<TextInput placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(sunMor) => this.setState({sunMor})}  value={this.state.sunMor}/>     )
      break;
      case 'SundayAfternoon':
      inputName = (<TextInput placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(sunAft) => this.setState({sunAft})}  value={this.state.sunAft}/>     )
      break;
      case 'SundayEvening':
      inputName = (<TextInput placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(sunEv) => this.setState({sunEv})}  value={this.state.sunEv}/>     )
      break;
      default:
        console.log('Sorry, we are out of ' + expr + '.');
    }
   return inputName
  }

   makeRows = (day) => {
    return ( 
      <View>
        <Text style={styles.pillTime}> Pills Morning </Text>
        {pillRow(day.pillsMorning)}
        <View style={styles.plusRow}>
          <Image source={require("../image/plus.png")} style={styles.plus}/>
          {this.makeTextInput(day.dayName+"Morning")}
        </View>
         <Text  style={styles.pillTime}> Pills Afternoon </Text>
        {pillRow(day.pillsAfternoon)}
        <View style={styles.plusRow}>
          <Image source={require("../image/plus.png")} style={styles.plus}/>
          {this.makeTextInput(day.dayName+"Afternoon")}
        </View>
        <Text  style={styles.pillTime}> Pills Evening </Text>
        {pillRow(day.pillsEvening)}
        <View style={styles.plusRow}>
          <Image source={require("../image/plus.png")} style={styles.plus}/>
          {this.makeTextInput(day.dayName+"Evening")}
        </View>
      </View>
    )
  }


  render() {
    let content = null
    if (this.state.data !== ''){
      content = [...this.state.data].map( day => {
        return (
          <View key={day.dayName}>
            <Text style={styles.dayName}>{day.dayName}</Text>
            {
              this.makeRows(day)
            }
          </View>
        )
      })
    }
  
   

    return (
      <View style={styles.MainContainer}>
      <KeyboardAwareScrollView style={{width: "100%", height:"100%"}}>
      {content}
      </KeyboardAwareScrollView>
      </View>
    );
  }
}

function makeArrayWithData(data) {
  return [
    {
      dayName : "Monday",
      pillsMorning : data["Monday"]["Morning"].pills,
      pillsAfternoon: data["Monday"]["Afternoon"].pills,
      pillsEvening: data["Monday"]["Evening"].pills,
    },
    {
      dayName: "Tuesday",
      pillsMorning : data["Tuesday"]["Morning"].pills,
      pillsAfternoon: data["Tuesday"]["Afternoon"].pills,
      pillsEvening: data["Tuesday"]["Evening"].pills,
    },
    {
      dayName: "Wednesday",
      pillsMorning : data["Wednesday"]["Morning"].pills,
      pillsAfternoon: data["Wednesday"]["Afternoon"].pills,
      pillsEvening: data["Wednesday"]["Evening"].pills,
    },
    {
      dayName: "Thursday",
      pillsMorning : data["Thursday"]["Morning"].pills,
      pillsAfternoon: data["Thursday"]["Afternoon"].pills,
      pillsEvening: data["Thursday"]["Evening"].pills,
    },
    {
      dayName: "Friday",
      pillsMorning : data["Friday"]["Morning"].pills,
      pillsAfternoon: data["Friday"]["Afternoon"].pills,
      pillsEvening: data["Friday"]["Evening"].pills,
    },
    {
      dayName: "Saturday",
      pillsMorning : data["Saturday"]["Morning"].pills,
      pillsAfternoon: data["Saturday"]["Afternoon"].pills,
      pillsEvening: data["Saturday"]["Evening"].pills,
    },
    {
      dayName: "Sunday",
      pillsMorning : data["Sunday"]["Morning"].pills,
      pillsAfternoon: data["Sunday"]["Afternoon"].pills,
      pillsEvening: data["Sunday"]["Evening"].pills,
    }
  ]
}



function pillRow(arr) { 
  return arr.split(",").map((i)=>{
    return (
      <View key={i} style={styles.pillRow}>
          <Image source={require("../image/pill.png")} style={styles.pill}/>
          <View style={styles.pillRow2}>
          <Text style={styles.pillText} >{i.replace(" ", "")}</Text>
          <TouchableHighlight style={styles.fullWidthButton}>
            <Text style={styles.fullWidthButtonText} > DELETE </Text>
          </TouchableHighlight>
          </View>
          
      </View>
    ) 
   })
}
 
const styles = StyleSheet.create({
  textInput: {
    width: "80%",
    height: 35,
    backgroundColor: "#d5e0f2",
    paddingLeft: 13,
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 15
},
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: { width: 35, height: 35, marginTop: 15, marginBottom: 15, marginLeft: 15},
  plusRow:{
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  fullWidthButton: {
    backgroundColor: '#f44245',
    height:30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: "30%",
    marginRight: 25
   
  },
  fullWidthButtonText: {
    fontSize:17,
    color: 'white'
  },
  pillTime:{
    fontSize: 24,
    marginTop: 9,
    paddingLeft: 15
  },
  dayName:{
    fontSize: 35,
    textTransform : 'capitalize',
    paddingLeft: 15,
    marginTop: 17,
    
  },  
  pillRow:{
    flexDirection: "row", justifyContent: "flex-start", marginTop:13
  },
  pillRow2: { flex:1 , flexDirection: "row", justifyContent: "space-between"},
  pill:{
    width:30, 
    height:30, 
    marginLeft:15
  },
  pillText:{
      fontSize: 25,
      marginLeft: 15,

  },
});