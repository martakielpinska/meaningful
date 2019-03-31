import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput , Button, TouchableHighlight, KeyboardAvoidingView,
  Image, AsyncStorage, ScrollView, findNodeHandle, UIManager, TextInputState} from 'react-native';
import moment from 'moment'
import {Header} from 'react-navigation'


 


export default class Screen3 extends Component {
  
constructor() {
    super();
    this.state = {
        data: '',
        inputUsername: "",
        monMor: "", monAft: "", monEv: "",
    };
    //if error is saying this.smth is undefined u have to bind "this"
    // this._updates = this._updates.bind(this)
    this._textInput1 = null
    this._textInput2 = null
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
      
      this.setState({data : makeArrayWithData(data) , data2 : data})
      
      console.log(data)
    }
  }


   pillRow = (arr, day, time) => { 
    return arr.split(",").map((i, index)=>{
      return (
        <View key={i} style={styles.pillRow}>
            <Image source={require("../image/pill.png")} style={styles.pill}/>
            <View style={styles.pillRow2}>
            <Text style={styles.pillText} >{i.replace(" ", "")}</Text>
            <TouchableHighlight style={styles.fullWidthButton} onPress={()=>this.deletePill(index, day, time)}>
              <Text style={styles.fullWidthButtonText} > DELETE </Text>
            </TouchableHighlight>
            </View>
            
        </View>
      ) 
     })
  }

  makeTextInput = (expr) => {

    let inputName = null

    switch (expr) {
      case 'MondayMorning':
      inputName = (<TextInput ref={(ref)=> this._textInput1 = ref } placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(monMor) => this.setState({monMor})}  value={this.state.monMor}/>     )
      break;
      case 'MondayAfternoon':
      inputName = (<TextInput ref={(ref)=> this._textInput2 = ref } placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(monAft) => this.setState({monAft})}  value={this.state.monAft}/>     )
      break;
      case 'MondayEvening':
      inputName = (<TextInput ref={(ref)=> this._textInput3 = ref } placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(monEv) => this.setState({monEv})}  value={this.state.monEv}/>     )
      break;

      case 'TuesdayMorning':
      inputName = (<TextInput ref={(ref)=> this._textInput4 = ref }  placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(tueMor) => this.setState({tueMor})}  value={this.state.tueMor}/>     )
      break;
      case 'TuesdayAfternoon':
      inputName = (<TextInput ref={(ref)=> this._textInput5 = ref } placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(tueAft) => this.setState({tueAft})}  value={this.state.tueAft}/>     )
      break;
      case 'TuesdayEvening':
      inputName = (<TextInput ref={(ref)=> this._textInput6 = ref }  placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(tueEv) => this.setState({tueEv})}  value={this.state.tueEv}/>     )
      break;

      case 'WednesdayMorning':
      inputName = (<TextInput ref={(ref)=> this._textInput7 = ref }  placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(wMor) => this.setState({wMor})}  value={this.state.wMor}/>     )
      break;
      case 'WednesdayAfternoon':
      inputName = (<TextInput ref={(ref)=> this._textInput8 = ref }  placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(wAft) => this.setState({wAft})}  value={this.state.wAft}/>     )
      break;
      case 'WednesdayEvening':
      inputName = (<TextInput ref={(ref)=> this._textInput9 = ref }  placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(wEv) => this.setState({wEv})}  value={this.state.wEv}/>     )
      break;

      case 'ThursdayMorning':
      inputName = (<TextInput  ref={(ref)=> this._textInput10 = ref }  placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(thMor) => this.setState({thMor})}  value={this.state.thMor}/>     )
      break;
      case 'ThursdayAfternoon':
      inputName = (<TextInput ref={(ref)=> this._textInput11 = ref }  placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(thAft) => this.setState({thAft})}  value={this.state.thAft}/>     )
      break;
      case 'ThursdayEvening':
      inputName = (<TextInput ref={(ref)=> this._textInput12 = ref }  placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(thEv) => this.setState({thEv})}  value={this.state.thEv}/>     )
      break;

      case 'FridayMorning':
      inputName = (<TextInput ref={(ref)=> this._textInput13 = ref }  placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(frMor) => this.setState({frMor})}  value={this.state.frMor}/>     )
      break;
      case 'FridayAfternoon':
      inputName = (<TextInput ref={(ref)=> this._textInput14 = ref }  placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(frAft) => this.setState({frAft})}  value={this.state.frAft}/>     )
      break;
      case 'FridayEvening':
      inputName = (<TextInput ref={(ref)=> this._textInput15 = ref }  placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(frEv) => this.setState({frEv})}  value={this.state.frEv}/>     )
      break;

      case 'SaturdayMorning':
      inputName = (<TextInput ref={(ref)=> this._textInput16 = ref }  placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(satMor) => this.setState({satMor})}  value={this.state.satMor}/>     )
      break;
      case 'SaturdayAfternoon':
      inputName = (<TextInput ref={(ref)=> this._textInput17 = ref }  placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(satAft) => this.setState({satAft})}  value={this.state.satAft}/>     )
      break;
      case 'SaturdayEvening':
      inputName = (<TextInput ref={(ref)=> this._textInput18 = ref }  placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(satEv) => this.setState({satEv})}  value={this.state.satEv}/>     )
      break;

      case 'SundayMorning':
      inputName = (<TextInput ref={(ref)=> this._textInput19 = ref }  placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(sunMor) => this.setState({sunMor})}  value={this.state.sunMor}/>     )
      break;
      case 'SundayAfternoon':
      inputName = (<TextInput ref={(ref)=> this._textInput20 = ref }  placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(sunAft) => this.setState({sunAft})}  value={this.state.sunAft}/>     )
      break;
      case 'SundayEvening':
      inputName = (<TextInput ref={(ref)=> this._textInput21 = ref }  placeholder="ADD PILL NAME" placeholderTextColor="#9b9b9b" style={styles.textInput}  multiline = {false} onChangeText={(sunEv) => this.setState({sunEv})}  value={this.state.sunEv}/>     )
      break;
      default:
        console.log('Sorry, we are out of ' + expr + '.');
    }
   return inputName
  }

  addPill = async (day, time) => {
    try{
      let ref = this.getTextInput(day,time)
      this.setState({
        [ref[2]] : ""
      })
      let updatedPills = this.state.data2[day.dayName][time].pills
      updatedPills = (updatedPills == "") ? ref[0] : updatedPills+", " +ref[0]
     
      let updatedData = this.state.data2
      updatedData[day.dayName][time].pills = updatedPills
      await AsyncStorage.setItem('PILLS', JSON.stringify(updatedData));
      this.componentDidMount()
    }
    catch (error) {
 console.log(error)
    }
   


    
  }

  deletePill = async (index, day, time) => {
    try {
   
      let updatedPills = this.state.data2[day][time].pills.split(",")
      delete updatedPills[index]
      let pillsString = ""
      let counter = 0
      updatedPills.forEach(el=>{
        pillsString += counter == 0 ? el : (","+el)
        counter++
      })
      let updatedData = this.state.data2
      updatedData[day][time].pills = pillsString
      console.log(updatedData)
      await AsyncStorage.setItem('PILLS', JSON.stringify(updatedData));
      this.componentDidMount()
    } catch (error) {
      // Error saving data
    }
  }



  getTextInput = (day, time) => {
    let stateReturn = null
    let textInputReturn = null
    let stateName = null
    if(day.dayName == "Monday"){
      stateReturn = time == "Morning" ? this.state.monMor.toString() : (time == "Afternoon" ? this.state.monAft.toString() :  this.state.monEv.toString())
      textInputReturn = time == "Morning"  ? this._textInput1 : (time == "Afternoon" ? this._textInput2 :  this._textInput3)
      stateName =  time == "Morning" ? "monMor" : (time == "Afternoon" ? "monAft" :  "monEv")
    }
    else if(day.dayName == "Tuesday"){
      stateReturn = time == "Morning" ? this.state.tueMor.toString() : (time == "Afternoon" ? this.state.tueAft :  this.state.tueEv)
      textInputReturn = time == "Morning"  ? this._textInput4 : (time == "Afternoon" ? this._textInput5 :  this._textInput6)
      stateName =  time == "Morning" ? "tueMor" : (time == "Afternoon" ? "tueAft" :  "tueEv")
    }
    else if(dayName == "Wednesday"){ 
      stateReturn = time == "Morning" ? this.state.wMor.toString() : (time == "Afternoon" ? this.state.wAft :  this.state.wEv)
      textInputReturn = time == "Morning"  ? this._textInput7 : (time == "Afternoon" ? this._textInput8 :  this._textInput9)
      stateName =  time == "Morning" ? "wMor" : (time == "Afternoon" ? "wAft" :  "wEv")
    }
    else if(dayName == "Thursday"){ 
      stateReturn = time == "Morning" ? this.state.thMor.toString() : (time == "Afternoon" ? this.state.thAft :  this.state.thEv)
      textInputReturn = time == "Morning"  ? this._textInput10 : (time == "Afternoon" ? this._textInput11 :  this._textInput12)
      stateName =  time == "Morning" ? "thMor" : (time == "Afternoon" ? "thAft" :  "thEv")
    }
    else if(dayName == "Friday"){ 
      stateReturn = time == "Morning" ? this.state.frMor.toString() : (time == "Afternoon" ? this.state.frAft :  this.state.frEv)
      textInputReturn = time == "Morning"  ? this._textInput13 : (time == "Afternoon" ? this._textInput14 :  this._textInput15)
      stateName =  time == "Morning" ? "frMor" : (time == "Afternoon" ? "frAft" :  "frEv")
    }
    else if(dayName == "Saturday"){ 
      stateReturn = time == "Morning" ? this.state.satMor.toString() : (time == "Afternoon" ? this.state.satAft :  this.state.satEv)
      textInputReturn = time == "Morning"  ? this._textInput16 : (time == "Afternoon" ? this._textInput17 :  this._textInput18)
      stateName =  time == "Morning" ? "satMor" : (time == "Afternoon" ? "satAft" :  "satEv")
    }
    else{ 
      stateReturn = time == "Morning" ? this.state.sunMor.toString() : (time == "Afternoon" ? this.state.sunAft :  this.state.sunEv)
      textInputReturn = time == "Morning"  ? this._textInput19 : (time == "Afternoon" ? this._textInput20 :  this._textInput21)
      stateName =  time == "Morning" ? "sunMor" : (time == "Afternoon" ? "sunAft" :  "sunEv")
    }
    return [stateReturn, textInputReturn, stateName]
  }
   makeRows = (day) => {
    return ( 
      <View>
        <Text style={styles.pillTime}> Pills Morning </Text>
        {this.pillRow(day.pillsMorning, day.dayName, "Morning")}
        <View style={styles.plusRow}>
          <TouchableHighlight  onPress={()=>{this.addPill(day, "Morning")}}><Image source={require("../image/plus.png")} style={styles.plus}/></TouchableHighlight>
          {this.makeTextInput(day.dayName+"Morning")}
        </View>
         <Text  style={styles.pillTime}> Pills Afternoon </Text>
        {this.pillRow(day.pillsAfternoon, day.dayName, "Afternoon")}
        <View style={styles.plusRow}>
          <TouchableHighlight  onPress={()=>{this.addPill(day, "Afternoon")}}><Image source={require("../image/plus.png")} style={styles.plus}/></TouchableHighlight>          
          {this.makeTextInput(day.dayName+"Afternoon")}
        </View>
        <Text  style={styles.pillTime}> Pills Evening </Text>
        {this.pillRow(day.pillsEvening, day.dayName, "Evening")}
        <View style={styles.plusRow}>
        <TouchableHighlight  onPress={()=>{this.addPill(day, "Evening")}}><Image source={require("../image/plus.png")} style={styles.plus}/></TouchableHighlight>
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

      

      <KeyboardAvoidingView
      keyboardVerticalOffset = {Header.HEIGHT + 20} // adjust the value here if you need more padding
      style = {{ flex: 1 }}
      behavior = "padding" >
       <ScrollView keyboardDismissMode="interactive"
                                 keyboardShouldPersistTaps="always"
                                 getTextInputRefs={() => {
                                   return [this._textInput1, this._textInput2];
                                 }}
                                  ref={(ref)=> this._scrollView = ref } style={{flex: 1}}>
      {content}
      </ScrollView>
      </KeyboardAvoidingView>
      
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
    paddingLeft: 15,
    fontFamily: "custom",
    color: '#1f7c4e'
  },
  dayName:{
    fontSize: 35,
    textTransform : 'capitalize',
    paddingLeft: 15,
    marginTop: 17,
    fontFamily: "custom",
    color: "#191919"
    
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