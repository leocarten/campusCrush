import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { viewPoints } from '../../../../endpoints/ViewPoints'; 
import { iconColors } from '../../styles/feedStyles/feedColors';

const PointsComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const points = await viewPoints();
        setData(points);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    // console.log(data[0]['points']);

    fetchData();
  }, []);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="small" color={iconColors} />
      ) : (
        <View style={{alignSelf: 'center'}}>
          {data[0]['points'] ? (
            <Text style={{color: iconColors, fontSize: 16, flexDirection: 'row'}}>{data[0]['points']} points</Text>
          ) : (
            <Text>0 points</Text>
          )}
        </View>
      )}
    </View>
  );
};

export default PointsComponent;
