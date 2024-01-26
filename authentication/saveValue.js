import * as SecureStore from 'expo-secure-store';
export const saveSecureValue = async (key, value) => {
    await SecureStore.setItemAsync(key, value);
}