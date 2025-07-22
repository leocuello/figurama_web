import {Accessory} from "@/types/Accessory";
import {Material} from "@/types/Material";

export interface Inventory {
    accessories: Accessory[];
    id: string;
    materials: Material[];
    user: string;
}