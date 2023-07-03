<template>
  <div
    v-if="tasks.length === 0 ? false : true"
    class="flex justify-center items-center shadow-xl shadow-gray-300 dark:shadow-black bg-white text-gray-400 py-2 px-5 dark:bg-slate-800 mt-6 rounded-xl"
  >
    <div class="">
      <span
        v-for="(tab, index) in tabs"
        :key="index"
        class="inline-block mx-2 cursor-pointer"
        :class="{
          'text-blue-500': activeBtn === tab,
          'text-gray-400': activeBtn !== tab,
        }"
        @click="toggleButton(tab)"
        >{{ tab }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["tasks", "tabs"],
  data() {
    return {
      activeBtn: this.tabs[0],
    };
  },
  methods: {
    toggleButton(tabBtn) {
      this.activeBtn = this.activeBtn === tabBtn ? null : tabBtn;
      this.$emit("toggle-button", tabBtn);
    },
  },
  computed: {
    getNumberOfItems() {
      let numberOfItem = this.tasks.filter((task) => task.complete !== true);
      return numberOfItem.length;
    },
  },
};
</script>

<style></style>
