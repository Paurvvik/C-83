import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class Profile extends React.Component{
  render(){
    return(
      <View style = {{
        backgroundColor:"black" ,
        flex :1,
        alignItems:"center",
        justifyContent:"center",


      }}>
      <Text style = {{color:"white"}}> Profile Screen </Text>
      </View>
    )
  }
}