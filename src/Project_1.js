import React from "react";
import { View,Text,StyleSheet } from "react-native";
const Project_1= ()=>
{
    return(
        <View style={myStyle.ViewStyle}>
            <Text style={myStyle.TextStyle}>
                Hello world
            </Text>
        </View>
    )
}
const myStyle = StyleSheet.create(
    {
        ViewStyle:{
            width:100,
            height:100,
            backgroundColor:"blue",
            alignItems:"center",
            justifyContent:"center"
        }, 
        TextStyle:{
            fontWeight:"bold",
            color:"red"
    }
    }
)
export  default Project_1;