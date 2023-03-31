<template>
  <section class="todo-section">
    <section class="todo-list">
      <h2>ToDo List</h2>
      <h2 v-show="todos.length === 0">No Todos Here!</h2>
      <ul class="task-list">
        <li class="task-list-item" v-for="todo in todos">
          <label :class="{view: todo.isEditing}" class="task-list-item-label">
            <vs-list>
              <vs-list-item
                  :class="{ done: todo.done }"
                  :title="todo.title"
                  :subtitle="todo.description">
              </vs-list-item>
            </vs-list>
          </label>

          <div class="edit-form" v-if="todo.isEditing">
            <vs-input
                danger-text="The title field must not be empty!"
                label="Title" class="inputx"
                placeholder="Enter Title"
                v-model="todo.title"/>
            <vs-textarea
                label="Enter Description"
                class="description"
                width="100%"
                v-model="todo.description"/>
          </div>

          <span class="custom-btn" v-if="!todo.isEditing">
            <vs-icon
                size="small"
                color="red"
                icon="delete"
                @click="deleteTodo(todo)">
            </vs-icon>
          </span>

          <span class="custom-btn edit-btn" v-if="!todo.isEditing">
            <vs-icon
                size="small"
                color="orange"
                icon="edit"
                @click="todo.isEditing = !todo.isEditing">
            </vs-icon>
          </span>

          <span class="custom-btn save-btn" v-if="todo.isEditing">
            <vs-icon
                size="small"
                color="green"
                icon="check"
                @click.prevent="editTodo(todo)">
            </vs-icon>
          </span>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
import { todos } from "@/store/todos"
import { inject } from "vue";

export default {
  name: 'TodoList',
  setup() {
    const $vs = inject('$vs')

    function deleteTodo(todo) {
      todos.value = todos.value.filter((x) => x !== todo)
    }

    function editTodo(todo) {
      if (todo.title.trim() === "") {
        $vs.notify({
          title: 'Notification',
          text: 'The title field must not be empty!',
          color: 'danger',
          position: 'top-right',
          icon: 'error'
        })
        return
      }

      if (todo.description.trim() === "") {
        $vs.notify({
          title: 'Notification',
          text: 'The description field must not be empty!',
          color: 'danger',
          position: 'top-right',
          icon: 'error'
        })
        return;
      }

      todo.isEditing = !todo.isEditing
    }

    return {
      deleteTodo,
      editTodo,
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
  cursor: default;
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
    //cursor: pointer;
  }
}

.custom-btn {
  margin-left: auto;
  display: block;
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  background-size: 16px;
  background-position: center;
  cursor: pointer;
}

.edit-btn {
  margin-left: 5px;
  margin-right: 5px;
}

.save-btn {
  margin-right: 5px;
}

.view {
  display: none;
}

.edit-form {
  max-width: 380px;
  width: 100%;
}
</style>