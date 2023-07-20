// api/index.ts

import {ChatMessageRequest} from "../types/apiResponse";
import instance from "../plugins/myAxios";

// ... 其他代码

// 添加一个新函数来发送请求到后端
// @ts-ignore
export async function postMessage(requestBody: ChatMessageRequest): Promise<any> {
    try {
        return await instance.post('message', requestBody);
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
}