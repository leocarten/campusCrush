import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'
import Header from './src/components/feedComponents/header';
import { feedBackgroundColor } from './src/styles/feedStyles/feedColors';
import { feedHeadingBackground } from './src/styles/feedStyles/feedColors';
import Footer from './src/components/feedComponents/footer';
import { SendUserMessage } from './src/components/messagingComponents/sendMessage';
import io from "socket.io-client"
import { getSecureValues } from '../authentication/getValue';


const MessagesBetweenUsers = ({ route }) => {

    const navigation = useNavigation();
    // const { originSenderId, originRecId, name, page, isFirstMessage, recieverID } = route.params;
    const { conversationID, originSenderId, originRecId, name, page, isFirstMessage, recieverID } = route.params;

    console.log(name);
    console.log('MessagesBetweenUsers, first message: ',isFirstMessage)
    console.log('MessagesBetweenUsers, origin sender id:',originSenderId);
    console.log('MessagesBetweenUsers, origin rec id:',originRecId);

    if(isFirstMessage != true){
        console.log("Need to load messages HERE!");

        console.log("\n\nYOO, THIS IS WHERE THE WEB SOCKET SHOULD BE!! This file is UsersConversations.js\n");

        // create websocket with convoID
        const WebSocketServerURL = 'http://18.188.112.190:5002';
        const socket = io.connect(WebSocketServerURL);

        socket.emit('join_conversation', conversationID);

        // // Testing
        // socket.emit('send_message', {
        //     jwt: getSecureValues('access'),
        //     convoID: conversationID,
        //     id1: originSenderId,
        //     id2: originRecId,
        //     messageContent: "shaddup",
        //     typeOfVerification: "access"
        // });


        // When the user presses the back arrow, i need to disconnect from the socket and then re-fresh the convos page

        return (
            <LinearGradient
            colors={feedBackgroundColor}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}>
            <SafeAreaView style={{backgroundColor: feedHeadingBackground}}>
                <Header onFeedPage={page} name={name}/>
            </SafeAreaView>
            <SendUserMessage isFirstMessage={false} recID={originRecId} sendID={originSenderId} socket={socket} conversationID={conversationID} originSenderId={originSenderId} originRecId={originRecId}/>
            <View style={{marginBottom: '0%', backgroundColor: 'white'}}><Text style={{color: 'transparent', fontSize: 25}}>hi</Text></View>
            </LinearGradient>
        );
    }
    else{

        console.log("Im in message:",name,recieverID);
        
        // use send first message endpoint
        return (
            <LinearGradient
            colors={feedBackgroundColor}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}>
            <SafeAreaView style={{backgroundColor: feedHeadingBackground}}>
            <Header onFeedPage={page} name={name}/>
            </SafeAreaView>

            <SendUserMessage isFirstMessage={true} recID={recieverID}/>
            <View style={{marginBottom: '0%', backgroundColor: 'white'}}><Text style={{color: 'transparent', fontSize: 25}}>hi</Text></View>
            
            </LinearGradient>
        );
    }

}

const styles = StyleSheet.create({
    heading: {
        marginTop: '3%',
        marginBottom: '3%',
        marginLeft: '3%',
        marginRight: '3%',
        padding: 8,
        borderRadius: 5,
        backgroundColor: '#D1D1D1'
    },
    container: {
      flex: 1,
      justifyContent: 'flex-start', 
    },
    filter: {
        fontSize: 22
    }
})

export default MessagesBetweenUsers;