import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { TextInput } from 'react-native';
import { Button } from 'react-native';
import { updateFilterVariables } from '../../../globalVariables/FilterVariables';
import { getFilterVariables } from '../../../globalVariables/FilterVariables';

const UserInputSlider = ({ type })  => {
  // let userValue;
  const [range, setRange] = useState([0, 100]);
  // const [userValue, setUserValue] = useState([0, 100]);
  const initialValue = [0, 100];
  const [userValue, setUserValue] = useState(initialValue);

  const [minAge, setMinAge] = useState('');
  const [maxAge, setMaxAge] = useState('');

  const handleFilter = () => {
    console.log(getFilterVariables());
  };

  const handleMinAgeChange = (text) => {
    setMinAge(text);
    updateFilterVariables('lowAge', text);
  };

  const handleMaxAgeChange = (text) => {
    setMaxAge(text);
    updateFilterVariables('highAge', text);
  };


  const handleSliderChange = (values) => {
    // setRange(values);
    setRange(values);
    setUserValue(values);
    console.log("Slider value:", values); 
  };

  if(type == "Age"){
    return (
      <View>
        <Text>Filter by Age:</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TextInput
            style={{ borderWidth: 1, borderColor: 'gray', padding: 5, marginRight: 10 }}
            placeholder="Min Age"
            keyboardType="numeric"
            value={minAge}
            onChangeText={text => handleMinAgeChange(text)}
          />
          <Text>and</Text>
          <TextInput
            style={{ borderWidth: 1, borderColor: 'gray', padding: 5, marginLeft: 10 }}
            placeholder="Max Age"
            keyboardType="numeric"
            value={maxAge}
            onChangeText={text => handleMaxAgeChange(text)}
          />
        </View>
        <Button title="Apply" onPress={handleFilter} />
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
          minMarkerOverlapDistance={40} 
          minMarkerOverlapStepDistance={20} 
          minimumTrackTintColor="rgba(0, 0, 40, 0.6)"
          maximumTrackTintColor="rgba(0, 0, 0, 0.2)"
          thumbTintColor="white"
        />
            <Text>
              {userValue[0] === initialValue[0] && userValue[1] === initialValue[1] ?
                "Please adjust the proximity" :
                `Proximity: Within ${userValue} miles`}
            </Text>
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
