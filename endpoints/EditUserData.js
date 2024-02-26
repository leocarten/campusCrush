import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { getVariablesFromUserUpdate } from '../screens/globalVariables/UpdateUserAccount';
import { resetValues } from '../screens/globalVariables/UpdateUserAccount';
import { expandedIconColor, iconColors } from '../screens/src/styles/feedStyles/feedColors';
import { FontAwesome5 } from '@expo/vector-icons';
import { getSecureValues } from '../authentication/getValue';

const EditUserData = () => {
  const [isLoading, setIsLoading] = useState(false);
  console.log(getVariablesFromUserUpdate())

  const fetchData = async () => {
    // Set isLoading to true before making the fetch request
    setIsLoading(true);

    try {
      const apiUrl = 'http://18.188.112.190:5001/updateUserProfile';
      const accessToken = await getSecureValues('access');
      console.log('user access tokenn:\n',accessToken);
      const credentials = {
        type: 'access',
        tokenFromUser: accessToken,
      };
      const combinedData = {
        ...credentials,
        ...getVariablesFromUserUpdate()
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(combinedData),
      });

      // Check if the response status is okay (status code 200-299)
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error('Internal server error.');
      }

    } catch (error) {
      console.error('Error fetching data');
      // Handle other errors

    } finally {
      // Set isLoading to false after the fetch is complete (either success or error)
      resetValues();
      setIsLoading(false);
      
    }
  };

  return (
    <View style={[styles.container, styles.horizontal]}>
      {isLoading ? (
        <ActivityIndicator size="large" color={iconColors} style={{justifyContent: 'center', alignContent: 'center'}}/>
      ) : (
        // <Button title="Accept" onPress={fetchData} />
        <TouchableOpacity onPress={fetchData}>
          <View style={styles.saveButtonContainer}>
            <Text style={styles.saveButtonText}>
              Save Changes <FontAwesome5 name="check-circle" size={19} color={expandedIconColor} />
            </Text>
          </View>
        </TouchableOpacity> 
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    saveButtonContainer:{
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        // marginTop: '1%',
        borderWidth: 2,
        borderColor: expandedIconColor,
        padding: 4,
        borderRadius: 5,
        shadowColor: "white",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    saveButtonText: {
        fontSize: 18,
        color: iconColors
    },
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  horizontal: {
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    padding: 3,
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

export default EditUserData;