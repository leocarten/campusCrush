import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Entypo } from '@expo/vector-icons';
import { updateGlobalVariables } from '../../globalVariables/GlobalVariables';
import { getVariables } from '../../globalVariables/GlobalVariables';
import { updateUserVariables } from '../../globalVariables/UpdateUserAccount';


const MultiSelectComponent = ({ initMessage, icon, onUserInput, field, typeOfChange }) => {
  if(typeOfChange == 'creation'){
    const [userInput, setUserInput] = useState('');
    const handleEndEditing = () => {
      if(field === "firstname"){
        updateGlobalVariables(field, userInput);
      }
      else if(field === "birthday"){
        updateGlobalVariables(field, userInput);
      }
      else if(field === "bio"){
        updateGlobalVariables(field, userInput);
      }
      else if(field === "bucket_list"){
        updateGlobalVariables(field, userInput);
      }
      else if(field === "win_my_heart"){
        updateGlobalVariables(field, userInput);
      }
      else if(field === "job"){
        updateGlobalVariables(field, userInput);
      }
      else if(field === "workout"){
        updateGlobalVariables(field, userInput);
      }
    };
    return (
      <View style={styles.container}>
        <View style={styles.dropdown}>
          {icon && <Entypo name={icon} size={20} color="black" style={{ marginRight: 9 }} />}
          <TextInput
            style={styles.inputSearchStyle}
            placeholder={initMessage}
            placeholderTextColor="rgba(0,0,0,0.5)"
            value={userInput}
            onChangeText={(text) => setUserInput(text)}
            onEndEditing={handleEndEditing}
          />
        </View>
      </View>
    );
  }
  else{
    console.log("you should see this!")
    const [userInput, setUserInput] = useState('');
    const handleEndEditing = () => {
      if(field === "bio"){
        updateUserVariables(field, userInput);
      }
      else if(field === "bucket_list"){
        updateUserVariables(field, userInput);
      }
      else if(field === "win_my_heart"){
        updateUserVariables(field, userInput);
      }
      else if(field === "job"){
        updateUserVariables(field, userInput);
      }
      else if(field === "workout"){
        updateUserVariables(field, userInput);
      }
      console.log("hi")
    };
    return (
      <View style={styles.container}>
        <View style={styles.dropdown}>
          {icon && <Entypo name={icon} size={20} color="black" style={{ marginRight: 9 }} />}
          <TextInput
            style={styles.inputSearchStyle}
            placeholder={initMessage}
            placeholderTextColor="rgba(0,0,0,0.5)"
            value={userInput}
            onChangeText={(text) => {
              setUserInput(text)
              updateUserVariables(field, text);
            }
          }
            // onEndEditing={handleEndEditing}
          />
        </View>
      </View>
    );
  }
};

export default MultiSelectComponent;

const styles = StyleSheet.create({
  container: { padding: 16 },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'transparent',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  inputSearchStyle: {
    flex: 1,
    height: 40,
    fontSize: 18,
    marginRight: 8,
  },
  icon: {
    marginRight: 5,
  },
  rightIcon: {
    marginLeft: 5,
  },
});
