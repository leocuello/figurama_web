import { Album } from "@/types//Album";

export interface Collection {
  created_at: string;
  full: boolean;
  ID: string;
  total_credits: number;
  user: string;
  album: Album;
}
