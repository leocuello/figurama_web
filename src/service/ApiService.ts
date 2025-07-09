// lib/apiService.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { SessionCookieManager } from '@/lib/SessionCookieManager'

export class ApiService {
  private client: AxiosInstance

  private constructor(client: AxiosInstance) {
    this.client = client
  }

  // Método estático para crear la instancia de forma asíncrona
  public static async instance(): Promise<ApiService> {
    const baseURL = process.env.API_BASE_URL
    if (!baseURL) {
      throw new Error('La variable de entorno API_BASE_URL no está definida.')
    }

    const token = await SessionCookieManager.get()
    const client = axios.create({
      baseURL,
      timeout: 10000,
    })

    // Interceptor para agregar el token si existe
    client.interceptors.request.use((config) => {
      if (token) {
        config.headers = config.headers || {}
        config.headers['Authorization'] = `Bearer ${token}`
      }
      return config
    })

    return new ApiService(client)
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    console.log("APIIIII");
    console.log(config);
    return this.client.get<T>(url, config)
  }

  public async post<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.post<T>(url, data, config)
  }

  public async put<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.put<T>(url, data, config)
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.delete<T>(url, config)
  }
}
















