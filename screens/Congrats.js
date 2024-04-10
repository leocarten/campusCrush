import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View, ScrollView, TextInput } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { backgroundColor } from './src/styles/backgroundColors';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { getVariables } from './globalVariables/GlobalVariables';
import ConfettiCannon from 'react-native-confetti-cannon';
import { SafeAreaView } from 'react-native-safe-area-context';
import MovingIcon from './src/components/movingIcon';
import { Entypo } from '@expo/vector-icons';


const Congrats = ({route}) => {
    const { spin } = route.params;

    const navigation = useNavigation();

    const handleClick = () => {
      navigation.navigate('Feed');
    };

  return (
    <LinearGradient
    colors={backgroundColor}
    style={styles.container}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}>
    <SafeAreaView>
      <View style={{marginTop:'3%', marginBottom: '3%', alignSelf: 'center'}}>
        <MovingIcon/>
      </View>
      <ConfettiCannon 
      count={200} 
      origin={{x: 0, y: 0}} 
      fallSpeed={2200}
      fadeOut={true}
      />
      <ScrollView>
      {/* <Steps count={5} directions={"Terms and Services"} style={{alignItems: 'left'}}/> */}
      {/* <HorizontalIconLine count={5}  /> */}

        <View style={{marginBottom: '40%'}}>
            <Text style={{textAlign: 'center', fontSize: 30, fontWeight: '600', marginBottom: '20%'}}>Congratulations!</Text>
            <Text style={{textAlign: 'center', fontSize: 20, fontWeight: '400', color: '#333', marginLeft: '3%', marginRight: '3%'}}>{spin['message']}</Text>
            <Text style={{textAlign: 'center', fontSize: 20, fontWeight: '400', color: '#333', marginTop: '3%'}}>Your new balance is {spin['newBalance']} tokens.</Text>

        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.next} onPress={handleClick}>
                <Text style={styles.buttonFont}> <Entypo name="arrow-with-circle-left" size={24} color="black"/> Go Back</Text>
            </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    buttonFont: {
        fontSize: 22,
        fontWeight: '600',
        color: 'rgba(0, 0, 0, 0.8)',
      },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        marginTop: 20, 
        marginBottom: 60, 
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '50%'
      },
    next: {
        backgroundColor: 'transparent',
        padding: 7,
        height: 40,
        alignSelf: 'center',
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 10,
      },
  congrats:{
    textAlign: 'center',
    fontSize: 24,
    marginBottom: '5%'
  },
  heading:{
    textAlign: 'center',
    fontSize: 22,
    marginBottom: '5%'
  },
  signature: {
    fontSize: 18,
  },
  showMeFeed:{
    alignSelf:'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    padding: 5,
    marginTop: '50%'
  },
  text:{
    fontSize:18,
    marginBottom: '3%',
  },
  sincerely:{
    fontSize:18,
    marginBottom: '3%',
    marginTop: '6%'
  },
  viewContainer:{
    marginBottom: '3%',
    marginTop:'3%',
    marginLeft:'3%',
    marginRight: '3%',

  },
    container: {
      flex: 1,
      justifyContent: 'flex-start', 
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
      icon: {
        width: 50,
        height: 50,
        backgroundColor: 'black',
        marginBottom: '10%',
        alignSelf: 'center'
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
})

export default Congrats;