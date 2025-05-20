# 精选题库

还没做

<script setup>
import QuizQuestion from '../components/QuizQuestion.vue'
</script>
<QuizQuestion
  question="题目文本"
  :options="[
    { label: 'A', text: '选项A' },
    { label: 'B', text: '选项B' }
  ]"
  :correctIndex="0"
  explanation="解析说明"
/>