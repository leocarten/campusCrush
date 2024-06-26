import React, { useState, useCallback, useEffect } from 'react'
import { GiftedAvatar, GiftedChat } from 'react-native-gifted-chat'
import { View } from 'react-native'
import { Bubble, Send } from 'react-native-gifted-chat'
import { Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { feedHeadingBackground } from '../../styles/feedStyles/feedColors'
import { StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { sendFirstMessage } from '../../../../endpoints/SendFirstMessage'
import { getSecureValues } from '../../../../authentication/getValue'
import { sendAdditionalMessages } from '../../../../endpoints/sendAdditionalMessage'
import { io } from 'socket.io-client'
import { updateJoinedStatus } from '../../../globalVariables/Socket'
import { joinedStatus } from '../../../globalVariables/Socket'
import { useNavigation } from '@react-navigation/native';

function generateUniqueId() {
  return Math.random().toString(36).substring(2, 6);
}

export function SendUserMessage( {isFirstMessage, recID, sendID, socket, conversationID, originSenderId, originRecId} ) {

  const [messages, setMessages] = useState([]);
  console.log('in SendUserMessage, recID:',recID);
  console.log('in SendUserMessage, sendID:',sendID);
  const navigation = useNavigation();



  let hold;

  // console.log(getData())
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        if (data[0] === true) {
          // const receivedMessages = data[1];
          const requestersID = data[2];
          const messagesFromServer = data[1];

          const formattedMessages = messagesFromServer.map((message) => {
            const isRequester = requestersID === message.senderID; // Check if senderID matches requestersID
            const userId = isRequester ? 1 : 0; // Set userId based on the condition
            hold = userId;
            
            return {
                _id: message.messageID,
                text: message.messageContent,
                createdAt: message.timestamp,
                user: {
                    _id: userId, // Set user id based on condition
                    name: '{Name}', 
                    avatar: 'https://cdn-icons-png.flaticon.com/512/9218/9218712.png',
                },
            };
        });
        
        setMessages(formattedMessages);

          console.log("Messages received:", data[1]);


        } else {
          console.log("No messages or error occurred.");
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  async function getData() {
    try {
      const apiUrl = 'http://18.188.112.190:5001/getMessages';
      const accessToken = await getSecureValues('access');
      const credentials = {
        type: 'access',
        tokenFromUser: accessToken,
        id1: sendID,
        id2: recID
      }
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Response from server:", data['results']);
        if (data['results']['success'] === true) {
          return [true, data['results']['messages'], data['results']['requestersID']];
        } else {
          if (data['results']['message'] === "You have no messages yet.") {
            return [false];
          } else {
            return [false];
          }
        }
      } else {
        console.error('Items failed:', response.status, await response.text());
        return [false];
      }
    } catch (error) {
      console.error('Error during item retrieval:', error);
      return [false];
    }
  }


  const onSend = useCallback(async (messages = []) => {
    if(isFirstMessage == true){
      console.log("First message!!");
      const firstMessage = messages[0]['text'];
      console.log('recID: ',recID);
      console.log('sender id:',sendID);
      const sendingFirstMessage = await sendFirstMessage(recID, firstMessage);
      console.log('here: ',sendingFirstMessage)
      if (sendingFirstMessage == true){
        setMessages(previousMessages =>
          GiftedChat.append(previousMessages, messages),
        )
        console.log("Your first message has been sent :)")
      }else if (sendingFirstMessage == -1){
        // doesnt have extra messages
        navigation.navigate('ErrorPage', { 
          icon: 2,
          body: "You're out of messages!",
          message: "Uh oh, you ran out of messages. You are only allowed to start 3 new conversations every 24 hours. You can redeem an additional message from our store!",
          page: 3 
        });
      }
    }
    else{

      // should we create the websocket here?
      console.log("Might also need to emit the message here in sendMessage.tsx in messagingComponents.");
      const newMessage = messages[0]['text'];
      

      console.log("NOT first message");
      const sendNewMessage = await sendAdditionalMessages(recID, sendID, newMessage);
      console.log('after call, sender:',sendID);
      console.log('after call, rec:',recID)
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, messages),
      )
    }
  }, [])

  function renderBubble (props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            // color: "white",
            backgroundColor: 'rgba(204, 43, 94, 0.75)',
            borderColor: '#A21240',
            borderWidth: 1,
            shadowColor: "black",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 2.62,
            
            elevation: 4,
          },
        }}
      />
    )
  }

  function renderSend(props) {
    return (
        <Send {...props}>
            <View style={styles.sendIcon}>
                <Text>
                    <MaterialCommunityIcons name="send-circle" size={35} color="#cc2b5e"/>
                </Text>
            </View>
        </Send>
    );
}

const scrollToBottom = () => {
    return(
        <AntDesign name="down" size={24} color="black" />
    )
}
if(isFirstMessage == true){
  return (
      <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
          _id: 1,
      }}
      renderBubble={renderBubble}
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottom}
      showAvatarForEveryMessage={false}
      // isTyping={true}
      renderUsernameOnMessage={false}
      placeholder={"Type your message ..."}
      isLoadingEarlier={true}
      />
  )
  }
  else{
    return (
      <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
          _id: 1,
      }}
      renderBubble={renderBubble}
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottom}
      showAvatarForEveryMessage={false}
      // isTyping={true}
      renderUsernameOnMessage={false}
      placeholder={"Type your message ..."}
      isLoadingEarlier={true}
      />
      
  )
  }

}

const styles = StyleSheet.create({
    sendIcon: {
        marginRight: '8%', 
        marginBottom: '15%',
    }
})