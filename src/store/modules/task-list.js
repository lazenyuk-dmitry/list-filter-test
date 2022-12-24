import { ROLE, STATUS } from "@/constants/filter";

export default {
  namespaced: true,
  state() {
    return {
      list: [
        {
          id: 1,
          title: "Дубликаты контактов",
          role: ROLE.One,
          responsible: "Ерганат Мерзентай",
          provider: "Microsoft",
          status: STATUS.Active,
          deadline: "2023-1-30",
        },
        {
          id: 2,
          title: "Подготовить отчет",
          role: ROLE.One,
          responsible: "Ерганат Мерзентай",
          provider: "Microsoft",
          status: STATUS.Active,
          deadline: "2023-1-10",
        },
        {
          id: 3,
          title: "Сдать отчет",
          role: ROLE.Two,
          responsible: "Беляева Диана",
          provider: "Twitted",
          status: STATUS.Closed,
          deadline: "2023-2-10",
        },
        {
          id: 4,
          title: "Заполнить заявки",
          role: ROLE.Two,
          responsible: "Беляева Диана",
          provider: "Microsoft",
          status: STATUS.Closed,
          deadline: "2023-2-30",
        },
        {
          id: 5,
          title: "Задание 1",
          role: ROLE.Three,
          responsible: "Нефедова Зоя",
          provider: "Facebook",
          status: STATUS.Wait,
          deadline: "2023-1-25",
        },
        {
          id: 6,
          title: "Задание 22",
          role: ROLE.Two,
          responsible: "Нечаев Тимур",
          provider: "VK",
          status: STATUS.Wait,
          deadline: "2023-1-5",
        },
        {
          id: 7,
          title: "Верстка сайта",
          role: ROLE.One,
          responsible: "Нечаев Тимур",
          provider: "VK",
          status: STATUS.Active,
          deadline: "2023-1-28",
        },
        {
          id: 8,
          title: "Выступление",
          role: ROLE.One,
          responsible: "Нечаев Тимур",
          provider: "VK",
          status: STATUS.Active,
          deadline: "2023-1-28",
        },
        {
          id: 9,
          title: "Верстка сайта",
          role: ROLE.One,
          responsible: "Нечаев Тимур",
          provider: "VK",
          status: STATUS.Active,
          deadline: "2023-1-12",
        },
        {
          id: 10,
          title: "Верстка сайта",
          role: ROLE.Two,
          responsible: "Нечаев Тимур",
          provider: "Instagram",
          status: STATUS.Active,
          deadline: "2023-3-11",
        },
        {
          id: 11,
          title: "Верстка сайта",
          role: ROLE.Two,
          responsible: "Фомичева Ева",
          provider: "Instagram",
          status: STATUS.Active,
          deadline: "2023-3-15",
        },
        {
          id: 12,
          title: "Подготовить отчет",
          role: ROLE.Two,
          responsible: "Фомичева Ева",
          provider: "Instagram",
          status: STATUS.Active,
          deadline: "2023-3-15",
        },
        {
          id: 13,
          title: "Задание 55",
          role: ROLE.Two,
          responsible: "Фомичева Ева",
          provider: "Instagram",
          status: STATUS.Closed,
          deadline: "2023-4-16",
        },
        {
          id: 14,
          title: "Задание 55",
          role: ROLE.Two,
          responsible: "Фомичева Ева",
          provider: "Instagram",
          status: STATUS.Active,
          deadline: "2023-4-16",
        },
        {
          id: 15,
          title: "Дубликаты контактов",
          role: ROLE.One,
          responsible: "Ерганат Мерзентай",
          provider: "Microsoft",
          status: STATUS.Wait,
          deadline: "2023-1-11",
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
