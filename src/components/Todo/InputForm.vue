<template>
  <section class="form-section">
    <h2>ToDo List Application</h2>
    <div class="form-section-inputs">
      <div class="create-todo-form">
        <div class="centerx default-input wrapper-input">
          <vs-input
              :danger="titleError"
              danger-text="The title field must not be empty!"
              label="Title" class="inputx"
              placeholder="Enter Title"
              v-model="title"/>
          <vs-textarea
              label="Enter Description"
              class="description"
              width="100%"
              v-model="description"/>
        </div>
        <vs-button
            @click.prevent="addTodo"
            color="primary"
            type="border"
            form="create-todo-form">
          Add ToDo
        </vs-button>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, ref, watch } from "vue"
import { todos } from "@/components/Todo/todos"
import { inject } from 'vue'

export default {
  name: 'InputForm',
  setup() {
    const title = ref('')
    const description = ref('')
    const titleError = ref(false)
    const descriptionError = ref(false)
    const counterDanger = ref(false)
    const $vs = inject('$vs')

    function addTodo() {
      if (title.value.trim() === "") {
        titleError.value = true
        $vs.notify({
          title: 'Notification',
          text: 'The title field must not be empty!',
          color: 'danger',
          position: 'top-right',
          icon: 'error'
        })
        return
      }

      if (description.value.trim() === "") {
        descriptionError.value = true
        $vs.notify({
          title: 'Notification',
          text: 'The description field must not be empty!',
          color: 'danger',
          position: 'top-right',
          icon: 'error'
        })
        return
      }

      todos.value.unshift({
        title: title.value,
        description: description.value,
        done: false,
        isEditing: false
      })

      $vs.notify({
        title: 'Notification',
        text: 'ToDo created successfully!',
        color: 'success',
        position: 'top-right',
        icon: 'check_box'
      })

      titleError.value = false
      descriptionError.value = false
      title.value = ""
      description.value = ""
    }

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
      addTodo,
      title,
      description,
      titleError,
      descriptionError,
      counterDanger
    }
  }
}
</script>

<style lang="scss">
.wrapper-input {
  display: inherit;
  margin-top: 20px;
}

.description {
  margin-top: 10px;
  background-color: white;
}

.inputx {
  width: auto;
}

.form-section {
  margin-top: 50px;
}

.form-section-inputs {
  display: flex;
  justify-content: center;
}

.create-todo-form {
  max-width: 480px;
  width: 100%;
}
</style>