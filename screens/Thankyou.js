import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View, ScrollView, TextInput } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { backgroundColor } from './src/styles/backgroundColors';
import { Ionicons } from '@expo/vector-icons';
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
    <Text style={styles.firstText}>[Icon]</Text>
    <View style={styles.icon} />
    <ScrollView>
    {/* <Steps count={5} directions={"Terms and Services"} style={{alignItems: 'left'}}/> */}
    {/* <HorizontalIconLine count={5}  /> */}

    <View style={styles.viewContainer}>
      <Text style={styles.text}><Text style={{fontWeight:'bold'}}>Thank you</Text> for choosing CampusCrush. CampusCrush has very cool and distinct features, and we are excited to begin this journey with you.</Text>
      <Text style={styles.text}>As you interact with CampusCrush, please feel free to leave us feedback. We are always happy to hear back from our users!</Text>
    </View>

    <TouchableOpacity style={styles.showMeFeed} onPress={nextPage}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Go to feed <Ionicons name="arrow-forward" size={20} color="black" /></Text>
    </TouchableOpacity>
    </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  showMeFeed:{
    alignSelf:'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    padding: 5
  },
  text:{
    fontSize:18,
    marginBottom: '3%'
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