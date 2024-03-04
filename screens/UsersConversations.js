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

const MessagesBetweenUsers = ({ route }) => {

    const navigation = useNavigation();
    const { conversationID, name } = route.params;
    console.log(name);


    return (
        <LinearGradient
        colors={feedBackgroundColor}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <SafeAreaView style={{backgroundColor: feedHeadingBackground}}>
        <Header onFeedPage={10} name={name}/>
        </SafeAreaView>

        <SendUserMessage/>
        <View style={{marginBottom: '0%', backgroundColor: 'white'}}><Text style={{color: 'transparent', fontSize: 25}}>hi</Text></View>

        
        {/* <View style={styles.footer}>
        <Footer/>
        </View> */}
        

        </LinearGradient>
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