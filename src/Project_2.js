import React from "react";
import { View,
        Button,
        TouchableOpacity,
        Text,
        StyleSheet} from "react-native";
const Project_2= () =>{
    return(
        <View style ={style.title}>
        <View>
            <Button title="Xin chào"onPress={()=> alert("Chúc mừng bạn đã thành công ")}></Button>
            <TouchableOpacity
                onPress ={() => alert("bạn đã đăng nhập thành công")}
                style ={style.button}>
                <Text style={style.text}>Chào bạn</Text>
            </TouchableOpacity>
        </View>
        </View>
    )
}
const style =StyleSheet.create(
    {
        button:{
            backgroundColor:"aquamarine",
            padding:10,
            marginTop:10,
            alignItems:"center",
            fontWeight:"bold",
            fontSize:18
        },
        text:{
            color:'#000',
            fontWeight:'bold',
            fontSize:18,
        },
        title:{
            flex:1,
            justifyContent:"center",
        }
    }
)
export default Project_2;