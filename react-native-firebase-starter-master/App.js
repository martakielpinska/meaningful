//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { View, Image, TouchableOpacity } from 'react-native';
// import all basic components
//For React Navigation 2.+ import following
//import {DrawerNavigator, StackNavigator} from 'react-navigation';
//For React Navigation 3.+ import following
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
 
import Screen1 from './pages/HomeScreen';

 
class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./src/ufo.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
 
const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 1',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  Screen1: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Demo Screen 1',
    },
  },
  // Screen2: {
  //   //Title
  //   screen: Screen2_StackNavigator,
  //   navigationOptions: {
  //     drawerLabel: 'Demo Screen 2',
  //   },
  // },
  // Screen3: {
  //   //Title
  //   screen: Screen3_StackNavigator,
  //   navigationOptions: {
  //     drawerLabel: 'Demo Screen 3',
  //   },
  // },
});
 
//For React Navigation 2.+ need to export App only
//export default App;
//For React Navigation 3.+
export default createAppContainer(DrawerNavigatorExample);