import data from '../database/db';

export const getAllTopicService = () => {
    try {
        return data.topics;
    } catch (error) {
        console.log(error)
    }
    return [];
}