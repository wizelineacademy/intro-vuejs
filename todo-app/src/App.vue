<template>
  <div class="container">
    <h1>{{ name }}'s awesome To Do app</h1>

    <task-form @addTask="addTask" />

    <hr />
    <h2>pending tasks</h2>
    <todo-list @delete="deleteTask" :list="pendingTasks" @toggle="toggle" />

    <hr />
    <h2>completed tasks</h2>
    <todo-list @delete="deleteTask" :list="completedTasks" @toggle="toggle" />
  </div>
</template>

<script>
import todoList from "./components/todoList";
import taskForm from "./components/taskForm";

export default {
  components: {
    todoList,
    taskForm
  },
  data() {
    return {
      name: "Eder",
      list: []
    };
  },
  methods: {
    addTask(newTask) {
      if (!newTask) {
        return;
      }
      this.list.push({ label: newTask, done: false });
    },
    toggle(item) {
      item.done = !item.done;
    },
    deleteTask(deletedItem) {
      this.list = this.list.filter(item => item !== deletedItem);
    }
  },
  computed: {
    pendingTasks() {
      return this.list.filter(item => !item.done);
    },
    completedTasks() {
      return this.list.filter(item => item.done);
    }
  }
};
</script>

<style></style>
