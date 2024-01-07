import React from "react"
import { Text, TouchableOpacity } from "react-native"
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { iconColors } from "../../styles/feedStyles/feedColors";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import GradientText from "../../styles/gradientText";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MessagesComponent = () => {
    return(

        <TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.name}>
                    Madison
                </Text>

                <View style={styles.messageContainer}>

                    <View style={styles.notificationIcon}>
                        <GradientText colors={['#cc2b5e', '#753a88']}>
                            <Text>
                                <FontAwesome name="circle" size={20} />
                            </Text>
                        </GradientText>
                    </View>

                    <View style={styles.icon}>
                    </View>

                    <View style={styles.center}>
                        <Text style={styles.messageContent} numberOfLines={1}>
                                Hello. I want to get to know you better, how are you doing?
                        </Text>
                        <Text style={styles.iconState}>
                            <Ionicons name="return-down-back" size={24} color={iconColors} />
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
        marginRight: '2%'
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
        width: '80%',
        fontWeight: '500'
    },
    messageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
    },
    container:{
        marginLeft:'3%',
        marginRight:'3%',
        marginTop:'3%',
        marginBottom:'1%',
        borderColor: iconColors,
        paddingBottom: '2%',
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
        fontSize: 21,
        fontWeight: '600'
    }
    
});

export default MessagesComponent;