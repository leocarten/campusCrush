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

const Thankyou = () => {
  const navigation = useNavigation();
  const nextPage = () => {
    navigation.navigate('Feed');
  };

  const [username, setUsername] = useState('');

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

      <View style={styles.viewContainer}>
      <Text style={styles.congrats}>Congradulations, {getVariables()['firstname']}!</Text>
        {/* <Text style={styles.heading}>Your account has been created <AntDesign name="check" size={22} color="black" /></Text> */}
        <Text style={styles.text}>Welcome aboard, and thank you for choosing CampusCrush! Explore the unique features, connect with others, and make the most of your CampusCrush experience. We are excited to start this journey with you!</Text>
        <Text style={styles.text}>As you interact with CampusCrush, please feel free to leave us feedback. We are always happy to hear back from our users!</Text>
        <Text style={styles.sincerely}>Sincerely,</Text>
        <Text style={styles.signature}>The CampusCrush Team</Text>
      </View>

      <TouchableOpacity style={styles.showMeFeed} onPress={nextPage}>
        <Text style={{fontSize: 20, fontWeight: 'bold', padding: 3}}>Go to feed <Ionicons name="arrow-forward" size={20} color="black" /></Text>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  congrats:{
    textAlign: 'center',
    fontSize: 25,
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

export default Thankyou;