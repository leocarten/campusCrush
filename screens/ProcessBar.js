import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Octicons } from '@expo/vector-icons';

const HorizontalIconLine = ({ count, directions }) => {
  const renderIcons = () => {
    const icons = [];
    for (let i = 0; i < 5; i++) {
        if ((i + 1) === count) {
            icons.push(
                // <Octicons key={i} name="git-commit" size={33} color="rgba(0,0,0,0.5)" />
                <Ionicons key={i} name="remove-outline" size={30} color="rgba(0,0,0,0.7)" />
            );
        } else if (i < count) {
            icons.push(
                <Ionicons key={i} name="remove-outline" size={30} color="green" />
            );
        } else {
            icons.push(
                <Ionicons key={i} name="remove-outline" size={30} color="rgba(0,0,0,0.19)" />
            );
        }
    }
    return icons;
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {renderIcons()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: '4%',
    marginBottom: '1%'
  },
  textContainer: {
    flexDirection: 'column',
    marginRight: 10, 
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  iconContainer: {
    flexDirection: 'row',
  },
});

export default HorizontalIconLine;
