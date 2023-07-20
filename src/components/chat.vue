<template>
    <div>
        <el-input
            v-model="input"
            autosize
            type="textarea"
            placeholder="Please input"
        />
        <MyDivider />
        <el-row class="mb-4">
            <el-button type="primary" @click.prevent="send">发送</el-button>
        </el-row>
    </div>
</template>

<script setup>
import MyDivider from '@/components/MyDivider.vue';
import {ref} from "vue";

const input = ref('');

function send() {
    if (input.value) {
        $emit('send', input.value);
    }
}
</script>

<style scoped>

</style>