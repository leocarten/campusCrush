import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { View } from 'react-native'
import { Bubble, Send } from 'react-native-gifted-chat'
import { Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { feedHeadingBackground } from '../../styles/feedStyles/feedColors'
import { StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export function SendUserMessage( name ) {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    setMessages([

      

      // {
      //   _id: 3,
      //   text: 'Why havent you answered me?',
      //   createdAt: new Date(),
      //   user: {
      //     _id: 4,
      //     name: '{Name}',
      //     avatar: 'https://cdn-icons-png.freepik.com/512/145/145865.png',
      //   },
      // },
      // {
      //   _id: 1,
      //   text: 'Hey there, nice to meet you! I look forward to connecting with.',
      //   createdAt: new Date(),
      //   user: {
      //     _id: 2,
      //     name: '{Name}',
      //     avatar: 'https://cdn-icons-png.freepik.com/512/145/145865.png',
      //   },
      // },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
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

const styles = StyleSheet.create({
    sendIcon: {
        marginRight: '8%', 
        marginBottom: '15%',
    }
})