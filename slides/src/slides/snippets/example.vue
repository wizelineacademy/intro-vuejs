<template>
  <div class="welcome">
    <h1>Hello {{ message }}!</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "world"
    };
  }
};
</script>

<style>
.welcome {
  color: red;
}
</style>
