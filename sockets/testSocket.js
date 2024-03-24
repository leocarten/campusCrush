import React, { useEffect } from 'react';
import io from 'socket.io-client';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';

const useWebSocket = (url, callback) => {
    useEffect(() => {
        // Connect to the Socket.IO server
        const socket = io(url);

        // Listen for events from the server
        socket.on('connect', () => {
            console.log('Connected to server');
        });

        socket.on('message', (data) => {
            console.log('Message received from server:', data);
            if (callback) {
                callback(data);
            }
        });

        // Clean up on unmount
        return () => {
            socket.disconnect();
        };
    }, [url, callback]); // Dependency array including URL and callback function
};

const UseSocket = () => {
    // Call the custom hook to establish WebSocket connection
    const connectToWebSocket = () => {
        useWebSocket('http://18.188.112.190:5001/testSocket', handleMessage);
    };
    // useWebSocket('http://18.188.112.190:5001/testSocket', handleMessage);

    // Define your callback function to handle incoming messages
    const handleMessage = (message) => {
        console.log('Received message:', message);
        // Add your logic to update the chat UI with the received message
    };

    // Your chat component JSX
    return (
        <TouchableOpacity onPress={connectToWebSocket}>
            <Text style={{color:'white'}}>
                SOCKET
            </Text>
        </TouchableOpacity>
    );
};

export default UseSocket;
