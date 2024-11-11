<script setup lang="ts">
import Parent from '../components/Parent.vue'

</script>
<template>
  <div class="about">
<!--    <h1>About page content</h1><hr>-->
    <parent/>
  </div>
  <div>
    <parent/>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
