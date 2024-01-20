import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'
import Header from './src/components/feedComponents/header';
import { feedHeadingBackground } from './src/styles/feedStyles/feedColors';
import { feedBackgroundColor } from './src/styles/feedStyles/feedColors';
import MessagesComponent from './src/components/messagingComponents/message';

const FilterPage = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
    colors={feedBackgroundColor}
    style={styles.container}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}>
    <SafeAreaView style={{backgroundColor: feedHeadingBackground}}>
      <Header onFeedPage={3}/>
    </SafeAreaView>
    {/* <Text>
        Make a message from a bot that says thank you and introduce them to the app!!
    </Text>
    <Text>
      TELL THE USER HOW THE APP WORKS, HOW MESSAGING WORKS (LIMITS), AND HOW POINTS ARE USED!!
    </Text> */}

    
    <ScrollView style={{marginBottom: '10%'}}>
        <MessagesComponent name={"Owen"} hasBeenOpened={false} messageContent={"Sup"} wasRecieved={true}/>
        <MessagesComponent name={"Allison"} hasBeenOpened={true} messageContent={"I like your shirt in the 5th picture you have!"} wasRecieved={true}/>
        <MessagesComponent name={"Bailey"} hasBeenOpened={true} messageContent={"Hi Bailey, how was your day today?"} wasRecieved={false}/>
        <MessagesComponent name={"Marissa"} hasBeenOpened={false} messageContent={"We have a lot in common! Do you want to meetup sometime?"} wasRecieved={true}/>

    </ScrollView>


    
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

export default FilterPage;