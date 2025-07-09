// lib/store.ts
import { create } from 'zustand'

interface DataStore {
  data: Record<string, any> | null
  setData: (data: Record<string, any>) => void
  clearData: () => void
}

export const useDataStore = create<DataStore>((set) => ({
  data: null,
  setData: (data) => set({ data }),
  clearData: () => set({ data: null }),
}))