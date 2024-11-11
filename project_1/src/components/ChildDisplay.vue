<template>
  <div>
    <h2>Child Display Component</h2>
    <p>Transformed Message: {{ transformedMessage }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
  },
  computed: {
    transformedMessage() {
      return this.message.toUpperCase();
    },
  },
};
</script>