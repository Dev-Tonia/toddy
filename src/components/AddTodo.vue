<template>
  <div class="w-full flex gap-4 bg-white py-2 px-5 rounded">
    <input type="radio" class="border-0 inline-block" />
    <input
      type="text"
      class="w-full text-left border-0 outline-0 inline-block text-black"
      v-model.trim="text"
      @keyup.enter="onEnter"
      placeholder="Currently typing"
    />
  </div>
</template>

<script>
export default {
  //   props: {
  //     taskText: String,
  //   },
  data() {
    return {
      text: "",
    };
  },
  methods: {
    onEnter(e) {
      if (!this.text) {
        alert("Please Add a text");
        return;
      }
      this.text = this.text.charAt(0).toUpperCase() + this.text.slice(1);

      let newTodo = {
        id: Math.floor(Math.random() * 100000),
        todo: this.text,
        complete: false,
      };
      this.$emit("add-todo", newTodo);

      // console.log(this.text);
      this.text = "";
      e.target.blur();
    },
  },
};
</script>

<style></style>
