import * as SecureStore from 'expo-secure-store';
import { saveSecureValue } from '../authentication/saveValue';
import { getSecureValues } from '../authentication/getValue';

const sendAdditionalMessages = async (recieverID_,senderID_, message_) => {

    try {
      const apiUrl = 'http://18.188.112.190:5001/sendAdditionalMessage';
      const accessToken = await getSecureValues('access');
    //   console.log(accessToken);
      const credentials = {
        type: 'access',
        tokenFromUser: accessToken,
        id1: recieverID_,
        id2: senderID_,
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
        else{
          if(data['results']['message'] == "Conversation not started."){
            console.log("CONVO NOT STARTED!")
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
  
  export { sendAdditionalMessages };  