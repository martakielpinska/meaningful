//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { ImageBackground, ScrollView, StyleSheet, View, Text, TextInput , Button, TouchableHighlight, AsyncStorage ,  Image} from 'react-native';
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
    this.setState({
        data
    })

  }

  getTasksRows = (el) => {
    return (
        <View key={el.name} style = {styles.taskRow}>
            <Text style={{ fontSize: 17, color: "#191919"}}>{el.time.toUpperCase()}</Text>
            <Text style={{ fontSize: 17, color: "red"}}>{el.name.toUpperCase()}</Text>
            <TouchableHighlight style={styles.fullWidthButton} onPress={()=>{}}>
                    <Text style={styles.fullWidthButtonText}>FORGOT </Text>
            </TouchableHighlight>
        </View>
    )
  }
  //Screen1 Component
  render() {

     let xxx= null
     let shop = null
     let plant = null
     if(this.state.data !== []){
        // xxx = this.state.data.find(el=>{ return el.name=="Eating"})
       
        let tasks ={...this.state.data.find(el=> el.name == "Eating")}.tasks
        let shoppingTasks = {...this.state.data.find(el=> el.name == "Shopping")}.tasks
        let gardeningTasks = {...this.state.data.find(el=> el.name == "Gardening")}.tasks
        if(typeof tasks !== 'undefined') {
            xxx =tasks.map(el=> {
                return this.getTasksRows(el)
            } )
            shop =  shoppingTasks.map(el=>{
                return this.getTasksRows(el)
            })
            plant = gardeningTasks.map(el=>{
                return this.getTasksRows(el)
            })
        }
    
        
     }
        

const viewEat = (
    <ImageBackground style={ styles.imgBck } 
    resizeMode='cover' 
    source={require('../image/bck1.png')}>
        <View style={{justifyContent: "flex-start", alignItems: "center"}}>
            <Image source={require('../image/002-cutlery.png')} style={styles.eatImg} resizeMode={"contain"}></Image>
            <Text style={styles.bigText}>EATING</Text>
            {xxx}
        </View>
    </ImageBackground>
  )

  const viewShop = (
      <ImageBackground style={ styles.imgBck } 
      resizeMode='cover' 
      source={require('../image/bck3.png')}>
          <View style={{justifyContent: "flex-start", alignItems: "center"}}>
              <Image source={require('../image/001-shopping-basket.png')} style={styles.eatImg} resizeMode={"contain"}></Image>
              <Text style={styles.bigText}>SHOPPING</Text>
              {shop}
          </View>
      </ImageBackground>
  )

  const viewPlants = (
    <ImageBackground style={ styles.imgBck } 
    resizeMode='cover' 
    source={require('../image/bck2.png')}>
        <View style={{justifyContent: "flex-start", alignItems: "center"}}>
            <Image source={require('../image/003-sprout.png')} style={styles.eatImg} resizeMode={"contain"}></Image>
            <Text style={styles.bigText}>GARDENING</Text>
            {plant}
        </View>
    </ImageBackground>
  )

    return (
        <View style={{flex:1}}>
            <ScrollView 
                keyboardDismissMode="interactive"
                keyboardShouldPersistTaps="always"
                getTextInputRefs={() => {
                return [this._textInput1, this._textInput2];
                }}
                ref={(ref)=> this._scrollView = ref } style={{flex: 1}}>


                {viewEat}
                {viewShop}
                {viewPlants}
            </ScrollView>
            <View  style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>+</Text>
            </View>
        </View>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
  buttonTextStyle : {
    color:'white',
    fontSize: 30,
    marginBottom: 6
  },
  buttonStyle : {
    backgroundColor: '#fc454e',
    width: 40,
    height: 40,
    borderRadius: 33,
    justifyContent: 'center',
    alignItems:'center',
    position: 'absolute',
    bottom: 20,
    right: 20
  },
  imgBck: {width: "100%", height: 300},
  eatImg: {width: 75, height: 75, marginTop: 25},
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

  fullWidthButton: {
    backgroundColor: '#4286f4',
    height:21,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: "30%",
  },
  fullWidthButtonText: {
    fontSize:17,
    color: 'white'
  },
  taskRow: {width: "100%", flexDirection: "row", justifyContent: "space-between", paddingLeft :15, paddingRight: 15, marginBottom: 13},
});