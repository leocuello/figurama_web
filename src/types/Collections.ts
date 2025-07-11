import { Album } from "@/types//Album";
import { Travel } from "@/types//Travel";

export interface Collection {
  ID: string;
  user: string;
  album: Album;
  created_at: string;
  total_search: number;
  total_credits: number;
  full: boolean;
  travels: Travel[];
}
