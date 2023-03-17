import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import AppConfig from './config';

const api: AxiosInstance = axios.create({
    baseURL: AppConfig.baseURL,
});

const responseSuccessInterceptor = (response: AxiosResponse) => {
    const data = JSON.parse(JSON.stringify(response.data));

    return { data: data } as AxiosResponse;
};

const errorInterceptor = (error: AxiosError) => {
    console.log(error);

    return { error: JSON.parse(JSON.stringify(error)) };
};

api.interceptors.response.use(responseSuccessInterceptor, errorInterceptor);


export default api;