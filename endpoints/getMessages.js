import * as SecureStore from 'expo-secure-store';
import { saveSecureValue } from '../authentication/saveValue';
import { getSecureValues } from '../authentication/getValue';
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
          } else {
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
