'use server'
import { ApiService } from "@/service/ApiService";
import { Collection } from "@/types/Collections";

export async function getCollections(): Promise<Collection[]> {
  const api = await ApiService.instance();
  const response = await api.get<Collection[]>('collection');
  return response.data;
}

export async function collectionById(id: string) {
  const api = await ApiService.instance();
  const response = await api.get<Collection>(`collection/${id}`);
  return response.data;
}

export async function collectionDeleteById(id: string) {
  const api = await ApiService.instance();
  const response = await api.delete<Collection>(`collection/${id}`);
  return response.data;
}

