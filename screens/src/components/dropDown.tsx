import React from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { updateGlobalVariables } from '../../globalVariables/GlobalVariables';
import { getVariables } from '../../globalVariables/GlobalVariables';
import { updateUserVariables } from '../../globalVariables/UpdateUserAccount';

const DropdownComponent = ({ initMessage, options, icon, field, typeOfChange }) => {
    if(typeOfChange == 'creation'){
      const [value, setValue] = useState(null);
      return (
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={{ ...styles.iconStyle, marginRight: 8 }}
          data={options}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={initMessage}
          activeColor='#D1D1D1'
          value={value}
          onChange={(item) => {
            setValue(item.value);
            updateGlobalVariables(field, parseInt(item.value, 10));
          }}
          renderLeftIcon={() => (
            icon
          )}
          renderRightIcon={() => (
            <Entypo name="chevron-small-down" size={24} color="black" style={{ marginRight: 10 }} />
          )}
        />
      );
    }
    else{
      const [value, setValue] = useState(null);
      return (
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={{ ...styles.iconStyle, marginRight: 8 }}
          data={options}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={initMessage}
          activeColor='#D1D1D1'
          value={value}
          onChange={(item) => {
            setValue(item.value);
            updateUserVariables(field, parseInt(item.value, 10));
          }}
          renderLeftIcon={() => (
            icon
          )}
          renderRightIcon={() => (
            <Entypo name="chevron-small-down" size={24} color="black" style={{ marginRight: 10 }} />
          )}
        />
      );
    }
  };
  

  export default DropdownComponent;

  const styles = StyleSheet.create({
    dropdown: {
      margin: 16,
      height: 50,
      borderBottomColor: 'black',
      borderBottomWidth: 1, 
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      fontSize: 18,
      marginLeft: 5,
      color: 'rgba(0,0,0,0.5)'
    },
    selectedTextStyle: {
      fontSize: 18,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });
