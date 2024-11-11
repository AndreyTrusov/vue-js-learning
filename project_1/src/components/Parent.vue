<template>
  <div>
    <h1>Parent Component</h1>
    <p>Current Message: {{ message }}</p>

    <!-- ChildInput updates the message -->
    <ChildInput @updateMessage="updateMessage" />

    <!-- ChildDisplay reacts to the updated message -->
    <ChildDisplay :message="message" />
  </div>
</template>

<script>
import ChildInput from "./ChildInput.vue";
import ChildDisplay from "./ChildDisplay.vue";

export default {
  components: {
    ChildInput,
    ChildDisplay,
  },
  data() {
    return {
      message: "Hello from Parent!",
    };
  },
  methods: {
    updateMessage(newMessage) {
      this.message = newMessage;
    },
  },
};
</script>