import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const UserInputSlider = ({ type })  => {
  // let userValue;
  const [range, setRange] = useState([0, 100]);
  const [userValue, setUserValue] = useState([0, 100]);


  const handleSliderChange = (values) => {
    // setRange(values);
    setRange(values);
    setUserValue(values);
    console.log("Slider value:", values); 
  };

  if(type == "Age"){
    let change = ""
    return (
      <View style={styles.container}>
        {/* <Text>Selected Range: {range[0]} - {range[1]}</Text> */}
        <Slider
          style={{ width: '92%', height: 40 }}
          minimumValue={18}
          maximumValue={60}
          step={1}
          values={range}
          onValueChange={handleSliderChange}
          minMarkerOverlapDistance={40} // Adjust as needed
          minMarkerOverlapStepDistance={20} // Adjust as needed
          minimumTrackTintColor="rgba(0, 0, 40, 0.6)"
          maximumTrackTintColor="rgba(0, 0, 0, 0.2)"
          thumbTintColor="white"
        />
        <Text>Age</Text>
      </View>
    );
  }

  else{
    return (
      <View style={styles.container}>
        {/* <Text>Selected Range: {range[0]} - {range[1]}</Text> */}
        <Slider
          style={{ width: '92%', height: 40 }}
          minimumValue={10}
          maximumValue={100}
          step={10}
          values={range}
          onValueChange={handleSliderChange}
          minMarkerOverlapDistance={40} // Adjust as needed
          minMarkerOverlapStepDistance={20} // Adjust as needed
          minimumTrackTintColor="rgba(0, 0, 40, 0.6)"
          maximumTrackTintColor="rgba(0, 0, 0, 0.2)"
          thumbTintColor="white"
        />
        <Text>Proximity: Within {userValue} miles</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '3%',
    // marginBottom: '3%',
  },
});

export default UserInputSlider;
