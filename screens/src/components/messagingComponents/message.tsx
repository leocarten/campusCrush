import React from "react"
import { Text, TouchableOpacity } from "react-native"
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { iconColors } from "../../styles/feedStyles/feedColors";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import GradientText from "../../styles/gradientText";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'


const MessagesComponent = ({ conversationID, originSenderId, originRecId, name, hasBeenOpened, messageContent, wasRecieved, recID, reqID, IdOfPersonWhoSentLastMessage }) => {
    const navigation = useNavigation();
    // key={index}
    // // conversationID={conversation.id}
    // originSenderId={conversation.originalSenderID}
    // originRecId={conversation.originalRecieverID}
    // name={"test"}
    // hasBeenOpened={conversation.hasOpenedMessage}
    // messageContent={conversation.mostRecentMessage}
    // recID={123}
    console.log('in MessagesComponent, senderID:',originSenderId);
    console.log('in MessagesComponent, recID:',originRecId);

    const handleMessageTap = () => {
        // go to convo screen with name
        console.log("You just clicked on a conversation with:",name);
        navigation.navigate("MessagesBetweenUsers", {originSenderId:originSenderId, originRecId: originRecId, name: name, page: 10, isFirstMessage: false, recieverID: recID});
    }

    let circle;
    let messageIcon;
    if(hasBeenOpened === 0 && (reqID != IdOfPersonWhoSentLastMessage)){
        circle = <FontAwesome name="circle" size={20} />;
    }
    else{
        circle = <FontAwesome name="circle" size={20} color='transparent'/>;
    }

    if(reqID != IdOfPersonWhoSentLastMessage){
        messageIcon = <Ionicons name="return-down-back" size={24} color={iconColors} />;
    }
    else{
        // messageIcon = <MaterialCommunityIcons name="send-check" size={24} color={iconColors} />;
        // messageIcon = <FontAwesome name="send" size={22} color={iconColors} />;
        messageIcon = <MaterialCommunityIcons name="send-check" size={24} color={iconColors}/>;
    }

    return(
        <TouchableOpacity onPress={handleMessageTap}>
            <View style={styles.container}>
                <Text style={styles.name}>
                    {name}
                </Text>

                <View style={styles.messageContainer}>

                    <View style={styles.notificationIcon}>
                        <GradientText colors={['#cc2b5e', '#753a88']}>
                            <Text>
                                {circle}
                            </Text>
                        </GradientText>
                    </View>

                    <View style={styles.icon}>
                    </View>

                    <View style={styles.center}>
                        <Text style={styles.messageContent} numberOfLines={1}>
                                {messageContent}
                        </Text>
                        <Text style={styles.iconState}>
                            {messageIcon}
                            {/* <Ionicons name="return-down-back" size={24} color={iconColors} /> */}
                            {/* <MaterialCommunityIcons name="send-check" size={24} color={iconColors} /> */}
                        </Text>
                    </View>

                </View>

            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    notificationIcon: {
        alignSelf: "center",
        marginRight: '1%'
    },
    iconState: {
        fontWeight: '600',
        marginLeft: '1%'
    },
    center: {
        alignSelf: "center",
        marginLeft: '5%',
        flexDirection: 'row',
        justifyContent: "flex-start", 
    },
    messageContent: {
        fontSize: 18,
        width: '78%',
        fontWeight: '400'
    },
    messageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
    },
    container:{
        marginLeft:'6%',
        marginRight:'3%',
        marginTop:'3%',
        marginBottom:'1%',
        borderColor: iconColors,
        paddingBottom: '3%',
        borderBottomWidth: 1
    },
    icon: {
        borderRadius: 30,
        width: 60,
        height: 60,
        backgroundColor: iconColors,
        marginBottom: '1%',
    },
    name: {
        marginBottom: '1%',
        fontSize: 22,
        fontWeight: '600',
        marginLeft: '6%'
    }
    
});

export default MessagesComponent;