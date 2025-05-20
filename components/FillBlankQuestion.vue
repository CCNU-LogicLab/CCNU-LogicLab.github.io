// 填空题组件
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
    // 正确答案 (可以是单个字符串或字符串数组，数组表示有多个可接受的答案)
    correctAnswer: {
        type: [String, Array],
        required: true,
        validator(value) {
            if (Array.isArray(value)) {
                return value.length > 0 && value.every(item => typeof item === 'string');
            }
            return typeof value === 'string';
        }
    },
    // 是否区分大小写
    caseSensitive: {
        type: Boolean,
        default: false
    },
    // 解析说明
    explanation: {
        type: String,
        default: ''
    },
    // 提示文本
    placeholder: {
        type: String,
        default: '请输入答案'
    }
});

// 用户输入的答案
const userAnswer = ref('');
// 是否已提交答案
const isSubmitted = ref(false);
// 是否答对
const isCorrect = ref(false);

// 检查答案是否正确
function checkAnswer() {
    const correctAnswers = Array.isArray(props.correctAnswer)
        ? props.correctAnswer
        : [props.correctAnswer];

    const userAns = props.caseSensitive ? userAnswer.value : userAnswer.value.toLowerCase();

    return correctAnswers.some(answer => {
        const correctAns = props.caseSensitive ? answer : answer.toLowerCase();
        return userAns === correctAns;
    });
}

// 提交答案
function submitAnswer() {
    if (userAnswer.value.trim() !== '' && !isSubmitted.value) {
        isSubmitted.value = true;
        isCorrect.value = checkAnswer();
    }
}

// 重置
function reset() {
    userAnswer.value = '';
    isSubmitted.value = false;
    isCorrect.value = false;
}
</script>

<template>
    <div class="quiz-container" :class="{ 'dark': isDark }">
        <div class="question">
            {{ question }}
        </div>

        <div class="input-area">
            <input type="text" class="answer-input" v-model="userAnswer" :placeholder="placeholder"
                :disabled="isSubmitted" :class="{
                    'correct-input': isSubmitted && isCorrect,
                    'incorrect-input': isSubmitted && !isCorrect
                }" @keyup.enter="submitAnswer" />
        </div>

        <div class="controls">
            <button class="submit-btn" @click="submitAnswer" :disabled="userAnswer.trim() === '' || isSubmitted">
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
            <div v-if="!isCorrect" class="correct-answer">
                <strong>正确答案:</strong>
                {{ Array.isArray(props.correctAnswer) ? props.correctAnswer.join(' 或 ') : props.correctAnswer }}
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

.input-area {
    margin-bottom: 20px;
}

.answer-input {
    width: 100%;
    max-width: 500px;
    padding: 10px 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 1rem;
    transition: all 0.2s;
    background-color: white;
}

.answer-input:focus {
    outline: none;
    border-color: #40a9ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
}

.answer-input.correct-input {
    border-color: #52c41a;
    background-color: #f6ffed;
}

.answer-input.incorrect-input {
    border-color: #f5222d;
    background-color: #fff2f0;
}

.answer-input:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
}

/* 暗色模式样式 */
.dark .quiz-container {
    background-color: #252529;
    border-color: #313136;
}

.dark .answer-input {
    background-color: #16161a;
    border-color: #313136;
    color: #e0e0e0;
}

.dark .answer-input:focus {
    border-color: #177ddc;
    box-shadow: 0 0 0 2px rgba(23, 125, 220, 0.2);
}

.dark .answer-input.correct-input {
    border-color: #389e0d;
    background-color: #162312;
}

.dark .answer-input.incorrect-input {
    border-color: #cf1322;
    background-color: #2a1215;
}

.dark .answer-input:disabled {
    background-color: #303030;
    color: #8c8c8c;
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

.correct-answer {
    margin-top: 10px;
    padding: 10px;
    background-color: #f6ffed;
    border-radius: 10px;
    border-left: 4px solid #b7eb8f;
    transition: background-color 0.3s, border-color 0.3s;
}

.dark .correct-answer {
    background-color: #162312;
    border-left-color: #274916;
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
