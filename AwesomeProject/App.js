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
import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import Screen3 from './pages/Screen3';
 
class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    console.log(this.props)
    return (
      <View style={[{ flexDirection: 'row' }, this.props.navigationProps.state.routeName == "First"? {display: 'none'}: {}]}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./image/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
 
//For React Navigation 2.+ need to use StackNavigator instead createStackNavigator
//const FirstActivity_StackNavigator = StackNavigator({
//For React Navigation 3.+
const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
      title: 'Pill App',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
//For React Navigation 2.+ need to use StackNavigator instead createStackNavigator
//const FirstActivity_StackNavigator = StackNavigator({
//For React Navigation 3.+
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Screen2,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
//For React Navigation 2.+ need to use StackNavigator instead createStackNavigator
//const FirstActivity_StackNavigator = StackNavigator({
//For React Navigation 3.+
const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: Screen3,
    navigationOptions: ({ navigation }) => ({
      title: 'Add Pills',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
//For React Navigation 2.+ need to use DrawerNavigator instead createDrawerNavigator
//const DrawerNavigatorExample = DrawerNavigator({
//For React Navigation 3.+
const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  Screen1: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'PillApp',
    },
  },
  Screen2: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Home',
    },
  },
  Screen3: {
    //Title
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'AddPills',
    },
  },
});
 
//For React Navigation 2.+ need to export App only
//export default App;
//For React Navigation 3.+
export default createAppContainer(DrawerNavigatorExample);