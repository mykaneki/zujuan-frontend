// apiResponse.ts
export interface Result<T> {
    code: number;
    message: string;
    data: T;
    timestamp: string;
}

export interface ChatMessageRequest {
    inputs: Record<string, any>;
    query: string;
    response_mode: string;
    user: string;
}

// {
//     "code": 0,
//     "message": "操作成功",
//     "data": {
//     "event": "message",
//         "task_id": "272a165c-a997-4aa9-aef2-527dce120aee",
//         "id": "1042c4d8-6f72-4503-a6a8-37acc2ebdd25",
//         "answer": "无匹配。",
//         "created_at": 1686454377,
//         "conversation_id": "d83a5ad3-d860-478e-b7b2-ee5e8e283ffb"
// },
//     "timestamp": "2023-06-11T11:32:58.3138054"
// }