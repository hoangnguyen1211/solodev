import axios from 'axios';
import { Alert } from 'react-native';

class AxiosService {
    constructor() {
        const instance = axios.create();
        instance.interceptors.response.use(this.handleSuccess, this.handleError);
        this.instance = instance;
    }

    handleSuccess(response) {
        return response;
    }

    handleError(error) {
        if (error.response) {
            const { status } = error.response;
            switch (status) {
                case 404:
                    Alert.alert('Không tìm thấy api!')
                    break;
                case 500:
                    Alert.alert('Lỗi server!')
                    break;
                default:
                    console.log('Lỗi ứng dụng!');
                    break;
            }
        }
        else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
    }

    get(url) {
        return this.instance.get(``);
    }
}

export default new AxiosService();