import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

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
    outputRange: [0, 6], // Adjust the range as needed
  });

  return (
    <Animated.View style={[styles.icon, { transform: [{ translateY }] }]}>
      <FontAwesome5 name="hand-holding-heart" size={60} color="black" />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5%'
  },
});

export default MovingIcon;
