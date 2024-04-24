import * as SecureStore from 'expo-secure-store';
import { getSecureValues } from '../authentication/getValue';
import { deleteKey } from '../authentication/deleteValue';
import { saveSecureValue } from '../authentication/saveValue';
import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import MessagesComponent from '../screens/src/components/messagingComponents/message';

export function getMessages() {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    displayConversations();
  }, []);

  const displayConversations = async () => {
    try {
      const apiUrl = 'http://18.188.112.190:5001/getMessages';
      const accessToken = await getSecureValues('access');
      const credentials = {
        type: 'access',
        tokenFromUser: accessToken,
      };
  
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
  
      if (response.ok) {
        const data = await response.json();
        // console.log("response from server:",data['results']);
        if (data['results']['success'] === true){
          // secure the tokens returned from the server!
          return [true, data['results']['messages'], data['results']['requestersID']];
        }
        else {
          if(data['results']['message'] === "You have no messages yet.") {
            return [false]
            // console.log("Uh oh, no messages for you yet.")
          } 
          
          else if(data['message'] == -1){

            try {
              const apiUrl = 'http://18.188.112.190:5001/getMessages';
              const refreshToken = await getSecureValues('refresh');
              const credentials = {
                type: 'refresh',
                tokenFromUser: refreshToken,
              };
          
              const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
              });
          
              if (response.ok) {
                const data_ = await response.json();
                // console.log("response from server:",data_['results']);

                const newAccess = data_['newAccess'];
                const newRefresh = data_['newRefresh'];
                await deleteKey('access')
                await deleteKey('refresh')
                await saveSecureValue('access', newAccess);
                await saveSecureValue('refresh', newRefresh);

                if (data_['results']['success'] === true){
                  // secure the tokens returned from the server!
                  return [true, data_['results']['messages'], data_['results']['requestersID']];
                }
                else {
                  if(data_['results']['message'] === "You have no messages yet.") {
                    return [false]
                    // console.log("Uh oh, no messages for you yet.")
                  } 
                  
                  else if(data_['message'] == -1){
        
                    
        
                  }
        
                  else {
                    return [false]
                    // console.error('Items failed:', response.status, await response.text());
                  }
                }
              } else {
                console.error('Items failed:', response.status, await response.text());
                return [false]
              }
            } catch (error) {
              console.error('Error during item retrieval:', error);
              return [false]
            }

          }

          else {
            return [false]
            // console.error('Items failed:', response.status, await response.text());
          }
        }
      } else {
        console.error('Items failed:', response.status, await response.text());
        return [false]
      }
    } catch (error) {
      console.error('Error during item retrieval:', error);
      return [false]
    }
  };

};
