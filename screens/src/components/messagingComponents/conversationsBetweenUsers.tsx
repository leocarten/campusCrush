import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'
import Header from '../feedComponents/header';;
import { feedHeadingBackground } from '../../styles/feedStyles/feedColors';;
import { feedBackgroundColor } from '../../styles/feedStyles/feedColors';;
const MessagesBetweenUsers = ({ name }) => {
    return (
        <Text>
            hi
        </Text>
    );

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