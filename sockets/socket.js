import io from 'socket.io-client';

const WebSocketServerURL = 'http://18.188.112.190:5002';
const socket = io.connect(WebSocketServerURL);

export default socket;