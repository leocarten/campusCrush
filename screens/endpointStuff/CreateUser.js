import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { getVariables } from '../globalVariables/GlobalVariables';
import { Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { saveSecureValue } from '../../authentication/saveValue';

const AcceptTOS_Button = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  console.log(getVariables())

  const fetchData = async () => {
    // Set isLoading to true before making the fetch request
    setIsLoading(true);

    try {
      const apiUrl = 'http://18.188.112.190:5001/createUser';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(getVariables()),
      });

      // Check if the response status is okay (status code 200-299)
      if (response.ok) {
        const data = await response.json();
        // Handle the fetched data
        console.log('Data:', data);
        await saveSecureValue('access', data['access']);
        await saveSecureValue('refresh', data['refresh']);
      } else {
        console.error('Internal server error.');
      }

    } catch (error) {
      console.error('Error fetching data');
      // Handle other errors

    } finally {
      // Set isLoading to false after the fetch is complete (either success or error)
      setIsLoading(false);

      navigation.navigate('Thankyou');
    }
  };

  return (
    <View style={[styles.container, styles.horizontal]}>
      {isLoading ? (
        <ActivityIndicator size="large" color="black" style={{justifyContent: 'center', alignContent: 'center'}}/>
      ) : (
        // <Button title="Accept" onPress={fetchData} />
        <TouchableOpacity style={styles.next} onPress={fetchData}>
            <Text style={styles.buttonFont}>Accept <AntDesign name="checkcircleo" size={24} color="black" /></Text>
        </TouchableOpacity> 
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  horizontal: {
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    padding: 10,
  },
  next: {
    backgroundColor: 'transparent',
    padding: 7,
    height: 40,
    alignSelf: 'center',
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 10,
  },
  buttonFont: {
    fontSize: 22,
    fontWeight: '600',
    color: 'rgba(0, 0, 0, 0.8)',
  }
});

export default AcceptTOS_Button;