<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'propsTest',
  data() {
    return {
      toParentMessage: "Privet",
    };
  },
  props: {
    writeItDown:{
      type:String,
      required:true,
    }
  },
  methods:{
    sendDataToParent(){
      this.$emit('writeDataToParent', this.toParentMessage)
    }
  }
})
</script>

<template>
  <h1> {{ writeItDown }}</h1>
  <button @click="sendDataToParent"> Poslat data </button>
</template>

<style scoped>

</style>