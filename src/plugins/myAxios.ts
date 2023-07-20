import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8081/api/",
    timeout: 10000,
    headers: {}
});

// 添加响应拦截器
instance.interceptors.response.use(
    function (response) {
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        const data = response.data;
        if (data.code === 0) {
            return data;
        }
        console.error("request error", data);
        return response.data;
    },
    function (error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        // @ts-ignore
        return Promise.reject(error);
    }
);
// 在你的 axios 实例文件中添加 login 函数

export default instance;
