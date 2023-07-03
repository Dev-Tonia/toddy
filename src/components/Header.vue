<template>
  <div class="flex justify-between w-full mb-6">
    <h1 class="text-white text-4xl font-bold tracking-[.25em]">TODO</h1>
    <div
      @click="$emit('toggle-dark-mode')"
      class="cursor-pointer bg-light-icon dark:bg-dark-icon w-8 bg-auto bg-no-repeat"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Header",
  // props: ["isDark"],
};
</script>

<style></style>
