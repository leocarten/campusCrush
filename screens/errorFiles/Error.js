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

const ErrorPage = ({ route }) => {
  const navigation = useNavigation();
  const { message } = route.params;
  return (
    <LinearGradient
    colors={feedBackgroundColor}
    style={styles.container}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}>
    <SafeAreaView style={{backgroundColor: feedHeadingBackground}}>
      <Header onFeedPage={6}/>
    </SafeAreaView>

    <ScrollView>
        <View style={styles.errorMessage}>
            <Text style={styles.errorIcon}>
                <MaterialIcons name="error-outline" size={70}/>
            </Text>
            <Text style={styles.error}>
                INVALID CREDENTIALS
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
        fontSize: 20
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