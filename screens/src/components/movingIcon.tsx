import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Text } from 'react-native';
import { Image } from 'react-native';

const MovingIcon = () => {
  const [animatedValue] = useState(new Animated.Value(0));

  useEffect(() => {
    const config = {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    };

    // Use sequence to create a two-step animation (up and down)
    const sequenceAnimation = Animated.sequence([
      Animated.timing(animatedValue, { ...config, toValue: 1 }),
      Animated.timing(animatedValue, { ...config, toValue: 0 }),
    ]);

    const loopedAnimation = Animated.loop(sequenceAnimation);

    loopedAnimation.start();

    return () => {
      loopedAnimation.stop();
    };
  }, [animatedValue]);

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1], // Adjust the range as needed
  });

  return (
    <Animated.View style={[styles.icon, { transform: [{ translateY }] }]}>
      <Image
      source={require('./../..//assets/images/ccLogo1.png')}
      style={{ 
        width: 80, 
        height: 80, 
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 4.62,
      }}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1%'
  },
});

export default MovingIcon;
