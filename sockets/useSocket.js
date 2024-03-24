import React, { useState } from 'react';
import testSocket from './testSocket'; // Assuming testSocket.js is in the same directory
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
const SocketUsage = () => {
    // Define state to control the WebSocket connection
    const [connected, setConnected] = useState(false);

    // Define your callback function to handle incoming messages
    const handleMessage = (message) => {
        console.log('Received message:', message);
        // Add your logic to update the chat UI with the received message
    };

    // Function to handle button click
    const handleButtonClick = () => {
        if (!connected) {
            // If not already connected, establish WebSocket connection
            testSocket('http://18.188.112.190:5001/testSocket', handleMessage);
            setConnected(true); // Update state to indicate connection
        } else {
            console.log('Already connected');
        }
    };

    // Your chat component JSX
    return (
        <View>
            <TouchableOpacity onPress={handleButtonClick}>
                <Text style={{color:'white'}}>
                    SOCKET
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default SocketUsage;
