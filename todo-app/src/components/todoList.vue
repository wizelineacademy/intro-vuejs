<template>
  <ul class="list-group">
    <li v-for="(item, index) in list" :key="index" class="list-group-item">
      <button v-on:click="deleteTask(item)" class="btn btn-sm btn-danger">
        x
      </button>
      {{ item.label }} - {{ item.done ? "completa" : "por hacer" }}
      <button
        v-on:click="toggle(item)"
        class="btn btn-sm btn-primary float-right"
      >
        toggle
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  methods: {
    toggle(item) {
      this.$emit("toggle", item);
    },
    deleteTask(item) {
      this.$emit("delete", item);
    }
  }
};
</script>

<style></style>
