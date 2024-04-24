import { getSecureValues } from '../authentication/getValue';
import { deleteKey } from '../authentication/deleteValue';
import { saveSecureValue } from '../authentication/saveValue';
const deleteAccount = async () => {

    try {
      const apiUrl = 'http://18.188.112.190:5001/deleteAccount';
      const accessToken = await getSecureValues('access');
      console.log(accessToken);
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
        console.log('data from request: ',data);
        if (data['success'] === true){
            // secure the tokens returned from the server!
            if (data['results']['success'] === true){
                return true;
            }
            else{
                return false;
            }
        }
        else{
          if(data['message'] == -1){

            try {
              const apiUrl = 'http://18.188.112.190:5001/deleteAccount';
              const refreshToken = await getSecureValues('refresh');
              console.log(refreshToken);
              const credentials = {
                type: 'refresh',
                tokenFromUser: refreshToken,
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
                console.log('data_ from request: ',data_);

                const newAccess = data_['newAccess'];
                const newRefresh = data_['newRefresh'];
                await deleteKey('access')
                await deleteKey('refresh')
                await saveSecureValue('access', newAccess);
                await saveSecureValue('refresh', newRefresh);

                if (data_['success'] === true){
                    // secure the tokens returned from the server!
                    if (data_['results']['success'] === true){
                        return true;
                    }
                    else{
                        return false;
                    }
                }
                else{
                  if(data_['message'] == -1){
        
                    
        
                  }
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

          }
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
  
  export { deleteAccount }; 