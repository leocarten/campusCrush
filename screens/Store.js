import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'
import Header from './src/components/feedComponents/header';
import { feedHeadingBackground } from './src/styles/feedStyles/feedColors';
import { feedBackgroundColor } from './src/styles/feedStyles/feedColors';
import StoreItem from './src/components/storeComponents/itemInStore';
import GradientText from './src/styles/gradientText';
import { TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons'; 
import MovingIcon from './src/components/movingIcon';


const FilterPage = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
    colors={feedBackgroundColor}
    style={styles.container}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}>
    <SafeAreaView style={{backgroundColor: feedHeadingBackground}}>
      <Header onFeedPage={4}/>
    </SafeAreaView>
    {/* <Text>
        Make a message from a bot that says thank you and introduce them to the app!!
    </Text> */}

    
    <ScrollView style={{marginBottom: '10%'}}>

      <View style={styles.logoContainer}>
        <MovingIcon/>
        <GradientText colors={['#cc2b5e', '#753a88']} style={styles.campusCrush}>
            CampusCrush Store
        </GradientText>
      </View>
        
        <View style={styles.heading}>
          <Text style={styles.filter}>
            {/* &#128188; Redeem the points you've earned to earn CampusCrush features... */}
            Redeem the points you've earned to earn CampusCrush features...
          </Text>
          <TouchableOpacity>
                <View>
                    <Text style={styles.info}><Ionicons name="ios-information-circle-outline" size={20} color="gray" /> Learn about how points are earned</Text>
                </View>
            </TouchableOpacity>
        </View>

        <StoreItem name={"2 hour Top Placement"} emoji={<Text>&#128285;</Text>} text={"Claim the top spot with our Featured Profile Boost! Your profile will be strategically positioned at the very top of users' feeds, giving you unmatched visibility and a kick start in the quest for meaningful connections."} points={"75"}/>
        <StoreItem name={"Match Making Roulette"} emoji={<Text>&#127920;</Text>} text={"Get paired with others who also want to make a random connection! This can be used to help create connections if you are having a hard time getting started!"} points={"150"}/>
        <StoreItem name={"Go on a Blind Date"} emoji={<Text>&#128140;</Text>} text={"Some say love is blind, and that we see with our hearts. Try our blind date feature, where you will be paired with another person, but can only see their Bitmoji! If both users agree to reveal profiles, it's considered a match!"} points={"125"}/>
        <StoreItem name={"Respond and send 1 extra message"} emoji={<Text>&#128258;</Text>} text={"Out of messages for the day? No worries, redeem an extra for a low cost!"} points={"50"}/>
        <StoreItem name={"Lottery spin"} emoji={<Text>&#128176;</Text>} text={"For 50 tokens, you have a chance to win 30 to 200 tokens. Becareful, there is a chance you could lose a few!"} points={"50"}/>


    </ScrollView>
    
    {/* <View style={styles.footer}>
      <Footer/>
    </View> */}

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  logoContainer:{
    flexDirection: 'row', 
    alignItems: 'center',
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.22,
    elevation: 3,
  },
    heading: {
        marginTop: '1%',
        marginBottom: '3%',
        marginLeft: '3%',
        marginRight: '3%',
        padding: 8,
        // borderRadius: 5,
        borderColor: '#ABABAB',
        borderBottomWidth: 3,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 1.00,

        elevation: 1,
    },
    container: {
      flex: 1,
      justifyContent: 'flex-start', 
    },
    filter: {
        fontSize: 22
    },
    campusCrush: {
      fontSize: 30,
      fontWeight: 'bold',
      textShadowColor: 'rgba(0, 0, 0, 0.9)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 3,
      marginTop: '3%',
      marginBottom: '3%',
    },
    info: {
      fontSize: 16,
      marginTop: '3%',
      color: 'gray'
    },
})

export default FilterPage;