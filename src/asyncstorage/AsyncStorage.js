import AsyncStorage from '@react-native-community/async-storage';

export const AsyncStorageSetData = async (key, value) => {
    try {
        await AsyncStorage.setItem(`@${key}`, JSON.stringify(value));
    } catch (e) {
        console.log(e);
    }
}

export const AsyncStorageGetData = async (key) => {
    try {
       let result = await AsyncStorage.getItem(`@${key}`);
       if(result) return JSON.parse(result);
       return null;
    } catch (e) {
        console.log(e);
    }
}
