import { Card } from "@/types/Card";
import { Location } from "@/types/Location";

export interface Album {
  ID: string;
  title: string;
  description: string;
  self: boolean;
  user: string;
  category: string;
  created_at: string;
  total: number;
  active: boolean;
  border_color: string;
  border_text_color: string;
  background_color: string;
  background_text_color: string;
  image_url: string;
  type: string;
  location: Location;
  cards: Card[];
}