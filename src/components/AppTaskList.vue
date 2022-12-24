<template>
  <div class="container">
    <ul class="list-group list-group-flush">
      <li class="list-group-item" v-for="item in getList" :key="item.id">
        Название: <strong>{{ item.title }}</strong>,
        Роль: <strong>{{ getKeyByValue(ROLE, item.role) }}</strong>,
        Ответственный: <strong>{{ item.responsible }}</strong>,
        Поставщик: <strong>{{ item.provider }}</strong>,
        Статус: <strong>{{ getKeyByValue(STATUS, item.status) }}</strong>,
        Крайний срок: <strong>{{ item.deadline }}</strong>.
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getKeyByValue } from "@/helpers";
import { ROLE, STATUS } from "@/constants/filter";

export default {
  name: "AppTaskList",
  data() {
    return {
      ROLE,
      STATUS,
    }
  },
  computed: {
    ...mapGetters("TaskList", ["getList"]),
  },
  methods: {
    getKeyByValue,
  },
};
</script>

<style scoped></style>
