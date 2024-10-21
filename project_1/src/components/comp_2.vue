<script lang="ts">
import { defineComponent } from 'vue'
import comp_1 from '@/components/comp_1.vue'

export default defineComponent({
  name: 'comp_2',
  components:{
    comp_1
  },
  data() {
    return {
      showElement: false,
    };
  },
  mounted() {
    this.checkSeconds();
    setInterval(this.checkSeconds, 1000);
  },
  methods: {
    checkSeconds() {
      const currentSeconds = new Date().getSeconds();
      this.showElement = currentSeconds % 2 === 0;
    },
  },
})
</script>

<template>
  <div v-if="showElement">
    <comp_1/>
  </div>

</template>

<style scoped>

</style>