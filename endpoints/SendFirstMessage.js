import * as SecureStore from 'expo-secure-store';
import { getSecureValues } from '../authentication/getValue';
import { deleteKey } from '../authentication/deleteValue';
import { saveSecureValue } from '../authentication/saveValue';
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
        else if(data['message'] == -1){

          try {
            const apiUrl = 'http://18.188.112.190:5001/sendFirstMessage';
            const refreshToken = await getSecureValues('refresh');
          //   console.log(refreshToken);
            const credentials = {
              type: 'refresh',
              tokenFromUser: refreshToken,
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
              const data_ = await response.json();
              const newAccess = data_['newAccess'];
              const newRefresh = data_['newRefresh'];
              await deleteKey('access')
              await deleteKey('refresh')
              await saveSecureValue('access', newAccess);
              await saveSecureValue('refresh', newRefresh);
              console.log("response from server:",data_['results']);
              console.log("response from server:",data_['results']);
              if (data_['results']['success'] === true){
                  // secure the tokens returned from the server!
                  return true;
              }
              else if((data_['results']['message'] == "User has exceeded maximum of 3 messages per day.")){
                return -1;
              }
              else if(data_['message'] == -1){
      
                  
      
              }
              else{
                if(data_['results']['message'] == "Conversation already started."){
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