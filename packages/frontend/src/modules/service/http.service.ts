import axios, { AxiosStatic, AxiosRequestConfig } from "axios";
import { STORAGE_KEYS } from "../common/consts/app-keys.const";

class HttpService {
  private baseUrl: string;

  private fetchingService: AxiosStatic;

  private apiVersion: string;

  public constructor(
    baseUrl: string = process.env.REACT_APP_BASE_SERVER_URL!,
    apiVersion: string = "api"
  ) {
    this.baseUrl = baseUrl;
    this.fetchingService = axios;
    this.apiVersion = apiVersion;
  }

  public getFullApiUrl(url: string): string {
    return `${this.baseUrl}/${this.apiVersion}/${url}`;
  }

  private populateTokenToHeaderConfig() {
    return {
      Authorization: `Bearer ${localStorage.getItem(STORAGE_KEYS.TOKEN)}`,
    };
  }

  storeToken(token: string) {
    localStorage.setItem(STORAGE_KEYS.TOKEN, token);
  }

  deleteToken() {
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
  }

  private extractUrlAndDataFromConfig(config: AxiosRequestConfig) {
    const { data, url, ...configWithoutDataAndUrl } = config;
    return configWithoutDataAndUrl;
  }

  private setHeaders(withAuth: boolean, config: AxiosRequestConfig) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig(),
      };
    }
  }

  public get(config: AxiosRequestConfig, withAuth = true) {
    this.setHeaders(withAuth, config);
    return this.fetchingService.get(
      this.getFullApiUrl(config.url!),
      this.extractUrlAndDataFromConfig(config)
    );
  }

  public post(config: AxiosRequestConfig, withAuth = true) {
    this.setHeaders(withAuth, config);
    return this.fetchingService.post(
      this.getFullApiUrl(config.url!),
      config.data,
      this.extractUrlAndDataFromConfig(config)
    );
  }

  public delete(config: AxiosRequestConfig, withAuth = true) {
    this.setHeaders(withAuth, config);
    return this.fetchingService.delete(
      this.getFullApiUrl(config.url!),
      this.extractUrlAndDataFromConfig(config)
    );
  }

  public patch(config: AxiosRequestConfig, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig(),
      };
    }
    return this.fetchingService.patch(
      this.getFullApiUrl(config.url!),
      config.data,
      this.extractUrlAndDataFromConfig(config)
    );
  }
}
export default HttpService;
