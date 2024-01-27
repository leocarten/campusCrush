import * as SecureStore from 'expo-secure-store';
import { saveSecureValue } from '../authentication/saveValue';
import { getSecureValues } from '../authentication/getValue';

const getItemsInFeed = async () => {
    try {
      const apiUrl = 'http://18.188.112.190:5001/showItemsInFeed';
      const accessToken = await getSecureValues('access');
      const credentials = {
        type: 'access',
        tokenFromUser: accessToken,
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
        if (data['success'] === true){
            // secure the tokens returned from the server!
            return data['results'];
        }
        else{
          console.log("Fail")
          return false;
        }
      } else {
        console.error('Items failed:', response.status, await response.text());
      }
    } catch (error) {
      console.error('Error during item retrieval:', error);
    }
  };
  
  export { getItemsInFeed };  