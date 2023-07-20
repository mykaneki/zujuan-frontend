<template>
    <el-row
            :gutter="20"
            type="flex"
            justify="center"
            align="middle"
            style="height: 100%"
            v-if="showInput"
    >
        <el-col :span="8" >
            <el-input
                    autosize
                    v-model="input"
                    type="textarea"
                    placeholder="Please input"
            />
            <MyDivider/>
            <el-row class="mb-4">
                <el-button type="primary" @click.prevent="handleSend">发送</el-button>
            </el-row>
        </el-col>
    </el-row>
    <el-row
            :gutter="20"
            type="flex"
            justify="center"
            align="middle"
            style="height: 100%"
            v-if="showMessage"
    >
        <el-col :span="24">
            <message :data="returnedData" :noData="noData"/>
        </el-col>
    </el-row>
</template>

<script setup>
import MyDivider from '@/components/MyDivider.vue';
import Message from '@/components/Message.vue';
import {onUpdated, ref} from 'vue';
import {postMessage} from '@/api'; // 引入 postMessage 函数

const input = ref('');
const showMessage = ref(false);
const returnedData = ref([]);
const noData = ref(false);
const showInput = ref(true); // 添加此行以控制输入框的显示

const handleSend = async () => {
    if (input.value) {
        try {
            const requestBody = {
                inputs: {},
                query: input.value,
                response_mode: 'blocking',
                user: 'user1',
            };
            const response = await postMessage(requestBody);
            console.log('Message sent:', response);

            const questions = response.data.data;

            if (questions != null && questions.length > 0) {
                console.log('Questions:', questions);
                returnedData.value = questions;
                noData.value = false;
            } else {
                noData.value = true;
            }
            showMessage.value = true;
            input.value = ''; // 清空输入框
            showInput.value = false; // 隐藏输入框
        } catch (error) {
            console.error('Error sending message:', error);
        }
    }
};

onUpdated(() => {
    if (window.MathJax && typeof window.MathJax.typeset === 'function') {
        console.log('MathJax.typeset()');
        window.MathJax.typeset();
    }
});
</script>