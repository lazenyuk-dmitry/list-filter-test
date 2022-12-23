import { createStore } from "vuex";
import TaskList from "./modules/task-list";

export default createStore({
  modules: {
    TaskList,
  },
});
