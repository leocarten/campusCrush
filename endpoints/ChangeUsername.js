import { getSecureValues } from '../authentication/getValue';

const changeUsername_ = async (new_username) => {

    try {
      const apiUrl = 'http://18.188.112.190:5001/changeUsername';
      const accessToken = await getSecureValues('access');
      console.log(accessToken);
      const credentials = {
        type: 'access',
        tokenFromUser: accessToken,
        new_username: new_username
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
        console.log('data from request: ',data);
        if (data['results']['success'] === true){
            // secure the tokens returned from the server!
            return true;
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
      return false;
    }
  };
  
  export { changeUsername_ }; 