import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, TouchableOpacity, Text, View, ScrollView, TextInput, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { backgroundColor } from './src/styles/backgroundColors';
import { Ionicons, AntDesign, Entypo, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { getVariables } from './globalVariables/GlobalVariables';
import ConfettiCannon from 'react-native-confetti-cannon';
import MovingIcon from './src/components/movingIcon';
import Header from './src/components/feedComponents/header';
import { feedHeadingBackground, iconColors, feedBackgroundColor } from './src/styles/feedStyles/feedColors';
import DropdownComponent from './src/components/dropDown';
import UserInputSlider from './src/components/filterComponents/Slider';
import GradientText from './src/styles/gradientText';
import { deleteConversation } from '../endpoints/DeleteConversation';
import { Alert } from 'react-native';
import { expandedIconColor } from './src/styles/feedStyles/feedColors';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const ChatSettingsPage = ({route}) => {
    const navigation = useNavigation();

    const { params } = route;
    const { name, conversationID, id1, id2, id3 } = params;

    const deleteConvo = async () => {
      Alert.alert(
        "Warning",
        `This action will delete this conversation for both you and ${name}.\n\nAre you sure you want to permanently delete the conversation with ${name}?`,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { 
            text: "Yes, delete.", 
            onPress: async () => {
              const deleteResult = await deleteConversation(conversationID, id1, id2, id3);
              navigation.navigate('Messages', {refresh: true})
            }
          }
        ],
        { cancelable: false }
      );
    }

  return (
    <LinearGradient
    colors={feedBackgroundColor}
    style={styles.container}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}>
    <SafeAreaView style={{backgroundColor: feedHeadingBackground}}>
      <Header onFeedPage={9}/>
    </SafeAreaView>
    <ScrollView>

    <View style={styles.innerContainer}>

        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>
            <Feather name="settings" size={24} color='black'/> Chat settings
          </Text>
        </View>

        <TouchableOpacity style={styles.optionContainer}>
          <Text style={styles.optionText}>
          <Entypo name="magnifying-glass" size={18} color="black" /> View {name}'s profile
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={deleteConvo} style={styles.optionContainer}>
          <Text style={styles.optionText}>
          <FontAwesome name="trash" size={18} color="black" /> Delete conversation with {name}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionContainer}>
          <Text style={styles.optionText}>
          <Entypo name="block" size={17} color="black" /> Block {name}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionContainer}>
          <Text style={styles.optionText}>
          <Entypo name="flag" size={18} color="black" /> Report {name}
          </Text>
        </TouchableOpacity>

      </View>


    </ScrollView>
    
    {/* <View style={styles.footer}>
      <Footer/>
    </View> */}

    </LinearGradient>
  );
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      justifyContent: 'flex-start', 
    },
    innerContainer: {
      paddingHorizontal: '5%', 
    },
    headingContainer: {
      marginTop: '10%',
      marginBottom: '8%', 
    },
    headingText: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#333',
    },
    optionContainer: {
      backgroundColor: '#F5F5F5',
      borderRadius: 10,
      paddingVertical: 15,
      paddingHorizontal: 20,
      marginBottom: 15, 
      elevation: 3, 
      shadowColor: 'black',
      shadowOpacity: .4,
      shadowRadius: 3,
      shadowOffset: { width: 0, height: 2 },
    },
    optionText: {
      fontSize: 16,
      color: '#333',
    },

})

export default ChatSettingsPage;