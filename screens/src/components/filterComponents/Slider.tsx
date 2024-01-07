import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const UserInputSlider = () => {
  let userValue;
  const [range, setRange] = useState([0, 100]);

  const handleSliderChange = (values) => {
    setRange(values);
    userValue = values;
  };

  return (
    <View style={styles.container}>
      {/* <Text>Selected Range: {range[0]} - {range[1]}</Text> */}
      <Slider
        style={{ width: '92%', height: 40 }}
        minimumValue={0}
        maximumValue={100}
        step={1}
        values={range}
        onValuesChange={handleSliderChange}
        minMarkerOverlapDistance={40} // Adjust as needed
        minMarkerOverlapStepDistance={20} // Adjust as needed
      />
      <Text>Age / Miles away</Text>
    </View>
  );
};

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
