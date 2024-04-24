import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Steps = ({ count, directions }) => {
  return (
    <Text style={styles.text}><Text style={{fontWeight: 'bold'}}>Step {count}</Text>: {directions}</Text>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  textContainer: {
    flexDirection: 'column',
    marginRight: 10, 
  },
  text: {
    fontSize: 18,
    color: 'black',
    marginLeft: '3%'
  },
  iconContainer: {
    flexDirection: 'row',
  },
});

export default Steps;