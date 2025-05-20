// 判断题组件
<script setup>
import { ref, computed } from 'vue';
import { useData } from 'vitepress';

// 从 VitePress 获取当前主题模式
const { isDark } = useData();

const props = defineProps({
    // 题目文本
    question: {
        type: String,
        required: true
    },
    // 正确答案 (true 为正确，false 为错误)
    correctAnswer: {
        type: Boolean,
        required: true
    },
    // 解析说明
    explanation: {
        type: String,
        default: ''
    }
});

// 用户选择的答案 (true 为"正确"，false 为"错误"，null 为未选择)
const selectedAnswer = ref(null);
// 是否已提交答案
const isSubmitted = ref(false);
// 是否答对
const isCorrect = ref(false);

// 选择答案
function selectAnswer(answer) {
    if (!isSubmitted.value) {
        selectedAnswer.value = answer;
    }
}

// 提交答案
function submitAnswer() {
    if (selectedAnswer.value !== null && !isSubmitted.value) {
        isSubmitted.value = true;
        isCorrect.value = selectedAnswer.value === props.correctAnswer;
    }
}

// 重置
function reset() {
    selectedAnswer.value = null;
    isSubmitted.value = false;
    isCorrect.value = false;
}
</script>

<template>
    <div class="quiz-container" :class="{ 'dark': isDark }">
        <div class="question">
            {{ question }}
        </div>

        <div class="options">
            <div class="option" :class="{
                'selected': selectedAnswer === true,
                'correct': isSubmitted && props.correctAnswer === true,
                'incorrect': isSubmitted && selectedAnswer === true && props.correctAnswer === false
            }" @click="selectAnswer(true)">
                <span class="option-label">正确</span>
            </div>
            <div class="option" :class="{
                'selected': selectedAnswer === false,
                'correct': isSubmitted && props.correctAnswer === false,
                'incorrect': isSubmitted && selectedAnswer === false && props.correctAnswer === true
            }" @click="selectAnswer(false)">
                <span class="option-label">错误</span>
            </div>
        </div>

        <div class="controls">
            <button class="submit-btn" @click="submitAnswer" :disabled="selectedAnswer === null || isSubmitted">
                提交答案
            </button>
            <button v-if="isSubmitted" class="reset-btn" @click="reset">
                重新作答
            </button>
        </div>

        <div v-if="isSubmitted" class="result">
            <div :class="isCorrect ? 'correct-msg' : 'incorrect-msg'">
                {{ isCorrect ? '回答正确！' : '回答错误！' }}
            </div>
            <div v-if="explanation" class="explanation">
                <strong>解析:</strong> {{ explanation }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.quiz-container {
    margin: 20px 0;
    padding: 20px;
    border: 1px solid #eaecef;
    border-radius: 12px;
    background-color: #f9f9f9;
    transition: background-color 0.3s, border-color 0.3s;
}

.question {
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 16px;
}

.options {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 20px;
}

.option {
    padding: 12px 16px;
    border: 1px solid #ddd;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    background-color: white;
    max-width: 200px;
}

/* 暗色模式样式 */
.dark .quiz-container {
    background-color: #252529;
    border-color: #313136;
}

.dark .option {
    background-color: #16161a;
    border-color: #313136;
}

.option:hover {
    background-color: #f0f7ff;
    border-color: #c0d8ff;
}

.option.selected {
    background-color: #e6f7ff;
    border-color: #91d5ff;
}

.option.correct {
    background-color: #f6ffed;
    border-color: #b7eb8f;
}

.option.incorrect {
    background-color: #fff2f0;
    border-color: #ffccc7;
}

/* 暗色模式下的选项状态 */
.dark .option:hover {
    background-color: #292d44;
    border-color: #364a75;
}

.dark .option.selected {
    background-color: #11294d;
    border-color: #15395b;
}

.dark .option.correct {
    background-color: #162312;
    border-color: #274916;
}

.dark .option.incorrect {
    background-color: #2a1215;
    border-color: #5c2223;
}

.option-label {
    font-weight: 600;
    display: inline-block;
}

.controls {
    display: flex;
    gap: 10px;
    margin-bottom: 16px;
}

.submit-btn,
.reset-btn {
    padding: 8px 16px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.2s;
    border: none;
}

.submit-btn {
    background-color: #1890ff;
    color: white;
}

.submit-btn:hover {
    background-color: #40a9ff;
}

.submit-btn:disabled {
    background-color: #d9d9d9;
    cursor: not-allowed;
}

/* 暗色模式下的按钮样式 */
.dark .submit-btn:disabled {
    background-color: #424242;
    color: #8c8c8c;
}

.reset-btn {
    background-color: #f0f0f0;
    color: #595959;
}

.reset-btn:hover {
    background-color: #d9d9d9;
}

/* 暗色模式下的重置按钮 */
.dark .reset-btn {
    background-color: #303030;
    color: #d9d9d9;
}

.dark .reset-btn:hover {
    background-color: #424242;
}

.result {
    margin-top: 20px;
    padding: 12px;
    border-radius: 10px;
}

.correct-msg {
    color: #52c41a;
    font-weight: 600;
}

.incorrect-msg {
    color: #f5222d;
    font-weight: 600;
}

.explanation {
    margin-top: 10px;
    padding: 10px;
    background-color: #fffbe6;
    border-radius: 10px;
    border-left: 4px solid #ffe58f;
    transition: background-color 0.3s, border-color 0.3s;
}

/* 暗色模式下的解析样式 */
.dark .explanation {
    background-color: #2b2111;
    border-left-color: #594214;
}
</style>
