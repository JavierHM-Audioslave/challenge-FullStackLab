import axios from "axios";


export const getBlocks = async (url) => {

    try {
        const response = await axios.get(url);
        return response;
    } catch(error) {
        console.error(error);
        throw new Error(error);
    }
};

