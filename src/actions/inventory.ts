'use server'
import {ApiService} from "@/service/ApiService";
import {Inventory} from "@/types/Inventory";
import {MaterialType} from "@/types/MaterialType";

export async function getInventory() {
    const api = await ApiService.instance();
    const response = await api.get<Inventory>(`inventory`);
    return response.data;
}


export async function getMaterialTypes() {
    const api = await ApiService.instance();
    const response = await api.get<MaterialType[]>(`/store/material/types `);
    return response.data;
}
