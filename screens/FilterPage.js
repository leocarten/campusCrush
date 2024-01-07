import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'
import Header from './src/components/feedComponents/header';
import { feedHeadingBackground } from './src/styles/feedStyles/feedColors';
import { feedBackgroundColor } from './src/styles/feedStyles/feedColors';
import DropdownComponent from './src/components/dropDown';
import {Ionicons} from '@expo/vector-icons'; 
import UserInputSlider from './src/components/filterComponents/Slider';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const FilterPage = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
    colors={feedBackgroundColor}
    style={styles.container}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}>
    <SafeAreaView style={{backgroundColor: feedHeadingBackground}}>
      <Header onFeedPage={2}/>
    </SafeAreaView>
    <ScrollView>

        <View style={styles.heading}>
            <Text style={styles.filter}>
              {/* &#127919; Filter your feed to see what <Text style={{fontStyle: 'italic', fontWeight: 'bold'}}>you</Text> want to see */}
              &#127919; Filter your feed to see what <Text style={{fontStyle: 'italic', fontWeight: 'bold'}}>you</Text> want to see...
            </Text>
            <Text style={styles.info}><Ionicons name="ios-information-circle-outline" size={20} color="gray" /> Free account can only select a maximum of 2 filter options</Text>

        </View>

        <DropdownComponent initMessage="I want to see people who are ..." options={[{ label: 'Looking for a long-term relationship', value: '1' },{ label: 'Looking for a short-term relationship', value: '2' },{ label: 'Looking to meet new people', value: '3' },]} icon={<Ionicons name="person" size={20} color="black" style={{ marginRight: 5 }}/>} />

        <DropdownComponent initMessage="Show me verified users only" options={[{ label: 'True', value: '1' },{ label: 'False', value: '2' },]} icon={<FontAwesome5 name="user-check" size={18} color="black" style={{ marginRight: 5 }}/>} />

        <DropdownComponent initMessage="Has a bio" options={[{ label: 'True', value: '1' },{ label: 'False', value: '2' },]} icon={<MaterialCommunityIcons name="comment-quote" size={20} color="black" style={{ marginRight: 5 }}/>} />
      
        <DropdownComponent initMessage="Has at least 1 common interest" options={[{ label: 'True', value: '1' },{ label: 'False', value: '2' },]} icon={<FontAwesome5 name="people-arrows" size={20} color="black" style={{ marginRight: 5 }}/>} />

        <DropdownComponent initMessage="Has a high compatibility rate" options={[{ label: 'True', value: '1' },{ label: 'False', value: '2' },]} icon={<MaterialCommunityIcons name="handshake" size={24} color="black" style={{ marginRight: 5 }} />}/>

        <UserInputSlider/>

        <UserInputSlider/>


    </ScrollView>
    
    {/* <View style={styles.footer}>
      <Footer/>
    </View> */}

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    heading: {
        marginTop: '3%',
        // marginBottom: '3%',
        marginLeft: '3%',
        marginRight: '3%',
        padding: 8,
        borderRadius: 5,
        // backgroundColor: '#D1D1D1'
    },
    container: {
      flex: 1,
      justifyContent: 'flex-start', 
    },
    filter: {
        fontSize: 24
    },
    info: {
      fontSize: 16,
      marginTop: '3%',
      color: 'gray'
    },
})

export default FilterPage;