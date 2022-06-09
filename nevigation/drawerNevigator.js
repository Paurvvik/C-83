import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TabNevigator from "./tabNevigator";
import Profile from "../Screens/profile";
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default class DrawerNevigator extends React.Component{
  render(){
    return(
       <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={TabNevigator} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    )
  }
}