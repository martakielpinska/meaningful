//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, TextInput , Button, TouchableHighlight, Image, AsyncStorage, ScrollView} from 'react-native';
import moment from 'moment'
// import all basic components
import {Font} from 'expo'

export default class Screen2 extends Component {

    
constructor() {
    super();
    this.unsubscribe = null;
    this.state = {
        data: '',
        filteredData : '',
        dayState: ""
    };
        // this._updates = this._updates.bind(this)
}

  //Screen1 Component
  _storeData = async () => {
    try {
      await AsyncStorage.setItem('PILLS', JSON.stringify(pillData));
      
    } catch (error) {
      // Error saving data
    }
  };

  _storeForgottenPills = async () => {
    try {

        console.log("STORING")
      await AsyncStorage.setItem('PILLSFORGOTTEN', JSON.stringify(forgottenPills));
      
    } catch (error) {
      // Error saving data
      console.log(error)
      
    }
  };

  _storeTasks = async () => {
    try {

      await AsyncStorage.setItem('TASKS', JSON.stringify(tasks));
      
    } catch (error) {
      // Error saving data
      console.log(error)
      
    }
  };

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('PILLS');
      if (value !== null) {
        // We have data!!
        console.log(JSON.parse(value));
        return JSON.parse(value)
     
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  componentDidMount = async () => {

    //   alert(moment().format("YYYY-MM-DD HH:mm"))
        const send = this._storeData()
        const send2 = this._storeForgottenPills()
        const send3 = this._storeTasks()
        
        const data = await this._retrieveData()
        
        if(typeof data !== 'undefined'){
        this.setState({
            data: data,
        }, () => { 
          //here: success function and data modification
          const dayName = moment().format('dddd')
          const dayData = data[dayName]
          
          let now = moment()
          //test
  
           now.set({hours:2})
          //end test
          let morning = moment()
          morning.set({hour: 8, minute: 0})
          let afternoon = moment()
          afternoon.set({hour: 15, minute: 0 })
          let evening = moment()
          evening.set({hour: 22, minute: 0 })
          let arr = []
          let dayState = ""
  
          if(now.isBefore(morning)){
              dayState = "morning"

              tasksMorning = []
              tasksAft = []
              tasksEv = []

              tasks.forEach(el=>{
                  el.tasks.forEach(task=>{
                      if(task.timeName == "morning"){
                          tasksMorning = [...tasksMorning, {...task, el: el.name}]
                      }
                      else if(task.timeName == "afternoon"){
                          tasksAft = [...tasksAft, {...task, el: el.name}]
                      }
                      else {
                          tasksEv = [...tasksEv, {...task, el: el.name}]
                      }
                  })
              })
             arr = [
                 {
                     name: "morning",
                     ...dayData["Morning"],
                     tasks: tasksMorning

                 },
                 {
                     name: "afternoon",
                     ...dayData["Afternoon"],
                     tasks: tasksAft
                 },
                 {
                     name: "evening",
                     ...dayData["Evening"],
                     tasks: tasksEv
                 }
             ]
          }
          else if(now.isBefore(afternoon)){
              dayState =  "afternoon"
              arr = [
                  {
                      name: "afternoon",
                      ...dayData["Afternoon"],
                      tasks: tasksAft
                  },
                  {
                      name: "evening",
                      ...dayData["Evening"],
                      tasks: tasksEv
                  }
              ]
          }
          else if(now.isBefore(evening)){
              dayState =  "evening"
              arr = [
                  {
                      name: "evening",
                      ...dayData["Evening"],
                      tasks: tasksEv
                  }
              ]
          } else{
              //after evening - nothing left today
          }
          this.setState({
              filteredData: arr,
              dayState
          }, ()=> {
              // console.log(arr)
          }
      )
  
       } )
      }

  }

  render() {
   
   
    let nextTime = null
    let content = null
    
    // if(this.state.dayState == "evening"){
    //     nextTime = "22:00"
    // } 
    // else if (this.state.dayState == "morning"){
    //     nextTime = "8:00"
    // } 
    // else if(this.state.dayState == "afternoon"){

    //     nextTime = ""
    // }

    let counter = 0   
    if(this.state.filteredData){
        content = this.state.filteredData.map((i) => {                     
            // Return the element. Also pass key   
            counter++
            return (
                <View key={counter.toString()} style={{width: "100%", backgroundColor: "white"}}>
                    <Text style={styles.nextName}>{i.name.toUpperCase()}</Text>
                    {i.pills.split(",").map((i)=>{
                         return (
                            <View key={i} style={styles.pillRow}>
                                <Image source={require("../image/pill.png")} style={styles.pill}/>
                                <Text style={styles.pillText} >PILL : {i.replace(" ", "")}</Text>
                            </View>
                        ) 
                    }) }
                    {i.tasks.map(task=>{
                        return (
                            <View key={task.name} style={styles.pillRow}>
                                <Image source={task.el=="Gardening" ? require("../image/003-sprout.png") : task.el == "Shopping" ? require('../image/001-shopping-basket.png') : require('../image/002-cutlery.png')} style={styles.pill}/>                            
                                <Text style={styles.pillText}>{task.el.toUpperCase()} {task.name.toUpperCase()} </Text>
                            </View>
                        )
                    })}
                </View>
            // <Text key={i}>{i}</Text>
            ) 
         })
    }
 

    


    return (
        <View style={{flex:1}}>
      <ScrollView contentContainerStyle={styles.MainContainer}>
        <Text style={styles.nextText}>Next:</Text>
        <Text style={styles.bigNext}>{nextTime}</Text>
        {content}
        {/* <TouchableHighlight style={styles.fullWidthButton} onPress={this._storeData}>
                 <Text style={styles.fullWidthButtonText}>Submit</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.fullWidthButton} onPress={this._retrieveData}>
                 <Text style={styles.fullWidthButtonText}>Submit</Text>
          </TouchableHighlight> */}
      </ScrollView>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'flex-start',
    paddingBottom: 20,
    
  },
  pillRow:{
    flexDirection: "row", justifyContent: "flex-start", alignItems: "center", height: 55,
    backgroundColor: "white", borderWidth:0.5, borderColor: "#bde0d2"
  },
  pill:{
    width:30, 
    height:30, 
    marginLeft:15
  },
  pillText:{
      fontSize: 22,
      marginLeft: 15,
  },
  nextText:{
    width: "100%",
    textAlign: "left",
    paddingLeft: 15,
    fontSize: 18,
    fontFamily : "sans-serif-light",
    color: '#191919',
  },
  bigNext:{
      width: "100%",
      textAlign: "center",
      fontSize: 50
  },
  nextName:{
    width: "100%",
    textAlign: "left",
    paddingLeft: 15,
    fontSize: 32,
    fontFamily : "custom",
    color: '#1f7c4e'
    
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

 
const pillData = {
    Monday: {
        Morning: {
            pills: "a, b, c, d"
        },
        Afternoon: {
            pills: "e, f, g, h"
        },
        Evening:{
            pills: "a, b, c, d"
        }
    },
    Tuesday: {
        Morning: {
            pills: "a, b, c, d"
        },
        Afternoon: {
            pills: "e, f, g, h"
        },
        Evening:{
            pills: "a, b, c, d"
        }
    },
    Wednesday: {
        Morning: {
            pills: "a, b, c, d"
        },
        Afternoon: {
            pills: "e, f, g, h"
        },
        Evening:{
            pills: "a, b, c, d"
        }
    },
    Thursday: {
        Morning: {
            pills: "a, b, c, d"
        },
        Afternoon: {
            pills: "e, f, g, h"
        },
        Evening:{
            pills: "a, b, c, d"
        }
    },
    Friday: {
        Morning: {
            pills: "a, b, c, d"
        },
        Afternoon: {
            pills: "e, f, g, h"
        },
        Evening:{
            pills: "a, b, c, d"
        }
    },
    Saturday: {
        Morning: {
            pills: "a, b, c, d"
        },
        Afternoon: {
            pills: "e, f, g, h"
        },
        Evening:{
            pills: "a, b, c, d"
        }
    },
    Sunday: {
        Morning: {
            pills: "a, b, c, d"
        },
        Afternoon: {
            pills: "e, f, g, h"
        },
        Evening:{
            pills: "a, b, c, d"
        }
    }
}

const forgottenPills = [
    { time : "morning" , date: "2019-01-12" },
    { time: "morning" , date : "2019-03-30"},
    { time: "evening" , date : "2019-03-28"}
    
]

const tasks = [
    {
        name: "Eating",
        tasks: [
            {time: "9:00" , name: "breakfast", timeName: "morning"},
            {time: "12:00" , name: "lunch", timeName: "afternoon"},
            {time: "17:00" , name: "dinner", timeName : "afternoon"},
            {time: "20:00" , name: "supper", timeName: "evening"},
            
        ]
    },
    {
        name: "Shopping",
        tasks:[
            {time: "Wednesday", name: "Groceries",  timeName: "morning"},
            {time: "Wednesday" , name: "House Supplies",  timeName: "morning"},
        ]

    },
    {
        name: "Gardening",
        tasks:[
            {time: "Wednesday", name: "garden",  timeName: "morning"},
            {time: "Wednesday", name: "house ",  timeName: "morning"}
        ]
    }
]