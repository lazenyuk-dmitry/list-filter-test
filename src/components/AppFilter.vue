<template>
  <div class="container">
    <div class="row py-4">
      <div class="col-auto me-5">
        <h2>Мои задачи</h2>
      </div>
      <div class="col">
        <div class="dropdown">
          <input
            type="text"
            class="form-control"
            placeholder="Фильтр + поиск"
            ref="input"
            :value="filterString"
            readonly
            @click.stop="onInputFocus"
          />

          <!-- data-bs-toggle required -->
          <button
            class="d-none"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            ref="dropdownToggle"
          ></button>
          <form class="dropdown-menu p-4 w-100">
            <div class="mb-4">
              <label for="filterRole" class="form-label">Роль</label>
              <select
                v-model.lazy="formData.role"
                class="form-select"
                id="filterRole"
                aria-label="Default select example"
              >
                <option selected value="">Не указан</option>
                <option v-for="(val, key) in ROLE" :key="val" :value="val">
                  {{ key }}
                </option>
              </select>
            </div>
            <div class="mb-4">
              <label for="filterResponsible" class="form-label">
                Ответственный
              </label>
              <input
                v-model.lazy="formData.responsible"
                type="text"
                class="form-control"
                id="filterResponsible"
              />
            </div>
            <div class="mb-4">
              <label for="filterProvider" class="form-label">Поставщик</label>
              <input
                v-model.lazy="formData.provider"
                type="text"
                class="form-control"
                id="filterProvider"
              />
            </div>
            <div class="mb-4">
              <label for="filterTitle" class="form-label">Название</label>
              <input
                v-model.lazy="formData.title"
                type="text"
                class="form-control"
                id="filterTitle"
              />
            </div>
            <div class="mb-4">
              <label for="filterStatus" class="form-label">Статус</label>
              <select
                v-model.lazy="formData.status"
                class="form-select"
                id="filterStatus"
                aria-label="Default select example"
              >
                <option selected value="">Не указан</option>
                <option v-for="(val, key) in STATUS" :key="val" :value="val">
                  {{ key }}
                </option>
              </select>
            </div>
            <div class="mb-4">
              <label for="filterDeadline" class="form-label">
                Крайний срок
              </label>
              <input
                v-model.lazy="formData.deadline"
                type="date"
                class="form-control"
                id="filterDeadline"
              />
            </div>

            <div class="row justify-content-center">
              <div class="col-auto">
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="applyFilters"
                >
                  Найти
                </button>
              </div>
              <div class="col-auto">
                <button type="button" class="btn btn-light" @click="resetFilters">Сбросить</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Dropdown } from "bootstrap";
import { ROLE, STATUS } from "@/constants/filter";
import { mapActions } from "vuex";
import { getKeyByValue } from "@/helpers";

export default {
  name: "AppFilter",
  data() {
    return {
      dropdownTrigger: null,
      dropdown: null,
      ROLE,
      STATUS,
      formData: {
        role: "",
        responsible: "",
        provider: "",
        title: "",
        status: "",
        deadline: "",
      },
    };
  },
  mounted() {
    this.dropdownTrigger = this.$refs.dropdownToggle;
    this.dropdown = new Dropdown(this.dropdownTrigger, {
      autoClose: "outside",
      reference: this.$refs.input,
    });
  },
  computed: {
    filterString() {
      let string = "";

      Object.entries(this.formData).forEach(([key, value]) => {
        let filterName = null;

        if (value !== "" && typeof value === 'string') {
          filterName = value;
        }

        if (value !== "" && key === 'role') {
          filterName = getKeyByValue(ROLE, value);
        }

        if (value !== "" && key === 'status') {
          filterName = getKeyByValue(STATUS, value);
        }

        if (filterName) {
          string = !string ? `${filterName}` : `${string} + ${filterName}`;
        }
      });

      return string;
    }
  },
  methods: {
    ...mapActions("AppFilter", ["setFilters"]),

    onInputFocus() {
      this.dropdown.show();
    },
    returnFocus() {
      this.$refs.input.focus();
    },
    applyFilters() {
      this.setFilters({ data: this.formData });
    },
    resetFilters() {
      Object.entries(this.formData).forEach(([key, value]) => {
        this.formData[key] = "";
      });

      this.applyFilters();
    },
  },
};
</script>

<style></style>
