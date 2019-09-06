import axiosService from './AxiosService';
import { API_TOPIC } from '../constants/ApiConstaints';

export const getAllTopicService = () => {
    return axiosService.get(API_TOPIC);
}