import * as SecureStore from 'expo-secure-store';
export const getSecureValues = async (key) => {
    let result = await SecureStore.getItemAsync(key);
    try{
        return result;
    }catch(e){
        return e;
    }
  }