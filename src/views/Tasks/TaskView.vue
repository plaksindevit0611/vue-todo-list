<template>
  <input-form/>
  <todo-list/>
</template>

<script>
import InputForm from "@/components/Todo/InputForm.vue"
import TodoList from "@/components/Todo/TodoList.vue"

export default {
  components: {
    InputForm,
    TodoList
  }
}
</script>

<style lang="scss">
.vs-noti-top-right {
  margin-top: 50px !important;
}
</style>
