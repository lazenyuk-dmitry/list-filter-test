export default {
  namespaced: true,
  state() {
    return {
      role: "",
      responsible: "",
      provider: "",
      title: "",
      status: "",
      deadline: "",
    };
  },
  getters: {
    getFilters(state) {
      return {
        ...state,
      };
    },
    getActiveFilters(state, getters) {
      const filters = getters.getFilters;
      const result = {};

      Object.entries(filters).forEach(([key, value]) => {
        if (value !== "") {
          result[key] = value;
        }
      });

      return result;
    },

    getActiveFiltersCount(state, getters) {
      let activeFilters = getters.getActiveFilters;

      return Object.keys(activeFilters).length;
    },
  },
  mutations: {
    setFilters(state, { data }) {
      state.role = data.role;
      state.responsible = data.responsible;
      state.provider = data.provider;
      state.title = data.title;
      state.status = data.status;
      state.deadline = data.deadline;
    },
  },
  actions: {
    setFilters({ commit }, { data }) {
      commit("setFilters", { data });
    },
  },
};
