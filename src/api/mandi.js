import client from "./client";

export const getMandiList = async () => {
    try {
        const response = await client.get("/api/mandi/get_mandi");
        return response.data; // Adjust based on your backend response structure
    } catch (error) {
        console.error("Error fetching mandi list:", error);
        throw error;
    }
};
export const getMandiBhav = async (slug) => {
    try {
        const response = await client.get(`/api/mandi/get_crop/${slug}`);
        return response.data; // array of mandi bhav objects
    } catch (error) {
        console.error("Error fetching mandi bhav:", error);
        throw error;
    }
};
export const getCropList = async () => {
    try {
        const response = await client.get(`/api/mandi/get_tages`);
        return response.data; // array of mandi bhav objects
    } catch (error) {
        console.error("Error fetching mandi bhav:", error);
        throw error;
    }
};

export const getCropDetail = async (slug) => {
    try {
        const response = await client.get(`/api/mandi/tages/${slug}`);
        return response.data; // array of mandi bhav objects
    } catch (error) {
        console.error("Error fetching mandi bhav:", error);
        throw error;
    }
};