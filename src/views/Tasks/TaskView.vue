<template>
  <todo-form/>
  <todo-list/>
</template>

<script>
import TodoForm from "@/components/TodoForm.vue"
import TodoList from "@/components/TodoList.vue"

export default {
  components: {
    TodoForm,
    TodoList
  }
}
</script>

<style lang="scss">
.vs-noti-top-right {
  margin-top: 50px !important;
}
</style>
