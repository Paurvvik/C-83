import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Feed from "../Screens/feed"
import CreatPost from "../Screens/creatPost"
import Profile from "../Screens/profile"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default class Tabnavigator extends React.Component{
  render(){
    return(
     <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Feed') {
              iconName = focused
                ? 'book'
                : 'book-outline';
            } else if (route.name === 'CreatPost') {
              iconName = focused ? 'journal' : 'journal-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="CreatPost" component={CreatPost} />
      </Tab.Navigator>
    )
  }
}