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
                class="form-select"
                id="filterRole"
                aria-label="Default select example"
              >
                <option selected>Не указан</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="mb-4">
              <label for="filterResponsible" class="form-label">
                Ответственный
              </label>
              <input type="text" class="form-control" id="filterResponsible" />
            </div>
            <div class="mb-4">
              <label for="filterProvider" class="form-label">Поставщик</label>
              <input type="text" class="form-control" id="filterProvider" />
            </div>
            <div class="mb-4">
              <label for="filterTitle" class="form-label">Название</label>
              <input type="text" class="form-control" id="filterTitle" />
            </div>
            <div class="mb-4">
              <label for="filterStatus" class="form-label">Статус</label>
              <select
                class="form-select"
                id="filterStatus"
                aria-label="Default select example"
              >
                <option selected>Не указан</option>
                <option value="1">Active</option>
                <option value="2">Closed</option>
              </select>
            </div>
            <div class="mb-4">
              <label for="filterDeadline" class="form-label">
                Крайний срок
              </label>
              <input type="date" class="form-control" id="filterDeadline" />
            </div>

            <div class="row justify-content-center">
              <div class="col-auto">
                <button type="button" class="btn btn-primary">Найти</button>
              </div>
              <div class="col-auto">
                <button type="button" class="btn btn-light">Сбросить</button>
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

export default {
  name: "AppFilter",
  data() {
    return {
      dropdownTrigger: null,
      dropdown: null,
    };
  },
  mounted() {
    this.dropdownTrigger = this.$refs.dropdownToggle;
    this.dropdown = new Dropdown(this.dropdownTrigger, {
      autoClose: "outside",
      reference: this.$refs.input,
    });
  },
  methods: {
    onInputFocus() {
      this.dropdown.show();
    },
    returnFocus() {
      this.$refs.input.focus();
    },
  },
};
</script>

<style></style>
