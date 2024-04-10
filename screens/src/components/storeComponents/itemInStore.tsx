import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import { iconColors } from '../../styles/feedStyles/feedColors';
import { Alert } from 'react-native';
import { lotterySpin } from '../../../../endpoints/LotterySpin';
import { useNavigation } from '@react-navigation/native';
import { buyAdditionalMessage } from '../../../../endpoints/BuyAdditionalMessage';

const handleClick = async (type, navigation) => {

    if(type === 1) {
        // Handle item 1 logic
    } else if(type === 2) {
        // Handle item 2 logic
    } else if(type === 3) {
        // Handle item 3 logic (buy additional message)
        Alert.alert(
            'Verification',
            "The additional message costs 100 tokens, are you sure you'd like to redeem this item?",
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Redeem',
                    onPress: async () => {
                        const spin = await buyAdditionalMessage();
                        if(spin === false){
                            navigation.navigate('ErrorPage', { 
                                icon: 3,
                                body: 'Insufficient funds',
                                message: 'Uh oh, do not have enough points to purchase this item. Continue to interact with CampusCrush to be awarded points, or purchase some!',
                                page: 3 // or whatever page name you want to pass
                              });
                        }
                        else{
                            spin['message'] = `You have purchased an additional message, hopefully you create a great connection!`
                            navigation.navigate('Congrats', { spin });
                        }
                    }
                },
            ],
            { cancelable: false }
        );



    } else if(type === 4) {
        Alert.alert(
            'Verification',
            "The lottery spin costs 50 tokens, are you sure you'd like to redeem this item?",
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Redeem',
                    onPress: async () => {
                        const spin = await lotterySpin();
                        if(spin === false){
                            navigation.navigate('ErrorPage', { 
                                icon: 3,
                                body: 'Insufficient funds',
                                message: 'Uh oh, do not have enough points to purchase this item. Continue to interact with CampusCrush to be awarded points, or purchase some!',
                                page: 3 
                              });
                        }
                        else{
                            spin['message'] = `Your spin won you ${spin['lotteryTokens']} tokens!`
                            navigation.navigate('Congrats', { spin });
                        }
                    }
                },
            ],
            { cancelable: false }
        );
    }
}

const StoreItem = ({ item, name, emoji, text, points })  => {
    const navigation = useNavigation();


    console.log("Item prop:", item);
    
    return (
        <View>
            <TouchableOpacity onPress={() => handleClick(item, navigation)}>
                <View style={styles.container}>
                    <Text style={styles.itemName}>
                        {name}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <Text style={styles.emoji}>
                                {emoji}
                            </Text>
                        </View>
                        <Text style={styles.itemText} numberOfLines={3}>
                            {text}
                        </Text>
                        <Text style={styles.points}>
                            {points} pts
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    itemName: {
        marginBottom: '2%',
        fontSize: 22,
        fontWeight: '600',
        color: '#333',
    },
    points: {
        alignSelf: 'center',
        fontSize: 20,
        marginLeft: '2%',
        color: iconColors,
        fontWeight: '600'
    },
    itemText: {
        alignSelf: 'center',
        marginLeft: '5%',
        fontSize: 18,
        width: '55%',
        color: '#333',
        fontWeight: '400'
    },
    container: {
        marginTop: '3%',
        marginBottom: '3%',
        marginLeft: '3%',
        marginRight: '3%',
        borderColor: '#BBBBBB',
        borderWidth: 3,
        borderRadius: 5,
        padding: 8,
        shadowColor: "#D8D8D8",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.4,
        shadowRadius: 0.1,

        elevation: 2,
    },
    emoji: {
        fontSize: 60,
        // marginBottom: '1%',
    },
    info: {
        fontSize: 16,
        marginTop: '3%',
        color: 'gray',
        marginBottom: '3%',
        marginLeft: '3%',
        marginRight: '3%',
      },
});


export default StoreItem;