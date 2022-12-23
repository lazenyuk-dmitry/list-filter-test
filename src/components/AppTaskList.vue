<template>
  <div class="container">
    <ul class="list-group list-group-flush">
      <li class="list-group-item" v-for="item in getList" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AppTaskList",
  computed: {
    ...mapGetters("TaskList", ["getList"]),
  },
};
</script>

<style scoped></style>
