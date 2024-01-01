import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Entypo } from '@expo/vector-icons';

// const MultiSelectComponent = ({ initMessage, icon }) => {
//   const [userInput, setUserInput] = useState('');
//   return (
//     <View style={styles.container}>
//       <View style={styles.dropdown}>
        
//       {icon && <Entypo name={icon} size={20} color="black" style={{marginRight: 9}} />}
//         <TextInput
//           style={styles.inputSearchStyle}
//           placeholder={initMessage}
//           placeholderTextColor="rgba(0,0,0,0.5)"
//           value={userInput}
//           onChangeText={(text) => setUserInput(text)}
//         />

//       </View>
//     </View>
//   );
// };

// UserInputAccCreation.js

const MultiSelectComponent = ({ initMessage, icon, onUserInput }) => {
  const [userInput, setUserInput] = useState('');

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

        />
      </View>
    </View>
  );
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
