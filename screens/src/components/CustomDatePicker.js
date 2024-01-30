import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { updateGlobalVariables } from '../../globalVariables/GlobalVariables';
import { backgroundColor } from '../styles/backgroundColors';

export default function CustomDatePicker() {
  const [value, setValue] = useState(dayjs());

  const handleChange = (change) => {
    setValue(change);
    console.log(change.split(' ')[0]);
    updateGlobalVariables("birthday",change.split(' ')[0]);
  }

  
  
  return (
    <View style={styles.container}>
        <Text style={styles.heading}><AntDesign name="calendar" size={20} color="black" /> Please select your date of birth:</Text>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: '75%', borderColor: 'black', borderWidth: 1, borderRadius: 5, marginBottom: 0, paddingBottom: 5, paddingLeft: 5, paddingRight: 5}}>
            <DateTimePicker
              value={value}
              onValueChange={(date) => handleChange(date)}
              selectedItemColor='rgba(0,0,0,0.85)'
              mode='date'
              displayFullDays={true}
              headerButtonStyle={{backgroundColor:'rgba(193,193,193,0.4)', borderRadius: 5,borderColor: 'black',borderWidth: 0.5,}}
              headerTextContainerStyle={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'darkblue',
                borderColor: 'black',
                borderWidth: 0.5,
                backgroundColor: 'rgba(193,193,193,0.2)'
              }}
              weekDaysContainerStyle={{
                padding: 5,
                borderBottomColor: 'black', // Change this to the desired color for the line under the days
                borderBottomWidth: 1, //
              }}
              weekDaysTextStyle={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 16,
              }}
              dayContainerStyle={{
                backgroundColor: 'transparent', // Change this to the desired background color for each day
                borderRadius: 10,
                borderColor: 'black',
                borderWidth: 1
              }}
              monthContainerStyle={{
                backgroundColor: 'rgba(193,193,193,0.3)',
                borderColor: 'rgba(193,193,193,0.3)'
              }}
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