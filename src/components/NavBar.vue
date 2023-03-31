<template>
  <div class="con-type-example">
    <vs-navbar
        v-model="indexActive"
        text-color="rgba(255,255,255,.6)"
        active-text-color="rgba(255,255,255,1)"
        class="myNavbar">

      <div slot="title">
        <vs-navbar-title>
          ToDo List
        </vs-navbar-title>
      </div>

      <vs-navbar-item index="0">
        <vs-button type="line">
          <router-link to="/">Home</router-link>
        </vs-button>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <vs-button type="line">
          <router-link to="/tasks">Task</router-link>
        </vs-button>
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>

<script setup>
import { ref } from "vue"

const indexActive = ref(0)
</script>

<style lang="scss">
.vs-navbar {
  justify-content: flex-start !important;
}

.vs-navbar-after {
  background: rgb(0, 100, 255) !important;
}

.vs-navbar--item {
  margin-right: 10px;
}
</style>
