<template>
  <section class="todo-section">
    <div class="todo-list">
      <h2>ToDo List</h2>
      <h2 v-show="todos.length === 0">No Todos Here!</h2>
      <ul class="task-list">
        <div v-for="todo in todos">
          <li class="task-list-item" v-if="!todo.isEditing">
            <label class="task-list-item-label" v-if="!todo.isEditing">
              <vs-checkbox
                  class="checkbox"
                  icon="close"
                  color="danger"
                  v-model="todo.done">
              </vs-checkbox>
              <vs-list>
                <vs-list-item
                    :class="{ done: todo.done }"
                    :title="todo.title"
                    :subtitle="todo.description">
                </vs-list-item>
              </vs-list>
            </label>
          </li>
        </div>
      </ul>
    </div>
  </section>
</template>

<script>
import { todos } from "@/components/Todo/todos"
import { onMounted, watch } from "vue";

export default {
  setup() {
    watch(
        todos,
        (newTodoValue) => {
          localStorage.setItem("todos", JSON.stringify(newTodoValue))
        },
        {deep: true}
    )

    onMounted(() => {
      todos.value = JSON.parse(localStorage.getItem("todos")) || []
    })

    return {
      todos
    }
  }
}
</script>

<style lang="scss">
.vs-checkbox--check {
  height: auto !important;
}

.todo-list {
  border-radius: 8px;
  width: 100%;
  max-width: 480px;
  max-height: 100%;
  background-color: white;
  padding: 24px;
  overflow: auto;
}

.todo-section {
  margin: 0;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.done {
  text-decoration: line-through;
}

ul {
  list-style: none;
  padding: 0;
}

.task-list-item-label {
  align-items: center !important;
  line-height: 15px !important;
}

.task-list-item {
  background-color: snow;
  border-radius: 4px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  padding: 8px;

  &-label {
    display: flex;
    align-items: flex-start;
    color: black;
    margin-right: 8px;
    font-size: 14px;
    line-height: 24px;
    position: relative;
    transition: .2s;
    cursor: pointer;
  }
}
</style>