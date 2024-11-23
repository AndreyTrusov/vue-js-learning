<script lang="ts">
import NewComponent from '@/components/old_components/newComponent.vue'
import TestComponent from '@/components/old_components/TestComponent.vue'
import Calculus from '@/components/old_components/Calculus.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'OurView',
  components: { Calculus, TestComponent, NewComponent }
  // props:{
  //   username: {
  //     type: String,
  //     required: true,
  //   }
  // }
})
</script>

<template>
  <div>
    <test-component />
    <calculus />
    <new-component />
  </div>


</template>

<style scoped>

</style>