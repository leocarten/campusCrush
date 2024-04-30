import * as SecureStore from 'expo-secure-store';
import { getSecureValues } from '../authentication/getValue';
import { deleteKey } from '../authentication/deleteValue';
import { saveSecureValue } from '../authentication/saveValue';

const handleLogin = async (usernameInput, passwordInput) => {
    try {
      const apiUrl = 'http://18.188.112.190:5001/login';
      const credentials = {
        username: usernameInput,
        password: passwordInput,
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
        // console.log('Login successful:', data);
        if (data['success'] === true){
            // secure the tokens returned from the server!
            await saveSecureValue('access', data['access']);
            await saveSecureValue('refresh', data['refresh']);
            return true;
        }
        else{
          return false;
        }
      } else {
        console.error('Login failed:', response.status, await response.text());
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  
  export { handleLogin };  