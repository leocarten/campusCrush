import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import Header from './src/components/feedComponents/header';
import { feedHeadingBackground } from './src/styles/feedStyles/feedColors';
import Footer from './src/components/feedComponents/footer';
import ItemInFeed from './src/components/feedComponents/itemInFeed';
import { totalBackground } from './src/styles/feedStyles/feedColors';
import { feedBackgroundColor } from './src/styles/feedStyles/feedColors';

const Feed = () => {
  const navigation = useNavigation();
  navigation.canGoBack(false);

  return (
    <LinearGradient
    colors={feedBackgroundColor}
    style={styles.container}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}>
    <SafeAreaView style={{backgroundColor: feedHeadingBackground}}>
      <Header onFeedPage={1}/>
    </SafeAreaView>
    <ScrollView>
      <View style={{marginTop: '2%'}}></View>
      <ItemInFeed Name={"Alessandra"} Age={"20"} Comp={"83"} Bio={"Hey! I'm looking to have a good time and meet new people!"} AppReason={3} Interests={["Model-building", "Piano playing", "Drawing"]}/>
      <ItemInFeed Name={"Molly"} Age={"18"} Comp={"74"} Bio={"Hi there! I'm a spontaneous adventurer with a passion for trying new things. Whether it's exploring hidden gems in the city or embarking on last-minute road trips, I'm always up for a good time and making connections. Let's create some unforgettable memories together!"} AppReason={3} Interests={["Model-building", "Piano playing", "Sports"]}/>
      <ItemInFeed Name={"Madison"} Age={"23"} Comp={"85"} Bio={"Hey, I'm a laid-back soul who finds joy in the simple pleasures of life. From cozy movie nights to impromptu picnics in the park, I believe in making every moment count. If you're someone who enjoys laughter, good conversation, and a carefree vibe, we might just hit it off!"} AppReason={1} Interests={["Sports", "Food", "Cooking"]}/>
      <ItemInFeed Name={"Hailey"} Age={"22"} Comp={"87"} Bio={"Greetings! I'm a music enthusiast with a knack for finding the best local gigs in town. Whether it's indie rock or jazz, I'm always down for a night of great tunes and even better company. If you share a love for live music and a good laugh, swipe right and let's make some concert memories!"} AppReason={2} Interests={["Chess", "Reading", "Music", "Theater"]}/>
      <ItemInFeed Name={"Maria"} Age={"19"} Comp={"79"} Bio={"Hello! I'm a foodie at heart, constantly on the lookout for the next culinary adventure. Whether it's exploring trendy food trucks or experimenting in the kitchen, my taste buds are always ready for a flavor-packed experience. If you're into discovering new cuisines and appreciate good company, let's spice up each other's lives!"} AppReason={3} Interests={["Working out", "Concerts", "Tennis", "Softball"]}/>



    </ScrollView>
    
    <View style={styles.footer}>
      <Footer/>
    </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: feedHeadingBackground,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginTop: 20, 
    marginBottom: 60, 
    marginLeft: '10%',
    marginRight: '10%'
  },
  next: {
    backgroundColor: 'transparent',
    padding: 6,
    height: 40,
    alignSelf: 'center',
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 10,
  },
    center: {
        alignContent: 'center',
    },
    container: {
      flex: 1,
      justifyContent: 'flex-start', 
    //   alignItems: 'center', 
    },
    firstText: {
        marginTop: '25%',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center'
      },
      welcome: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'left',
        marginLeft: '2%',
      },
      campusCrush: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
      },
      icon: {
        width: 50,
        height: 50,
        backgroundColor: 'black',
        marginBottom: '10%',
        alignSelf: 'center'
      },
      inputBox: {
        height: 40,
        paddingHorizontal: 10,
        color: 'black',
        borderWidth: 0,
        borderColor: 'black',
        paddingVertical: 10,
        width: '75%',
        fontSize: 20,
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: '5%',
      },
      
      iconContainer: {
        paddingLeft: 10,
        paddingRight: 5,
      },
      buttonFont: {
        fontSize: 22,
        fontWeight: '600',
        color: 'rgba(0, 0, 0, 0.8)',
      }
})

export default Feed;