import * as SecureStore from 'expo-secure-store';
import { saveSecureValue } from '../authentication/saveValue';
import { getSecureValues } from '../authentication/getValue';
import { sendAdditionalMessages } from './sendAdditionalMessage';

const sendFirstMessage = async (recieverID_,message_) => {

    try {
      const apiUrl = 'http://18.188.112.190:5001/sendFirstMessage';
      const accessToken = await getSecureValues('access');
    //   console.log(accessToken);
      const credentials = {
        type: 'access',
        tokenFromUser: accessToken,
        recieverID: recieverID_,
        message: message_,
      };
  
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log("response from server:",data['results']);
        if (data['results']['success'] === true){
            // secure the tokens returned from the server!
            return true;
        }
        else if((data['results']['message'] == "User has exceeded maximum of 3 messages per day.")){
          return -1;
        }
        else{
          if(data['results']['message'] == "Conversation already started."){
            console.log("We need to request the other endpoint.");
            const newEndpoint = await sendAdditionalMessages(recieverID_, message_);
            console.log("new endpoint: ",newEndpoint)
          }
          else{
            return false;
          }
        }
      } else {
        console.error('Items failed:', response.status, await response.text());
      }
    } catch (error) {
      console.error('Error during item retrieval:', error);
      return false;
    }
  };
  
  export { sendFirstMessage };  