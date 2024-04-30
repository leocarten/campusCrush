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
import { deleteKey } from '../authentication/deleteValue';
import { saveSecureValue } from '../authentication/saveValue';
import { Alert } from 'react-native';

// make sure input is correct (only -1 and stuff)
// make request 
// save the new JWTs

const FilterChangeEdit = () => {
  const [isLoading, setIsLoading] = useState(false);
  // console.log(getVariablesFromUserUpdate())

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const apiUrl = 'http://18.188.112.190:5001/updateUserProfile';
      const accessToken = await getSecureValues('access');
      // console.log('user access tokenn:\n',accessToken);
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

      // check if the response status is okay (status code 200-299)
      if (response.ok) {
        const data = await response.json();
        if(data['message'] == -1){

          try {
            const apiUrl = 'http://18.188.112.190:5001/updateUserProfile';
            const refreshToken = await getSecureValues('refresh');
            // console.log('user refresh tokenn:\n',refreshToken);
            const credentials = {
              type: 'refresh',
              tokenFromUser: refreshToken,
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
      
            // check if the response status is okay (status code 200-299)
            if (response.ok) {
              const data_ = await response.json();

              const newAccess = data_['newAccess'];
              const newRefresh = data_['newRefresh'];
              await deleteKey('access')
              await deleteKey('refresh')
              await saveSecureValue('access', newAccess);
              await saveSecureValue('refresh', newRefresh);

              console.log(data_);
            } else {
              console.error('Internal server error.');
            }
      
          } catch (error) {
            console.error('Error fetching data on attempt 2 in endpoint/FilterChangeEdit.js');
          }
          finally {
            resetValues();
            setIsLoading(false);
            Alert.alert('Success', 'Yay! Your changes were successfully saved.');
          }

        }
        console.log(data);
      } else {
        console.error('Internal server error.');
      }

    } catch (error) {
      console.error('Error fetching data');

    } finally {
      resetValues();
      setIsLoading(false);
      Alert.alert('Success', 'Yay! Your changes were successfully saved.');
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
              Save filters <FontAwesome5 name="check-circle" size={19} color={expandedIconColor} />
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
        shadowOpacity: 0.1,
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

export default FilterChangeEdit;