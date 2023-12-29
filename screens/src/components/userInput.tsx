import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 


const UserInput = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={styles.inputText}
        placeholder="Username: "
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      
    <TouchableOpacity style={styles.login} onPress={() => console.log('login')}>
        <Text style={styles.buttonFont}>Login <AntDesign name="login" size={22} color="black" /> </Text>
      </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
    inputText: {
        fontSize: 22,
    },
    login: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: 10,
        padding: 5,
        height: 40,
        borderWidth: 2,
        borderColor: 'black',
        width: '60%',
        marginBottom: '6%'
      },
      buttonFont: {
        fontSize: 22,
        fontWeight: '400',
      }
})

export default UserInput;

