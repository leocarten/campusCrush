import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'
import Header from './src/components/feedComponents/header';
import { feedHeadingBackground } from './src/styles/feedStyles/feedColors';
import { feedBackgroundColor } from './src/styles/feedStyles/feedColors';
import MessagesComponent from './src/components/messagingComponents/message';
import DisplayConvoComponent from '../endpoints/getConversations';
import { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';


const MessagesPage = ({ route }) => {
  const { refresh } = route.params;
  const [updateCount, setUpdateCount] = useState(0);

  const refreshData = () => {
    setUpdateCount(prevCount => prevCount + 1);
  };

  useFocusEffect(
    React.useCallback(() => {
      console.log('Messages screen focused');
      refreshData();
      return () => {
      };
    }, [])
  );

  
  return (
    <LinearGradient
      colors={feedBackgroundColor}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}>
      <SafeAreaView style={{ backgroundColor: feedHeadingBackground }}>
        <Header onFeedPage={3} />
      </SafeAreaView>

      <ScrollView style={{ marginBottom: '10%' }}>
        <DisplayConvoComponent key={updateCount} />
      </ScrollView>
    </LinearGradient>
  );
};


const styles = StyleSheet.create({
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
    }
})

export default MessagesPage;