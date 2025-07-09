'use server'
import {ApiService} from "@/service/ApiService";
import { SearchCard } from "@/types/SearchCard";

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
    console.log(response);
    return response.data;
  }