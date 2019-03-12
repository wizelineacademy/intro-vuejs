<template>
  <ul v-if="list.length" class="list-group">
    <li v-for="(item, index) in list" :key="index" class="list-group-item">
      <button
        v-on:click="deleteTask(item)"
        class="btn btn-sm btn-danger float-right"
      >
        x
      </button>
      {{ item.label }} - {{ item.done ? "completa" : "por hacer" }}
      <button
        v-on:click="toggle(item)"
        class="btn btn-sm btn-primary float-right toggle"
      >
        toggle
      </button>
    </li>
  </ul>
  <p v-else>this list is empty</p>
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

<style scoped>
.toggle {
  margin-right: 10px;
}
</style>
