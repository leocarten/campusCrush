import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'
import Header from '../src/components/feedComponents/header';
import { feedBackgroundColor } from '../src/styles/feedStyles/feedColors';
import { feedHeadingBackground } from '../src/styles/feedStyles/feedColors';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ErrorPage = ({ route }) => {
  const navigation = useNavigation();
  const { icon, body, message, page } = route.params;
  let real_icon;
  if(icon == 1){ // error with login
    real_icon = <MaterialIcons name={'error-outline'} size={70} color='red'/>;
  }else if(icon == 2){
    real_icon = <MaterialCommunityIcons name="message-lock" size={70} color="black" />
  }else if(icon == 3){
    real_icon = <MaterialIcons name="money-off" size={70} color="black" />
  }


  return (
    <LinearGradient
    colors={feedBackgroundColor}
    style={styles.container}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}>
    <SafeAreaView style={{backgroundColor: feedHeadingBackground}}>
      <Header onFeedPage={page}/>
    </SafeAreaView>

    <ScrollView>
        <View style={styles.errorMessage}>
            <Text style={styles.errorIcon}>
                {real_icon}
            </Text>
            <Text style={styles.error}>
                {body}
            </Text>
            <Text style={styles.errorText}>
                {message}
            </Text>
        </View>
    </ScrollView>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    error:{
        textAlign: 'center',
        marginBottom: '3%',
        fontSize: 25,
        fontWeight: 'bold'
    },
    errorText: {
        fontSize: 20,
        textAlign: 'center',
    },
    errorMessage: { 
        marginTop: '3%',
        marginLeft: '3%',
        marginRight: '3%',
        marginBottom: '3%',
    },
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
    },
    errorIcon: {
        textAlign: 'center',
        marginTop: '40%',
        marginBottom: '2%',
        color: 'red'
    }
})

export default ErrorPage;