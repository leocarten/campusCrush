import { getSecureValues } from '../authentication/getValue';

const deleteConversation = async (convoID_, id1_, id2_, id3_) => {

    try {
      const apiUrl = 'http://18.188.112.190:5001/deleteConversation';
      const accessToken = await getSecureValues('access');
      console.log(accessToken);
      const credentials = {
        type: 'access',
        tokenFromUser: accessToken,
        convoID: convoID_,
        id1: id1_,
        id2: id2_,
        id3: id3_
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
            if (data['results']['success'] === true){
                return data['results'];
            }
            else{
                return false;
            }
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
  
  export { deleteConversation }; 