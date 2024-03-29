import io from 'socket.io-client';

const WebSocketServerURL = 'http://18.188.112.190:5002';

export function connectAndJoinConversation(conversationID) {
    const socket_ = io.connect(WebSocketServerURL);
    socket_.emit("join_conversation", conversationID);
    return socket_; // Return the socket instance
}
