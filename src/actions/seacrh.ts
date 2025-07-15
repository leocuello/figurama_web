'use server'
import { ApiService } from "@/service/ApiService";
import { Album } from "@/types/Album";
import { SearchCard } from "@/types/SearchCard";


export async function searchAlbum(
  category: string,
  latitude: number,
  longitude: number
): Promise<Album> {
  const api = await ApiService.instance();
  const response = await api.get<Album>('search/album', {
    params: {
      category,
      latitude,
      longitude,
    },
  });
  return response.data;
}

export async function searchCard(
  albumId: string,
  latitude: number,
  longitude: number
): Promise<SearchCard[]> {
  const api = await ApiService.instance();
  const response = await api.get<SearchCard[]>('search/card', {
    params: {
      albumId,
      latitude,
      longitude,
    },
  });
  return response.data;
}