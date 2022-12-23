export default {
  namespaced: true,
  state() {
    return {
      list: [
        {
          id: 1,
          title: "Дубликаты контактов",
          role: "1",
          responsible: "Ерганат Мерзентай",
          status: "Active",
          deadline: "2023-1-30",
        },
        {
          id: 2,
          title: "Подготовить отчет",
          role: "1",
          responsible: "Ерганат Мерзентай",
          status: "Active",
          deadline: "2023-1-10",
        },
        {
          id: 3,
          title: "Сдать отчет",
          role: "2",
          responsible: "Беляева Диана",
          status: "Closed",
          deadline: "2023-2-10",
        },
        {
          id: 4,
          title: "Заполнить заявки",
          role: "2",
          responsible: "Беляева Диана",
          status: "Closed",
          deadline: "2023-2-30",
        },
      ],
    };
  },
  getters: {
    getList(state) {
      return state.list;
    },
  },
};
