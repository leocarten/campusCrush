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
import { FontAwesome5 } from '@expo/vector-icons';
import { iconColors } from './src/styles/feedStyles/feedColors';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const FilterPage = () => {
  const navigation = useNavigation();

  const handleHowToEarnPoints = () => {
    navigation.navigate("HowToEarnPoints");
  }

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
            Redeem the CampusCrush tokens you've earned to recieve CampusCrush features...
          </Text>
          <TouchableOpacity onPress={handleHowToEarnPoints}>
                <View>
                    <Text style={styles.info}><Ionicons name="ios-information-circle-outline" size={20} color="gray" /> Learn about how points are earned</Text>
                </View>
            </TouchableOpacity>
        </View>

          <StoreItem item={1} name={"2 hour Top Placement"} emoji={<Text><FontAwesome5 name="level-up-alt" size={60} color={iconColors} /></Text>} text={"Claim the top spot of everyones feed with our Profile Boost! "} points={"75"}/>
          <StoreItem item={2} name={"Go on a Blind Date"} emoji={<Text><FontAwesome name="low-vision" size={60} color={iconColors} /></Text>} text={"Be paired up, but only their Bitmoji is visible to you!"} points={"125"}/>
          <StoreItem item={3} name={"Send 1 extra message"} emoji={<Text><MaterialCommunityIcons name="message-plus-outline" size={60} color={iconColors} /></Text>} text={"Earn an extra message with this item!"} points={"100"}/>
          <StoreItem item={4} name={"Lottery spin"} emoji={<Text><MaterialCommunityIcons name="treasure-chest" size={60} color={iconColors} /></Text>} text={"For 50 tokens, you have a chance to win 30 to 200 tokens!"} points={"50"}/>
          <StoreItem item={5} name={"Message Viewer"} emoji={<Text><FontAwesome5 name="search" size={57} color={iconColors}  /></Text>} text={"See when others read your message for the next 24hrs."} points={"75"}/>

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
        // marginTop: '1%',
        marginBottom: '3%',
        marginLeft: '3%',
        marginRight: '3%',
        padding: 8,
        // borderRadius: 5,
        borderColor: '#ABABAB',
        borderBottomWidth: 1,
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
      fontSize: 18,
      lineHeight: 24,
      marginBottom: '3%',
      color: '#333',
      fontWeight: '500'
    },
    campusCrush: {
      fontSize: 26,
      fontWeight: 'bold',
      textShadowColor: 'rgba(0, 0, 0, 0.9)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 2,
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