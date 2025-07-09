import { Location } from "@/types/Location";

export interface Card {
    album: string;
    created_at: string;
    description: string;
    found_at: string;
    hard: boolean;
    id: string;
    image_url: string;
    location: Location;
    number: number;
    radio: number;
    replay: boolean;
    title: string;
  }
  