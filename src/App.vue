<template>
  <HeaderVue @toggle-dark-mode="toggleDarkMode" />
  <AddTodoVue @add-todo="addTodo" />

  <div
    class="rounded-lg w-full mt-6 overflow-hidden shadow-xl shadow-gray-300 dark:shadow-black"
  >
    <TaskTileVue
      v-for="task in filteredItems"
      :key="task.id"
      :task="task"
      @delete-todo="deleteTodo"
    />
    <TodoFooterVue
      :tabs="tabs"
      :tasks="tasks"
      @toggle-button="toggleButton"
      @delete-complete-todo="deleteCompleteTodo"
    />
  </div>
  <MobileFooterVue
    class="x-sm:hidden"
    :tabs="tabs"
    :tasks="tasks"
    @toggle-button="toggleButton"
    @delete-complete-todo="deleteCompleteTodo"
  />

  <div
    class="text-center pt-28 text-2xl italic text-gray-700"
    v-if="tasks.length === 0"
  >
    What do you want to do today!!
  </div>
</template>

<script>
import TaskTileVue from "./components/TaskTile.vue";
import MobileFooterVue from "./components/MobileFooter.vue";

import TodoFooterVue from "./components/TodoFooter.vue";
import HeaderVue from "./components/Header.vue";
import AddTodoVue from "./components/AddTodo.vue";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);

export default {
  components: {
    HeaderVue,
    AddTodoVue,
    TaskTileVue,
    TodoFooterVue,
    MobileFooterVue,
  },

  data() {
    return {
      tabs: ["All", "Active", "Complete"],
      tasks: [],
      numberOfItem: 0,
      activeTab: "All",
    };
  },
  computed: {
    filteredItems() {
      if (this.activeTab === "Active") {
        // this.activeTab = "Active";
        return this.tasks.filter((task) => task.complete !== true);
      } else if (this.activeTab === "Complete") {
        let completed = this.tasks.filter((task) => task.complete === true);
        if (completed.length === 0) {
          alert("No completed Task");
          return;
        } else {
          return completed;
        }
      } else {
        return this.tasks;
      }
    },
  },
  methods: {
    addTodo(newTodo) {
      this.tasks = [...this.tasks, newTodo];
    },
    deleteTodo(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    toggleButton(tabBtn) {
      this.activeTab = tabBtn;
    },
    deleteCompleteTodo() {
      this.tasks = this.tasks.filter((task) => task.complete !== true);
    },
    toggleDarkMode() {
      toggleDark();

      this.darkMode = toggleDark;
      if (this.darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
};
</script>

<style></style>
