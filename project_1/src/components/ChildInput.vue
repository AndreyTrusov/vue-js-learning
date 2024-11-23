<template>
  <div>
    <h2>Child Input Component</h2>
    <input v-model="inputValue" placeholder="Type a new message" />
    <button @click="sendMessage">Update Message</button><br><br>
    <button @click="goToOtherPlace">home</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    sendMessage() {
      this.$emit("updateMessage", this.inputValue);
    },
    goToOtherPlace(){
      this.$router.push("/");
    }
  },
};
</script>
