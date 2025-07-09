'use server'
import { ApiService } from "@/service/ApiService";

export async function login(token: string) {
    const api = await ApiService.instance();
    const response = await api.get<LoginResponse>('auth/firebase/' + token);
    return response.data;
}

export async function logout() {
 //   await removeSessionCookie('token');
}