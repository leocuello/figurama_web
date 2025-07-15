import { Location } from "@/types/Location";
import { Album } from "./Album";

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
  album: Album;
  replay: boolean;
  found_at: string;
}
