import * as SecureStore from 'expo-secure-store';
import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import MessagesComponent from '../screens/src/components/messagingComponents/message';

import { getSecureValues } from '../authentication/getValue';
import { deleteKey } from '../authentication/deleteValue';
import { saveSecureValue } from '../authentication/saveValue';

const DisplayConvoComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    displayConversations();
  }, []); 

  const displayConversations = async () => {
    setIsLoading(true);
    try {
      const apiUrl = 'http://18.188.112.190:5001/getConversations';
      const accessToken = await getSecureValues('access');
      const credentials = {
        type: 'access',
        tokenFromUser: accessToken,
        // id1: id1,
        // id2: id2
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
        console.log("response from server:",data['results']);
        if (data['results']['success'] === true){
          setIsLoading(false); 
          // secure the tokens returned from the server!
          setConversations(data['results']['conversations']);
        }
        else {
          if(data['results']['message'] === "You have no messages yet.") {
            console.log("Uh oh, no messages for you yet.")
          } 
          if(data['message'] == -1){

            try {
              const apiUrl = 'http://18.188.112.190:5001/getConversations';
              const refreshToken = await getSecureValues('refresh');
              const credentials = {
                type: 'refresh',
                tokenFromUser: refreshToken,
                // id1: id1,
                // id2: id2
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
                console.log("response from server:",data_['results']);
                const newAccess = data_['newAccess'];
                const newRefresh = data_['newRefresh'];
                await deleteKey('access')
                await deleteKey('refresh')
                await saveSecureValue('access', newAccess);
                await saveSecureValue('refresh', newRefresh);
                if (data_['results']['success'] === true){
                  setIsLoading(false); 
                  // secure the tokens returned from the server!
                  setConversations(data_['results']['conversations']);
                }
                else {
                  if(data_['results']['message'] === "You have no messages yet.") {
                    console.log("Uh oh, no messages for you yet.")
                  } 
                  if(data_['message'] == -1){
        
                    
        
                  }
                  else {
                    console.error('Items failed:', response.status, await response.text());
                  }
                }
              } else {
                console.error('Items failed:', response.status, await response.text());
              }
            } catch (error) {
              console.error('Error during item retrieval:', error);
            } finally {
              setIsLoading(false); 
            }

          }
          else {
            console.error('Items failed:', response.status, await response.text());
          }
        }
      } else {
        console.error('Items failed:', response.status, await response.text());
      }
    } catch (error) {
      console.error('Error during item retrieval:', error);
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {isLoading ? (
        <ActivityIndicator size="large" color="black" style={{marginTop:'60%'}}/>
      ) : (
        conversations.map((conversation, index) => (
          <MessagesComponent
            key={index}
            conversationID={conversation.convoID}
            originSenderId={conversation.originalSenderID}
            originRecId={conversation.originalRecieverID}
            name={conversation.receiver_name}
            hasBeenOpened={conversation.hasOpenedMessage}
            messageContent={conversation.mostRecentMessage}
            recID={conversation.originalRecieverID}
            reqID={conversation.requesterID}
            IdOfPersonWhoSentLastMessage={conversation.IdOfPersonWhoSentLastMessage}
            image_data={conversation.image_data}
            // wasReceived={conversation.wasReceived}
          />
        ))
      )}
    </View>
  );
};

export default DisplayConvoComponent;
