<template>
    <div>
        <!-- 在这里添加条件渲染，根据具体情况显示不同的消息 -->
        <div v-if="props.noData">
            查询条件苛刻，找不到题目
        </div>
        <div >
            <!-- 根据实际数据结构展示返回的题目数据 -->
            <!-- 遍历 props.data 数组，展示每个题目的信息 -->
            <div class="question-container">
                <div v-for="(question, index) in questionsRef" :key="index" class="font-family">
                    <h3 v-html="question.title"></h3>
                    <div v-if="question.qtpye === '选择题'">
                        <p>A: <span v-html="question.option_a"></span></p>
                        <p>B: <span v-html="question.option_b"></span></p>
                        <p>C: <span v-html="question.option_c"></span></p>
                        <p>D: <span v-html="question.option_d"></span></p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  <!-- 遍历 questionsRef 数组，展示每个题目的信息 -->
<!--    <div class="question-container">-->
<!--        <div v-for="(question, index) in questionsRef" :key="index" class="font-family">-->
<!--            <h3 v-html="question.title"></h3>-->
<!--            <div v-if="question.qtpye === '选择题'">-->
<!--                <p>A: <span v-html="question.option_a"></span></p>-->
<!--                <p>B: <span v-html="question.option_b"></span></p>-->
<!--                <p>C: <span v-html="question.option_c"></span></p>-->
<!--                <p>D: <span v-html="question.option_d"></span></p>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {Question} from "../types/question";
import {defineProps} from 'vue';

const props = defineProps({
    data: Array,
    noData: Boolean
});

// const fakeData = [
//     {
//         "title": "<img  src=\"https://img.cuotixue.com/tikuimages/2/2021/400/xuekubao60/614adc9e-fef9-11eb-be1a-b42e9921e93e_xkb116.png\" style=\"vertical-align:middle;FLOAT:right\" w=\"179px\" h=\"178px\" />如图是用七巧板拼接成的一个轴对称图形\\((\\)忽略拼接线\\()\\)小亮改变①的位置，将①分别摆放在图中左，下，右的位置\\((\\)摆放时无缝隙不重叠\\()\\)，还能拼接成不同轴对称图形的个数为\\((\\quad)\\)",
//         "option_a": "\\(2\\)",
//         "option_b": "\\(3\\)",
//         "option_c": "\\(4\\)",
//         "option_d": "\\(5\\)",
//         "qtpye": "选择题",
//         "diff": "3.00",
//         "year": "2021",
//         "source": "2021年江西省中考数学试卷",
//         "subjectId": "2",
//         "paperTpye": "31",
//         "qid": "d83e76844188226aecc2ab19a993f489",
//         "isSub": "0",
//         "isNormal": "1",
//         "isunique": "1",
//         "id": "25792103",
//         "knowledgeMore": [
//             {
//                 "id": "20268",
//                 "knowledgeName": "七巧板",
//                 "knowledgeId": "C79D3508E2DC8FE8524E6B88BA662656"
//             },
//             {
//                 "id": "21116",
//                 "knowledgeName": "利用轴对称设计图案",
//                 "knowledgeId": "6721E8332154C61A68A38816866A869F"
//             }
//         ]
//     },
//     {
//         "title": "如图中\\(4×4\\)与\\(6×6\\)的方格都是由边长为\\(1\\)的小正方形组成\\(.\\)图\\(1\\)是绘成的七巧板图案，它由\\(7\\)个图形组成，请按以下要求选择其中一个并在图\\(2\\)、图\\(3\\)中画出相应的格点图形\\((\\)顶点均在格点上\\().\\)<br />\\((1)\\)选一个四边形画在图\\(2\\)中，使点\\(P\\)为它的一个顶点，并画出将它向右平移\\(3\\)个单位后所得的图形.<br />\\((2)\\)选一个合适的三角形，将它的各边长扩大到原来的\\(\\sqrt{5}\\)倍，画在图\\(3\\)中.<img  src=\"https://img.cuotixue.com/tikuimages/2/2021/400/xuekubao99/65ad9a80-fef9-11eb-a933-b42e9921e93e_xkb112.png\" style=\"vertical-align:middle\" w=\"412px\" h=\"166px\" />",
//         "option_a": "",
//         "option_b": "",
//         "option_c": "",
//         "option_d": "",
//         "qtpye": "解答题",
//         "diff": "3.00",
//         "year": "2021",
//         "source": "2021年浙江省温州市中考数学试卷",
//         "subjectId": "2",
//         "paperTpye": "31",
//         "qid": "8f8e6a5573edd22a3d7e7bdf87564a72",
//         "isSub": "0",
//         "isNormal": "0",
//         "isunique": "0",
//         "id": "25792547",
//         "knowledgeMore": [
//             {
//                 "id": "20268",
//                 "knowledgeName": "七巧板",
//                 "knowledgeId": "C79D3508E2DC8FE8524E6B88BA662656"
//             },
//             {
//                 "id": "20301",
//                 "knowledgeName": "勾股定理",
//                 "knowledgeId": "C5941BE9C01B6FB6468639D5F03AF022"
//             },
//             {
//                 "id": "21121",
//                 "knowledgeName": "利用平移设计图案",
//                 "knowledgeId": "4A716F7BA05468F225127F29AA2040C5"
//             },
//             {
//                 "id": "21125",
//                 "knowledgeName": "相似三角形的判定与性质",
//                 "knowledgeId": "4ED7D66A7373AAB4A4FF4258E9B1C51F"
//             }
//         ]
//     },
//     {
//         "title": "<img  src=\"https://img.cuotixue.com/tikuimages/2/2021/400/xuekubao79/66a87540-fef9-11eb-8146-b42e9921e93e_xkb106.png\" style=\"vertical-align:middle;FLOAT:right\" w=\"219px\" h=\"133px\" />七巧板起源于我国先秦时期，古算书《周髀算经》中有关于正方形的分割术，经历代演变而成七巧板，如图\\(1\\)所示\\(.19\\)世纪传到国外，被称为“唐图”\\((\\)意为“来自中国的拼图”\\()\\)，图\\(2\\)是由边长为\\(4\\)的正方形分割制作的七巧板拼摆而成的“叶问蹬”图，则图中抬起的“腿”\\((\\)即阴影部分\\()\\)的面积为\\((\\quad)\\)",
//         "option_a": "\\(3\\)",
//         "option_b": "\\(\\dfrac{7}{2}\\)",
//         "option_c": "\\(2\\)",
//         "option_d": "\\(\\dfrac{5}{2}\\)",
//         "qtpye": "选择题",
//         "diff": "3.00",
//         "year": "2021",
//         "source": "2021年四川省乐山市中考数学试卷",
//         "subjectId": "2",
//         "paperTpye": "31",
//         "qid": "b6e0840620f78a26f3c341429e19c345",
//         "isSub": "0",
//         "isNormal": "1",
//         "isunique": "1",
//         "id": "25792606",
//         "knowledgeMore": [
//             {
//                 "id": "20268",
//                 "knowledgeName": "七巧板",
//                 "knowledgeId": "C79D3508E2DC8FE8524E6B88BA662656"
//             }
//         ]
//     },
//     {
//         "title": "<img  src=\"https://img.cuotixue.com/tikuimages/2/2021/400/xuekubao15/69b9fb00-fef9-11eb-b6e7-b42e9921e93e_xkb157.png\" style=\"vertical-align:middle;FLOAT:right\" w=\"261px\" h=\"156px\" />小丽在“红色研学”活动中深受革命先烈事迹的鼓舞，用正方形纸片制作成图\\(1\\)的七巧板，设计拼成图\\(2\\)的“奔跑者”形象来激励自己\\(.\\)已知图\\(1\\)正方形纸片的边长为\\(4\\)，图\\(2\\)中\\(FM=2EM\\)，则“奔跑者”两脚之间的跨度，即\\(AB\\)，\\(CD\\)之间的距离是 ______ .",
//         "option_a": "",
//         "option_b": "",
//         "option_c": "",
//         "option_d": "",
//         "qtpye": "填空题",
//         "diff": "3.00",
//         "year": "2021",
//         "source": "2021年浙江省丽水市中考数学试卷",
//         "subjectId": "2",
//         "paperTpye": "31",
//         "qid": "85495e5541ca6bebe243acd71ce8b0e3",
//         "isSub": "0",
//         "isNormal": "0",
//         "isunique": "0",
//         "id": "25792808",
//         "knowledgeMore": [
//             {
//                 "id": "20268",
//                 "knowledgeName": "七巧板",
//                 "knowledgeId": "C79D3508E2DC8FE8524E6B88BA662656"
//             },
//             {
//                 "id": "20328",
//                 "knowledgeName": "正方形的性质",
//                 "knowledgeId": "2255538166D2E6F3C6097C2C4DF4E0BE"
//             }
//         ]
//     },
//     {
//         "title": "七巧板是我国著名的拼图玩具，从宋代“燕几图”演变而来，距今有\\(3000\\)多年历史\\(.\\)已知一副七巧板\\((\\)左图\\()\\)的总面积为\\(36cm^{2}\\)，现用这副七巧板如右图摆放，则图中“箭头”\\(ABCDEFG\\)的面积是 ______ \\(cm^{2}.\\)<br /><img  src=\"https://img.cuotixue.com/tikuimages/2/2021/400/xuekubao3/9a4f4451-fef9-11eb-adb9-b42e9921e93e_xkb137.png\" style=\"vertical-align:middle\" w=\"326px\" h=\"162px\" />",
//         "option_a": "",
//         "option_b": "",
//         "option_c": "",
//         "option_d": "",
//         "qtpye": "填空题",
//         "diff": "3.00",
//         "year": "2021",
//         "source": "2021年湖北省武汉市名校联盟教研体中考数学压轴模拟试卷（三）",
//         "subjectId": "2",
//         "paperTpye": "32",
//         "qid": "3246562d4506cd01394405ae416bf05e",
//         "isSub": "0",
//         "isNormal": "0",
//         "isunique": "0",
//         "id": "25797211",
//         "knowledgeMore": [
//             {
//                 "id": "20268",
//                 "knowledgeName": "七巧板",
//                 "knowledgeId": "C79D3508E2DC8FE8524E6B88BA662656"
//             }
//         ]
//     },
//     {
//         "title": "小慧用图\\(1\\)中的一副七巧板拼成如图\\(2\\)的“行礼图”，已知正方形\\(ABCD\\)的边长为\\(4\\)，则图\\(2\\)中的\\(h\\)的值为 ______ .<br /><img  src=\"https://img.cuotixue.com/tikuimages/2/2021/400/xuekubao94/d86bd730-fef9-11eb-ab10-b42e9921e93e_xkb156.png\" style=\"vertical-align:middle\" w=\"472px\" h=\"227px\" />",
//         "option_a": "",
//         "option_b": "",
//         "option_c": "",
//         "option_d": "",
//         "qtpye": "填空题",
//         "diff": "3.00",
//         "year": "2021",
//         "source": "2021年湖北省武汉市洪山区中考数学模拟试卷（5月份）",
//         "subjectId": "2",
//         "paperTpye": "32",
//         "qid": "dff66eff5e7bea747f2bd81b5c8528a7",
//         "isSub": "0",
//         "isNormal": "0",
//         "isunique": "0",
//         "id": "25802741",
//         "knowledgeMore": [
//             {
//                 "id": "20268",
//                 "knowledgeName": "七巧板",
//                 "knowledgeId": "C79D3508E2DC8FE8524E6B88BA662656"
//             },
//             {
//                 "id": "20328",
//                 "knowledgeName": "正方形的性质",
//                 "knowledgeId": "2255538166D2E6F3C6097C2C4DF4E0BE"
//             }
//         ]
//     },
//     {
//         "title": "如图\\((1)\\)，矩形方框内是一副现代智力七巧板，它由两个半圆①和⑦、\\(⊙O\\)⑥、等腰直角三角形②和都含\\(45°\\)角的角不规图形③、直角梯形④、圆不规图形⑤组成，已知\\(AB=BC=2AI.\\)如图\\(2\\)，在矩形\\(PQMN\\)内，这个智力七巧板恰好能拼成一个滑滑梯，若\\(⊙O\\)的直径是\\(2\\)，则矩形\\(PQMN\\)的周长为\\((\\quad)\\)<br /><img  src=\"https://img.cuotixue.com/tikuimages/2/2021/400/xuekubao45/1c806df0-fefa-11eb-bd9a-b42e9921e93e_xkb166.png\" style=\"vertical-align:middle\" w=\"647px\" h=\"179px\" />",
//         "option_a": "\\(32\\)",
//         "option_b": "\\(28+4\\sqrt{2}\\)",
//         "option_c": "\\(22+8\\sqrt{2}\\)",
//         "option_d": "\\(24+10\\sqrt{2}\\)",
//         "qtpye": "选择题",
//         "diff": "3.00",
//         "year": "2021",
//         "source": "2021年浙江省温州市永嘉县中考数学适应性试卷",
//         "subjectId": "2",
//         "paperTpye": "32",
//         "qid": "d9a3fcb982f07bb0a1c3b781cb1532e3",
//         "isSub": "0",
//         "isNormal": "1",
//         "isunique": "1",
//         "id": "25808765",
//         "knowledgeMore": [
//             {
//                 "id": "20268",
//                 "knowledgeName": "七巧板",
//                 "knowledgeId": "C79D3508E2DC8FE8524E6B88BA662656"
//             },
//             {
//                 "id": "20297",
//                 "knowledgeName": "等腰直角三角形",
//                 "knowledgeId": "F3F2FE32AADC1BD69BD884F39AA52FB5"
//             },
//             {
//                 "id": "20322",
//                 "knowledgeName": "矩形的性质",
//                 "knowledgeId": "E811387C8FC99FC6FE3585E61F7917A8"
//             }
//         ]
//     },
//     {
//         "title": "把正方形按图\\(1\\)画线，然后沿实线分割从而得到一副七巧板\\((\\)图\\(2)\\)所示，进行①\\(～\\)⑦编号，①\\(～\\)⑦号分别对应着七巧板的七块，如果编号④对应的面积等于\\(2\\)，则由这七块拼成的正方形的面积等于 ______ .<br /><img  src=\"https://img.cuotixue.com/tikuimages/2/2021/200/xuekubao62/767880e1-fefa-11eb-87bc-b42e9921e93e_xkb176.png\" style=\"vertical-align:middle\" w=\"424px\" h=\"204px\" />",
//         "option_a": "",
//         "option_b": "",
//         "option_c": "",
//         "option_d": "",
//         "qtpye": "填空题",
//         "diff": "3.00",
//         "year": "2021",
//         "source": "2020-2021学年广东省佛山市禅城区七年级（下）期末数学试卷",
//         "subjectId": "2",
//         "paperTpye": "34",
//         "qid": "aca38b244558b99bb965b559649e6bf7",
//         "isSub": "0",
//         "isNormal": "0",
//         "isunique": "0",
//         "id": "25816734",
//         "knowledgeMore": [
//             {
//                 "id": "20268",
//                 "knowledgeName": "七巧板",
//                 "knowledgeId": "C79D3508E2DC8FE8524E6B88BA662656"
//             }
//         ]
//     },
//     {
//         "title": "<img  src=\"https://img.cuotixue.com/tikuimages/2/2021/200/xuekubao70/85a34140-fefa-11eb-8e24-b42e9921e93e_xkb166.png\" style=\"vertical-align:middle;FLOAT:right;\" w=\"226px\" h=\"105px\" />五巧板是七巧板的变形，也是由一个正方形分割而成的，图中与\\(∠α\\)互余的角有 ______ 个.",
//         "option_a": "",
//         "option_b": "",
//         "option_c": "",
//         "option_d": "",
//         "qtpye": "填空题",
//         "diff": "3.00",
//         "year": "2021",
//         "source": "2020-2021学年江苏省连云港市七年级（上）期末数学试卷",
//         "subjectId": "2",
//         "paperTpye": "34",
//         "qid": "b63de29592421cfe1e2bfe9ff2220516",
//         "isSub": "0",
//         "isNormal": "0",
//         "isunique": "0",
//         "id": "25818401",
//         "knowledgeMore": [
//             {
//                 "id": "20257",
//                 "knowledgeName": "余角和补角",
//                 "knowledgeId": "5843342C9FDE8A11880AA20B2C3899F1"
//             },
//             {
//                 "id": "20268",
//                 "knowledgeName": "七巧板",
//                 "knowledgeId": "C79D3508E2DC8FE8524E6B88BA662656"
//             },
//             {
//                 "id": "20328",
//                 "knowledgeName": "正方形的性质",
//                 "knowledgeId": "2255538166D2E6F3C6097C2C4DF4E0BE"
//             }
//         ]
//     },
//     {
//         "title": "<img  src=\"https://img.cuotixue.com/tikuimages/2/2021/300/xuekubao22/04d02b8f-fefb-11eb-87c2-b42e9921e93e_xkb170.png\" style=\"vertical-align:middle;FLOAT:right\" w=\"190px\" h=\"116px\" />七巧板是大家熟悉的一种益智玩具，用七巧板能拼出许多有趣的图案，小聪将一块等腰直角三角形硬纸板\\((\\)如图①\\()\\)切割成七块，正好制成一副七巧板\\((\\)如图②\\()\\)，已知\\(AB=80cm\\)，则图中阴影部分的面积为\\((\\quad)cm^{2}.\\)",
//         "option_a": "\\(200\\)",
//         "option_b": "\\(\\dfrac{200}{3}\\)",
//         "option_c": "\\(50\\)",
//         "option_d": "\\(100\\)",
//         "qtpye": "选择题",
//         "diff": "3.00",
//         "year": "2021",
//         "source": "2020-2021学年河北省石家庄市平山县八年级（下）第三次月考数学模拟试卷",
//         "subjectId": "2",
//         "paperTpye": "36",
//         "qid": "2eb123a89c4c3b81a41cb41db8a59073",
//         "isSub": "0",
//         "isNormal": "1",
//         "isunique": "1",
//         "id": "25831360",
//         "knowledgeMore": [
//             {
//                 "id": "20268",
//                 "knowledgeName": "七巧板",
//                 "knowledgeId": "C79D3508E2DC8FE8524E6B88BA662656"
//             },
//             {
//                 "id": "20297",
//                 "knowledgeName": "等腰直角三角形",
//                 "knowledgeId": "F3F2FE32AADC1BD69BD884F39AA52FB5"
//             }
//         ]
//     },
//     {
//         "title": "已知\\(\\dfrac{x}{2}=\\dfrac{y}{3}=\\dfrac{z}{4}\\)，且\\(2x+3y-z=18\\)，求\\(x+y+z\\)的值．",
//         "option_a": "",
//         "option_b": "",
//         "option_c": "",
//         "option_d": "",
//         "qtpye": "解答题",
//         "diff": "2.00",
//         "year": "2022",
//         "source": "2022-2023学年浙江省宁波市鄞州区蓝青学校九年级（上）返校考数学试卷",
//         "subjectId": "2",
//         "paperTpye": "37",
//         "qid": "44ad2c4012f342ce7048ad5413029417",
//         "isSub": "0",
//         "isNormal": "0",
//         "isunique": "0",
//         "id": "31257406",
//         "knowledgeMore": [
//             {
//                 "id": "20408",
//                 "knowledgeName": "比例的性质",
//                 "knowledgeId": "215755794610B6B55E6A27F3F200BB50"
//             }
//         ]
//     },
//     {
//         "title": "若\\(\\dfrac{y}{x}=\\dfrac{3}{4}\\)，则\\(\\dfrac{2x-y}{x}=\\)______.",
//         "option_a": "",
//         "option_b": "",
//         "option_c": "",
//         "option_d": "",
//         "qtpye": "填空题",
//         "diff": "2.00",
//         "year": "2022",
//         "source": "2021-2022学年湖北省武汉二中广雅中学九年级（下）月考数学试卷（3月份）",
//         "subjectId": "2",
//         "paperTpye": "36",
//         "qid": "577c214ea921b031f932c5de6a44dbd5",
//         "isSub": "0",
//         "isNormal": "0",
//         "isunique": "0",
//         "id": "31258288",
//         "knowledgeMore": [
//             {
//                 "id": "20408",
//                 "knowledgeName": "比例的性质",
//                 "knowledgeId": "215755794610B6B55E6A27F3F200BB50"
//             }
//         ]
//     },
//     {
//         "title": "若\\(x\\)：\\(y=2\\)：\\(3\\)，则\\(\\dfrac{x}{x-y}=\\)______.",
//         "option_a": "",
//         "option_b": "",
//         "option_c": "",
//         "option_d": "",
//         "qtpye": "填空题",
//         "diff": "2.00",
//         "year": "2022",
//         "source": "2021-2022学年上海市青浦区复旦五浦汇实验学校八年级（下）期末数学试卷",
//         "subjectId": "2",
//         "paperTpye": "34",
//         "qid": "2cb5e3f29869e33038d39b1f953ca6b2",
//         "isSub": "0",
//         "isNormal": "0",
//         "isunique": "0",
//         "id": "31258688",
//         "knowledgeMore": [
//             {
//                 "id": "20408",
//                 "knowledgeName": "比例的性质",
//                 "knowledgeId": "215755794610B6B55E6A27F3F200BB50"
//             }
//         ]
//     },
//     {
//         "title": "若\\(\\dfrac{a-b}{a}=\\dfrac{3}{4}\\)，那么\\(\\dfrac{b}{a}\\)的值等于\\((\\quad)\\)",
//         "option_a": "\\(\\dfrac{2}{5}\\)",
//         "option_b": "\\(\\dfrac{1}{4}\\)",
//         "option_c": "\\(-\\dfrac{2}{5}\\)",
//         "option_d": "\\(-\\dfrac{1}{4}\\)",
//         "qtpye": "选择题",
//         "diff": "2.00",
//         "year": "2022",
//         "source": "2021-2022学年安徽省六安市霍邱县七年级（下）期末数学试卷",
//         "subjectId": "2",
//         "paperTpye": "34",
//         "qid": "2d0b992114812fd9e229a87cbadce23b",
//         "isSub": "0",
//         "isNormal": "1",
//         "isunique": "1",
//         "id": "31258848",
//         "knowledgeMore": [
//             {
//                 "id": "20408",
//                 "knowledgeName": "比例的性质",
//                 "knowledgeId": "215755794610B6B55E6A27F3F200BB50"
//             }
//         ]
//     },
//     {
//         "title": "已知：\\(\\dfrac{x}{y}=\\dfrac{3}{5}\\)，那么下列等式中，不一定成立的是\\((\\quad)\\)",
//         "option_a": "\\(5x=3y\\)",
//         "option_b": "\\(\\dfrac{x+y}{x}=\\dfrac{8}{3}\\)",
//         "option_c": "\\(x+y=8\\)",
//         "option_d": "\\(\\dfrac{x}{y}=\\dfrac{x+3}{y+5}\\)",
//         "qtpye": "选择题",
//         "diff": "2.00",
//         "year": "2022",
//         "source": "2021-2022学年上海市民办文琦中学八年级（下）期末数学试卷",
//         "subjectId": "2",
//         "paperTpye": "34",
//         "qid": "1ac496c14540c57331f7c96505783d97",
//         "isSub": "0",
//         "isNormal": "1",
//         "isunique": "1",
//         "id": "31264444",
//         "knowledgeMore": [
//             {
//                 "id": "20408",
//                 "knowledgeName": "比例的性质",
//                 "knowledgeId": "215755794610B6B55E6A27F3F200BB50"
//             }
//         ]
//     },
//     {
//         "title": "已知\\(\\dfrac{a}{b}=\\dfrac{2}{3}\\)，则下列说法错误的是\\((\\quad)\\)",
//         "option_a": "\\(\\dfrac{a+b}{b}=\\dfrac{5}{3}\\)",
//         "option_b": "\\(\\dfrac{a}{b}=-\\dfrac{a+2}{b+3}\\)",
//         "option_c": "\\(\\dfrac{a-b}{b}=-\\dfrac{1}{3}\\)",
//         "option_d": "\\(\\dfrac{a}{2}=\\dfrac{b}{3}\\)",
//         "qtpye": "选择题",
//         "diff": "2.00",
//         "year": "2022",
//         "source": "2021-2022学年山东省烟台市蓬莱市八年级（下）期末数学试卷（五四学制）",
//         "subjectId": "2",
//         "paperTpye": "34",
//         "qid": "d2b8d66a3556ff96d3a9bb91619b04ca",
//         "isSub": "0",
//         "isNormal": "1",
//         "isunique": "1",
//         "id": "31267062",
//         "knowledgeMore": [
//             {
//                 "id": "20408",
//                 "knowledgeName": "比例的性质",
//                 "knowledgeId": "215755794610B6B55E6A27F3F200BB50"
//             }
//         ]
//     },
//     {
//         "title": "若\\(\\dfrac{a}{b}=\\dfrac{2}{3}\\)，则\\(\\dfrac{a+b}{b}\\)的值等于\\((\\quad)\\)",
//         "option_a": "\\(\\dfrac{5}{3}\\)",
//         "option_b": "\\(\\dfrac{2}{5}\\)",
//         "option_c": "\\(\\dfrac{5}{2}\\)",
//         "option_d": "\\(5\\)",
//         "qtpye": "选择题",
//         "diff": "2.00",
//         "year": "2022",
//         "source": "2021-2022学年山东省淄博市桓台县八年级（下）期末数学试卷（五四学制）",
//         "subjectId": "2",
//         "paperTpye": "34",
//         "qid": "213f810b5cb22114c0f451c001ed6ce5",
//         "isSub": "0",
//         "isNormal": "1",
//         "isunique": "1",
//         "id": "31268480",
//         "knowledgeMore": [
//             {
//                 "id": "20047",
//                 "knowledgeName": "代数式求值",
//                 "knowledgeId": "A52168F7D6BD25D2D4E7F6A927CE5977"
//             },
//             {
//                 "id": "20055",
//                 "knowledgeName": "整式加减运算法则",
//                 "knowledgeId": "05D9BADACFACAC78A47CC067C4E90353"
//             },
//             {
//                 "id": "20098",
//                 "knowledgeName": "分式的化简求值",
//                 "knowledgeId": "F0D7CD6A8D00B6D0A18533C5975731FD"
//             },
//             {
//                 "id": "20408",
//                 "knowledgeName": "比例的性质",
//                 "knowledgeId": "215755794610B6B55E6A27F3F200BB50"
//             }
//         ]
//     },
//     {
//         "title": "已知\\(\\dfrac{x}{y}=\\dfrac{3}{5}\\)，则\\(\\dfrac{x}{x+y}\\)的值为\\((\\quad)\\)",
//         "option_a": "\\(\\dfrac{2}{5}\\)",
//         "option_b": "\\(\\dfrac{3}{8}\\)",
//         "option_c": "\\(\\dfrac{3}{2}\\)",
//         "option_d": "\\(\\dfrac{2}{3}\\)",
//         "qtpye": "选择题",
//         "diff": "2.00",
//         "year": "2022",
//         "source": "2021-2022学年山东省烟台市龙口市八年级（下）期末数学试卷（五四学制）",
//         "subjectId": "2",
//         "paperTpye": "34",
//         "qid": "9a203094d0a1ae0088473d9ba0be48b8",
//         "isSub": "0",
//         "isNormal": "1",
//         "isunique": "1",
//         "id": "31270190",
//         "knowledgeMore": [
//             {
//                 "id": "20408",
//                 "knowledgeName": "比例的性质",
//                 "knowledgeId": "215755794610B6B55E6A27F3F200BB50"
//             }
//         ]
//     },
//     {
//         "title": "已知\\(\\dfrac{x-y}{y}=\\dfrac{3}{2}\\)，则\\(\\dfrac{x}{y}\\)的值是______.",
//         "option_a": "",
//         "option_b": "",
//         "option_c": "",
//         "option_d": "",
//         "qtpye": "填空题",
//         "diff": "2.00",
//         "year": "2022",
//         "source": "2022-2023学年上海市奉贤区七校联考九年级（上）期中数学试卷",
//         "subjectId": "2",
//         "paperTpye": "35",
//         "qid": "0452fe50247538762f6ad726a6a59690",
//         "isSub": "0",
//         "isNormal": "0",
//         "isunique": "0",
//         "id": "31281306",
//         "knowledgeMore": [
//             {
//                 "id": "20408",
//                 "knowledgeName": "比例的性质",
//                 "knowledgeId": "215755794610B6B55E6A27F3F200BB50"
//             }
//         ]
//     },
//     {
//         "title": "已知\\(\\dfrac{a}{b}=\\dfrac{c}{d}=\\dfrac{3}{2}\\)，\\((b+d≠0)\\)，则\\(\\dfrac{a+c}{b+d}=\\)______.",
//         "option_a": "",
//         "option_b": "",
//         "option_c": "",
//         "option_d": "",
//         "qtpye": "填空题",
//         "diff": "2.00",
//         "year": "2022",
//         "source": "2022-2023学年山东省青岛市黄岛区、胶州市、平度市、西海岸新区九年级（上）期中数学试卷",
//         "subjectId": "2",
//         "paperTpye": "35",
//         "qid": "2da3fe01726318bf4483a5a3f1952465",
//         "isSub": "0",
//         "isNormal": "0",
//         "isunique": "0",
//         "id": "31297058",
//         "knowledgeMore": [
//             {
//                 "id": "20408",
//                 "knowledgeName": "比例的性质",
//                 "knowledgeId": "215755794610B6B55E6A27F3F200BB50"
//             },
//             {
//                 "id": "20409",
//                 "knowledgeName": "比例线段",
//                 "knowledgeId": "806C0BF65A5CC8E89564AC7391BB3F76"
//             }
//         ]
//     }
//     // ... 其他题目数据
// ];

// const questionsRef = ref<Question[]>(fakeData); // 将假数据分配给questionsRef
const questionsRef = ref<Question[]>(props.data);

</script>


<style scoped>

.question-container {
    width: 210mm;
    height: 297mm;
}

</style>