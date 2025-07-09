'use server'
import {ApiService} from "@/service/ApiService";

export async function albums(id: string) {
    const api = await ApiService.instance();
    return await api.get('album/' + id);
}

