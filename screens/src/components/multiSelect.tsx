import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Alert } from 'react-native';
import { updateGlobalVariables } from '../../globalVariables/GlobalVariables';

  const MultiSelectComponent = ({initMessage, options, icon, field}) => {
    const [selected, setSelected] = useState([]);

    const handleChange = (array) => {
      if(field === "interests_hobbies"){
        if(array.length > 7){
          Alert.alert('Maximum Reached', 'CampusCrush understand that you may have a lot of interests and hobbies, but we allow a maximum of 7 listed interests per person.\n\nPick the ones that best represent yourself!', [
            {
              text: 'Ok',
              // onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
          ]);
        }
        else{
          setSelected(array);
          updateGlobalVariables(field, array);
        }
      }
      else if(field === "music_preference"){
        if(array.length > 5){
          Alert.alert('Maximum Reached', 'CampusCrush understand that you may have diverse music taste, but we allow a maximum of 5 music choices per person.\n\nPick the ones that best represent yourself!', [
            {
              text: 'Ok',
              // onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
          ]);
        }
        else{
          setSelected(array);
          updateGlobalVariables(field, array);
        }
      }
    }

    return (
      <View style={styles.container}>
        <MultiSelect
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={{ ...styles.iconStyle, marginRight: 8 }}
          search
          data={options}
          labelField="label"
          valueField="value"
          placeholder={initMessage}
          searchPlaceholder="Search..."
          value={selected}
          onChange={item => {
            // setSelected(item);
            // console.log(item.length);
            handleChange(item);
          }}
          renderLeftIcon={() => (
            icon
          )}
          renderRightIcon={() => (
            <Entypo name="chevron-small-down" size={24} color="black" style={{ marginRight: 10 }} />
          )}
          selectedStyle={styles.selectedStyle}
        />
      </View>
    );
  };

  export default MultiSelectComponent;

  const styles = StyleSheet.create({
    container: { padding: 16 },
    dropdown: {
      height: 50,
      backgroundColor: 'transparent',
      borderBottomColor: 'black',
      borderBottomWidth: 1,
    },
    placeholderStyle: {
      fontSize: 20,
    },
    selectedTextStyle: {
      fontSize: 18,
      color: 'black',
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 18,
    },
    icon: {
      marginRight: 5,
    },
    selectedStyle: {
      borderRadius: 10,
      borderColor: 'rgba(0,0,0,0.5)',
    },
  });
