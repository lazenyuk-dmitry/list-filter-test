export default {
  namespaced: true,
  state() {
    return {
      list: [
        {
          id: 1,
          title: "Дубликаты контактов",
          role: 1,
          responsible: "Ерганат Мерзентай",
          provider: "Microsoft",
          status: 1,
          deadline: "2023-1-30",
        },
        {
          id: 2,
          title: "Подготовить отчет",
          role: 1,
          responsible: "Ерганат Мерзентай",
          provider: "Microsoft",
          status: 1,
          deadline: "2023-1-10",
        },
        {
          id: 3,
          title: "Сдать отчет",
          role: 2,
          responsible: "Беляева Диана",
          provider: "Microsoft",
          status: 2,
          deadline: "2023-2-10",
        },
        {
          id: 4,
          title: "Заполнить заявки",
          role: 2,
          responsible: "Беляева Диана",
          provider: "Microsoft",
          status: 2,
          deadline: "2023-2-30",
        },
      ],
    };
  },
  getters: {
    getList(state, getters, rootState, rootGetters) {
      const filters = rootGetters["AppFilter/getFilters"];
      const activeFiltersCount = rootGetters["AppFilter/getActiveFiltersCount"];

      return state.list.filter((item) => {
        let matchCount = 0;

        for (const [key, value] of Object.entries(item)) {
          if (typeof value === "string") {
            if (filters[key] !== "" && value.indexOf(filters[key]) !== -1) {
              matchCount++;
            }
          }

          if (typeof value === "number") {
            if (filters[key] !== "" && value === filters[key]) {
              matchCount++;
            }
          }

          if (key === "deadline") {
            if (
              filters[key] !== "" &&
              new Date(value) <= new Date(filters[key])
            ) {
              matchCount++;
            }
          }
        }

        return matchCount === activeFiltersCount;
      });
    },
  },
};
