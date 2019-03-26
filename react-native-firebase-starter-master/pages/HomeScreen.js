import React from 'react'
import {Platform, StyleSheet, Text, View, AsyncStorage, Button, DrawerLayoutAndroid,
  ScrollView, Image, FlatList, PermissionsAndroid, Alert} from 'react-native'
import MapView from 'react-native-maps'
import Marker from 'react-native-maps'
import FirebaseService from '../src/firestore'
import firebase from 'react-native-firebase';
import {createDrawerNavigator} from 'react-navigation'

 async function requestLocationPermission() 
{
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        'title': 'Example App',
        'message': 'Example App access to your location '
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the location")
      alert("You can use the location");
    } else {
      console.log("location permission denied")
      alert("Location permission denied");
    }
  } catch (err) {
    console.warn(err)
  }
}


export default class HomeScreen extends React.Component {
//   static navigationOptions = {
//     drawerLabel : "home",
//     drawerIcon : ({tintColor}) => (
//       <Image src={require('../src/assets/ufo.png')}/>
//     )
//   }
 
  constructor() {
    super();
    this.ref = firebase.firestore().collection('users')
    // this.refUser = firebase.firestore().collection('users').where("user", "==", "test")
    this.unsubscribe = null;
    this.state = {
        textInput: '',
        users: [],
        userDoc: null,
        longitude: "",
        latitude: ""
    };
     this._updates = this._updates.bind(this)
}

updateUserLocation(latitude, longitude) {
  if(this.state.userDoc){
    const updateRef = firebase.firestore().collection('users').doc(this.state.userDoc);
    updateRef.set({
      latitude: latitude,
      longitude: longitude,
      user: "test1"
    }).then((docRef) => {
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
 }
  
}


   shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState)
    
    if(this.state.users !== nextState.users) {
      return true
    }
    if(this.state.latitude !== nextState.latitude || this.state.longitude !== nextState.longitude){
      return true
    }

    return false
  }

  _updates = async (querySnapshot) => {
    let users = []
    let userDoc = null 
    let that = this
      querySnapshot.forEach(function (doc) {
        
        if(doc.data().user == "test1"){
            userDoc = doc._ref._documentPath._parts[1]
            users.push(doc.data())
        }
        else{
        users.push(doc.data())
        }
      })
    that.setState({ users, userDoc})
    
  }
   componentDidMount = async () => {
    
     this.unsubscribe = this.ref.onSnapshot(this._updates);

    

    // this.setState({
    //   users,
    //   userDoc
    // })



  //   alert('hi')
  //   this.ref.add({
  //    title: "hi",
  //    complete: false,
  //  });

       await requestLocationPermission()

      navigator.geolocation.getCurrentPosition(
        position => {
          const location = position

          this.setState({
              longitude: position.coords.longitude,
              latitude: position.coords.latitude
          })

          this.updateUserLocation(position.coords.latitude, position.coords.longitude)
          // this.ref.add({
          // user: "hi",
          // longitude: position.coords.longitude,
          // latitude: position.coords.latitude
          // });
        },
        error => Alert.alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );

     

   
      navigator.geolocation.watchPosition(
        position => {
          const location = position
          this.setState({
            longitude: position.coords.longitude,
            latitude: position.coords.latitude
        })
        this.updateUserLocation(position.coords.latitude, position.coords.longitude)
        
        },
        error => Alert.alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
  }

 

    
 
  
  render() {

    const polygons = [
      {latitude:51.44500989,
       longitude: 5.48368836},
      {latitude:51.44808041 ,
       longitude: 5.48334503},
      {latitude:51.45000607 ,
       longitude:5.48660659 },
      {latitude: 51.4508298,
       longitude: 5.49069213},
      {latitude: 51.45125771 ,
      longitude: 5.49489784},
      {latitude: 51.44708546,
      longitude: 5.4995327},
      {latitude: 51.44560903 ,
      longitude: 5.49129295},]

   
      
    return (
      
   <View style={{flexGrow: 1}}>
   
        <MapView  style={{ flex: 1, alignItems: "center", justifyContent: "center" , backgroundColor: "yellow"}}
    initialRegion={{
      latitude: 51.44874371,
      longitude: 5.49021149,
      latitudeDelta: 0.0122,
      longitudeDelta: 0.0021,
    }}>
    <MapView.Marker coordinate= {{
      latitude: typeof this.state.users !== 'undefined'  && this.state.users.length > 0 ? parseFloat( this.state.users[0].latitude) : 51.44874371,
      longitude:  typeof this.state.users !== 'undefined'  && this.state.users.length > 0  ?  parseFloat(this.state.users[0].longitude) : 5.49021149
    }}>
        <Image source={require('../src/alien.png')}
        style={{width: 35, height: 55}}/>
    </MapView.Marker>
    <MapView.Marker coordinate= {{
      latitude: this.state.latitude !== "" ? parseFloat( this.state.latitude) : 51.44874371,
      longitude:  this.state.longitude !== ""  ?  parseFloat(this.state.longitude) : 5.49021149
    }}>
        <Image source={require('../src/ufo.png')}
        style={{width: 35, height: 55}}/>
    </MapView.Marker>
     <MapView.Polygon
    coordinates= {polygons}
      fillColor="rgba(244, 66, 134, 0.8)"
      strokeColor="rgba(0,0,0,0.5)"
      strokeWidth={2}
  />
 </MapView >
 {/* <Button onPress={()=>this.props.navigation.navigate('DrawerOpen')} title={"Drawer Open"}/> */}
 </View>)
   

}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    height: 120,
    marginBottom: 16,

    marginTop: 64,
    padding: 10,
    width: 135,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  modules: {
    margin: 20,
  },
  modulesHeader: {
    fontSize: 16,
    marginBottom: 8,
  },
  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  }
});
