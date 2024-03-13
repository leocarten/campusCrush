import * as SecureStore from 'expo-secure-store';
import { saveSecureValue } from '../authentication/saveValue';
import { getSecureValues } from '../authentication/getValue';
import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import MessagesComponent from '../screens/src/components/messagingComponents/message';

const DisplayConvoComponent = (id1, id2) => {
  const [isLoading, setIsLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    displayConversations();
  }, []);

  const displayConversations = async () => {
    setIsLoading(true); // Set isLoading to true when data fetching begins
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
          setIsLoading(false); // Set isLoading back to false when data fetching is completed
          // secure the tokens returned from the server!
          setConversations(data['results']['conversations']);
        }
        else {
          if(data['results']['message'] === "You have no messages yet.") {
            console.log("Uh oh, no messages for you yet.")
          } else {
            console.error('Items failed:', response.status, await response.text());
          }
        }
      } else {
        console.error('Items failed:', response.status, await response.text());
      }
    } catch (error) {
      console.error('Error during item retrieval:', error);
    } finally {
      setIsLoading(false); // Ensure isLoading is set back to false in case of any errors
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
            // conversationID={conversation.id}
            originSenderId={conversation.originalSenderID}
            originRecId={conversation.originalRecieverID}
            name={conversation.receiver_name}
            hasBeenOpened={conversation.hasOpenedMessage}
            messageContent={conversation.mostRecentMessage}
            recID={conversation.originalRecieverID}
            reqID={conversation.requesterID}
            IdOfPersonWhoSentLastMessage={conversation.IdOfPersonWhoSentLastMessage}
            // wasReceived={conversation.wasReceived}
          />
        ))
      )}
    </View>
  );
};

export default DisplayConvoComponent;
