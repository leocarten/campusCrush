import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { updateGlobalVariables } from '../../globalVariables/GlobalVariables';

export default function CustomDatePicker() {
  const [value, setValue] = useState(dayjs());

  const handleChange = (change) => {
    setValue(change);
    console.log(change);
    updateGlobalVariables("birthday",change);
  }

  
  
  return (
    <View style={styles.container}>
        <Text style={styles.heading}><AntDesign name="calendar" size={20} color="black" /> Please select your date of birth:</Text>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: '70%' }}>
                <DateTimePicker
                value={value}
                onValueChange={(date) => handleChange(date)}
                selectedItemColor='black'
                style={{ marginBottom: 0 }}
                mode='date'
                />
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  heading:{
    fontSize:18,
    marginBottom: '2%',
    marginLeft: '4%',
    marginTop: '1%'
  }
});