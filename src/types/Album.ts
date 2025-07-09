import { Card } from "@/types/Card";
import { Location } from "@/types/Location";

export interface Album {
    active: boolean;
    background_color: string;
    background_text_color: string;
    border_color: string;
    border_text_color: string;
    cards: Card[];
    category: string;
    created_at: string;
    description: string;
    id: string;
    image_url: string;
    location: Location;
    self: boolean;
    title: string;
    total: number;
    type: string;
    user: string;
  }