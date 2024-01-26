import * as SecureStore from 'expo-secure-store';
export const deleteKey = async (key) => {
    await SecureStore.deleteItemAsync(key);
}