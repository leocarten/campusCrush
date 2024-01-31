import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import ItemInFeed from './src/components/feedComponents/itemInFeed';
import { getItemsInFeed } from '../endpoints/GetItemsForFeed';
import { ActivityIndicator } from 'react-native';

function calculateAge(birthdate) {
    const birthDateObject = new Date(birthdate);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDateObject.getFullYear();
  
    const hasBirthdayOccurred = (
      currentDate.getMonth() > birthDateObject.getMonth() ||
      (currentDate.getMonth() === birthDateObject.getMonth() &&
       currentDate.getDate() >= birthDateObject.getDate())
    );
  
    return hasBirthdayOccurred ? age : age - 1;
  }

const DisplayItems = () => {
  const [feedItems, setFeedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getItemsInFeed();
        setFeedItems(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    // Render a loading indicator or message while data is being fetched
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '70%' }}>
        <ActivityIndicator size="large" color="#3A3A3A"/>
      </View>
    );
  }

  // going to have to clean the data here i guess
  for(var i = 0; i < feedItems.length; i++){
    // AGE
    if(feedItems[i]['dob'] != null && feedItems[i]['dob'].length > 10){
        feedItems[i]['dob'] = calculateAge(feedItems[i]['dob'].slice(0, 10));
    }

    // IS_VERIFIED
    if(feedItems[i]['is_verified'] == null){
      feedItems[i]['is_verified'] = 0;
  }

    // INTERESTS
    if(feedItems[i]['interests'] == null || feedItems[i]['interests'].length == 0){
      feedItems[i]['interests'] = [""];
    }
    else{
      if(typeof feedItems[i]['interests'] === 'string'){
        feedItems[i]['interests'] = feedItems[i]['interests'].split(',') 
      }
    }

    // MUSIC
    if(feedItems[i]['music_preference'] == null || feedItems[i]['music_preference'].length == 0){
      feedItems[i]['music_preference'] = [""];
    }
    else{
      if(typeof feedItems[i]['music_preference'] === 'string'){
        feedItems[i]['music_preference'] = feedItems[i]['music_preference'].split(',') 
      }
    }

    // JOB
    if(feedItems[i]['job'] == null || feedItems[i]['job'].length == 0){
      feedItems[i]['job'] = [""];
    }
  } 
  
  return (
    <View>
      {feedItems.map((item, index) => ( 
        <ItemInFeed
          key={index}
          isVerified={item.is_verified} 
          Name={item.first_name}
          Age={item.dob}
          Comp={81}
          Bio={item.bio}
          AppReason={item.app_purpose}
          Interests={item.interests}
          Music={item.music_preference}
          Job={item.job}
        />
      ))}
    </View>
  );
};

export default DisplayItems;
