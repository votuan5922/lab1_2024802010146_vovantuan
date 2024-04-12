import { StyleSheet, Text, View,Button,TextInput } from 'react-native'
import React, {useState} from 'react'
const styles = StyleSheet.create({
  container:{
      padding:20,
  },

  label:{
      fontWeight:'bold',
      fontSize: 18,
  },
  input:{
      marginTop: 10,
      padding:10,
      backgroundColor:'rgba(0, 0, 0, 0.1)',
      borderRadius:5,
  }
});
const Project_7 =()=> {
    const[name, setName] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.label}>What is your name?</Text>
      <TextInput 
        style={ styles.input}
        placeholder='John Doe'
        placeholderTextColor='rgba(0, 0, 0, 0.5)'
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <Button 
        title='Say Hello'
        onPress={() =>{
            alert(`hello, ${name}!`);
            setName('');
        }}
      />
    </View>
  )

};
export default Project_7;