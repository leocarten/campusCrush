import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import { Text, View, ScrollView, TextInput } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { backgroundColor } from './src/styles/backgroundColors';

const Thankyou = () => {
  const navigation = useNavigation();
  const lastPage = () => {
    navigation.navigate('CreateAcc3');
  };
  const nextPage = () => {
    navigation.navigate('Thankyou');
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

    <Text>Thank you for choosing CampusCrush. Let's begin this journey together.</Text>

    {/* <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.next} onPress={lastPage}>
        <Text style={styles.buttonFont}><Entypo name="arrow-with-circle-left" size={26} color="black"/> Back</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.next} onPress={nextPage}>
        <Text style={styles.buttonFont}>Accept and Finish <AntDesign name="checkcircleo" size={26} color="black" /></Text>
      </TouchableOpacity>
    </View> */}


    </ScrollView>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
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

export default Thankyou;