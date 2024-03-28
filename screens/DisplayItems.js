import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import ItemInFeed from './src/components/feedComponents/itemInFeed';
import { getItemsInFeed } from '../endpoints/GetItemsForFeed';
import { ActivityIndicator } from 'react-native';
import NoItemsFoundInFeed from './src/components/feedComponents/noItemsFoundInFeed';
import { Button } from 'react-native';
import { RefreshControl } from 'react-native';

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
  

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await getItemsInFeed();
  //       setFeedItems(result);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

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

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = () => {
    console.log("Refresh")
  }

  const handleRefresh = () => {
    fetchData(); // Fetch items again when refreshing
  };

  // const handleRefresh = () => {
  //   setLoading(true); // Set loading state to true
  //   fetchData(); // Fetch items again when the refresh button is clicked
  // };


  if (loading) {
    // Render a loading indicator or message while data is being fetched
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '0%' }}>
        <ActivityIndicator size="large" color="#3A3A3A"/>
      </View> 
    ); 
  }

  // going to have to clean the data here i guess
  if(feedItems.length != 0){ // make sure there are people
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

    console.log("feed items:",feedItems);
    
    return (
      <ScrollView
      refreshControl={
        <RefreshControl onRefresh={handleRefresh} />
      }
      >
      <View>
        {feedItems.map((item, index) => ( 
          <ItemInFeed
            key={item.id}
            userID={item.id}
            isVerified={item.is_verified} 
            Name={item.first_name}
            Age={item.dob}
            Comp={81}
            Bio={item.bio}
            AppReason={item.app_purpose}
            Interests={item.interests}
            Music={item.music_preference}
            Job={item.job}
            KeyToHeart={item.win_my_heart}
            BucketList={item.bucket_list}
            has_tattoos={item.has_tattoos}
            workout={item.workout}
            sleep_schedule={item.sleep_schedule}
            Communication_style={item.communication_style}
            Ideal_first_meetup={item.ideal_first_meetup}
            Distance={item.distance}
          />
        ))}
      </View>
      </ScrollView>
    );
  }
  else{
    return(
      <View>
        <NoItemsFoundInFeed/>
      </View>
    );
  }
};

export default DisplayItems;



