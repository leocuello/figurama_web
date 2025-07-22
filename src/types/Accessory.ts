import {Material} from "@/types/Material";

export interface Accessory {
    code: number;
    description: string;
    id: string;
    level: number;
    materials: Material[];
    name: string;
    type: number;
}