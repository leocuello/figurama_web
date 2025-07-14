'use server'
import {ApiService} from "@/service/ApiService";
import { Album } from "@/types/Album";

export async function albums(id: string) {
    const api = await ApiService.instance();
    return await api.get('album/' + id);
}


export async function getAllAlbums(): Promise<Album[]> {
  const api = await ApiService.instance();
  const response = await api.get<Album[]>('album?page=0&size=1000');
  return response.data;
}
