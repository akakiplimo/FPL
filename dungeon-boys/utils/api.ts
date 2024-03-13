require('dotenv').config();
import axios, { AxiosResponse } from "axios"

export interface FplApiResponse {
    data: Array<Record<string, any>>
}

// Define the cookie string
const cookieString = process.env.COOKIE_STRING;

// cors anywhere uri to bypass cors policies
const corsAny = process.env.CORS_ANY;

// Set up headers with the cookie
const headers = {
    headers: {
        'Cookie': cookieString,
    },
}

export const fetchData = async (endpoint: string): Promise<FplApiResponse> => {
    try {
        const res: AxiosResponse<FplApiResponse> = await axios.get(`${corsAny}${endpoint}`, headers);
        return res.data;
    } catch (error) {
        console.error('Error fetching data: ', error);
        throw error;
    }
}