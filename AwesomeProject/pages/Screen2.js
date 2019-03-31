//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, TextInput , Button, TouchableHighlight, Image, AsyncStorage, ScrollView} from 'react-native';
import moment from 'moment'
// import all basic components


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
  
             arr = [
                 {
                     name: "morning",
                     ...dayData["Morning"]
                 },
                 {
                     name: "afternoon",
                     ...dayData["Afternoon"]
                 },
                 {
                     name: "evening",
                     ...dayData["Evening"]
                 }
             ]
          }
          else if(now.isBefore(afternoon)){
              dayState =  "afternoon"
              arr = [
                  {
                      name: "afternoon",
                      ...dayData["Afternoon"]
                  },
                  {
                      name: "evening",
                      ...dayData["Evening"]
                  }
              ]
          }
          else if(now.isBefore(evening)){
              dayState =  "evening"
              arr = [
                  {
                      name: "evening",
                      ...dayData["Evening"]
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
        nextTime = this.state.filteredData[0].name == "morning" ? "8:00" : (this.state.filteredData[0].name == "afternoon" ? "15:00" : "22:00") 
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
                                <Text style={styles.pillText} >{i.replace(" ", "")}</Text>
                            </View>
                        ) 
                    }) }
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
    
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'flex-start',
    paddingBottom: 20,
    
  },
  pillRow:{
    flexDirection: "row", justifyContent: "flex-start", marginTop:13
  },
  pill:{
    width:30, 
    height:30, 
    marginLeft:15
  },
  pillText:{
      fontSize: 25,
      marginLeft: 15,

  },
  nextText:{
    width: "100%",
    textAlign: "left",
    paddingLeft: 15,
    fontSize: 20,
  },
  bigNext:{
      width: "100%",
      textAlign: "center",
      fontSize: 50
  },
  nextName:{
    width: "100%",
    textAlign: "center",
    fontSize: 32
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
            {time: "9:00" , name: "breakfast"},
            {time: "12:00" , name: "lunch"},
            {time: "17:00" , name: "dinner"},
            {time: "20:00" , name: "supper"},
            
        ]
    },
    {
        name: "Shopping",
        tasks:[
            {time: "Monday", name: "Groceries"},
            {time: "Thursday" , name: "Groceries"},
        ]

    },
    {
        name: "Gardening",
        tasks:[
            {time: "Monday", name: "Water the garden"},
            {time: "Monday", name: "Water the house plants"}
        ]
    }
]