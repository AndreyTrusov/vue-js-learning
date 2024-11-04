<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'comp_1',
  props: {
    parentMessage:{
      type:String,
      required:true
    }
  }
})
</script>

<template>
 <p>Som tu</p>
</template>

<style scoped>

</style>