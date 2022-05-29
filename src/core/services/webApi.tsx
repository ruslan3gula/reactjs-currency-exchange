import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const instanceConfig: AxiosRequestConfig = {
  baseURL: "https://v1.nocodeapi.com/ruslan3gula/cx/TagsSjLltDAcrHCx/",
};

const instance: AxiosInstance = axios.create(instanceConfig);

export default {
  getRates: () => instance.get("rates"),
  convert: (amount: any, from: any, to: any) =>
    instance.get("rates/convert?", { params: { amount, from, to } }),
};
