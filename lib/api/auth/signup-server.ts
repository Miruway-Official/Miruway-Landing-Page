"use server";

import axios from "axios";
import { redirect } from "next/navigation";

const API_URL_AUTH = process.env.API_URL_AUTH as string;
const FRONTEND_URL = process.env.FRONTEND_URL as string;

interface AuthOAuthProviderProps {
    provider: 'google' | 'line' | 'discord';
}

const authOAuthProvider = async ({ provider } : AuthOAuthProviderProps) => {
    try {
        const url = `${API_URL_AUTH}${provider}?redirect=${encodeURIComponent(FRONTEND_URL)}`;
        redirect(url);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('API Error:', {
                status: error.response?.status,
                data: error.response?.data,
                url: error.config?.url,
            });
        }
        throw error;
    }
};

export default authOAuthProvider;
