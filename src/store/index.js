import { createStore } from "vuex";
import TaskList from "./modules/task-list";
import AppFilter from "./modules/app-filter";

export default createStore({
  modules: {
    TaskList,
    AppFilter,
  },
});
