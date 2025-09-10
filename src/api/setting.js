// https://khetiwadi.com/api/dashboard/get_app_version

import client from "./client";

export const getAppVersion = async () => {
    try {
        const response = await client.get("/api/dashboard/get_app_version");
        return response.data;
    } catch (error) {
        console.error("Error fetching mandi list:", error);
        throw error;
    }
};