<template>
    <div class="con-type-example">
        <vs-navbar>
            <div slot="title">
                <vs-navbar-title>
                    TODO LIST APP
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

<style lang="scss">
.vs-navbar {
  justify-content: flex-start !important;

  .vs-button {
    border-bottom-width: 0 !important;
  }
}

.vs-navbar--item {
  margin-right: 10px;
}
</style>
