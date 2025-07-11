import { Location } from "@/types/Location";

export interface Card {
  ID: string;
  number: number;
  location: Location;
  hard: boolean;
  radio: number;
  title: string;
  description: string;
  image_url: string;
  created_at: string;
  album: string;
  replay: boolean;
  found_at: string;
}
