import { getSecureValues } from '../authentication/getValue';
import { deleteKey } from '../authentication/deleteValue';
import { saveSecureValue } from '../authentication/saveValue';
const getUserInfo = async () => {

    try {
      const apiUrl = 'http://18.188.112.190:5001/getUserInfoForSettingsPage';
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
          if (data['results'] && data['results'].length > 0) {
              var returnVal = data['results'][0];
              if(returnVal['gender'] == null || returnVal['gender'] == ""){
                returnVal['gender'] = 3;
              }
              if(returnVal['first_name'] == null || returnVal['first_name'] == ""){
                returnVal['first_name'] = "Anonymous"
              }
              if(returnVal['dob'] == null || returnVal['dob'] == ""){
                returnVal['dob'] = -1;
              }
              return returnVal;
          } else {
              return { gender: 3, first_name: "Anonymous", dob: -1 }; 
          }
      }
      
        else{
          if(data['message'] == -1){

            try {
              const apiUrl = 'http://18.188.112.190:5001/getUserInfoForSettingsPage';
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
                  if (data_['results'] && data_['results'].length > 0) {
                      var returnVal = data_['results'][0];
                      if(returnVal['gender'] == null || returnVal['gender'] == ""){
                        returnVal['gender'] = 3;
                      }
                      if(returnVal['first_name'] == null || returnVal['first_name'] == ""){
                        returnVal['first_name'] = "Anonymous"
                      }
                      if(returnVal['dob'] == null || returnVal['dob'] == ""){
                        returnVal['dob'] = -1;
                      }
                      return returnVal;
                  } else {
                      return { gender: 3, first_name: "Anonymous", dob: -1 }; 
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
  
  export { getUserInfo }; 