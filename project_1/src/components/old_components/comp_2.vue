<script lang="ts">
import { defineComponent } from 'vue'
import comp_1 from '@/components/old_components/comp_1.vue'
import propsTest from '@/components/propsTest.vue'
import PropsTest from '@/components/propsTest.vue'


export default defineComponent({
  name: 'comp_2',
  components: {
    PropsTest,
    comp_1
  },
  data() {
    return {
      showElement: false,
      parentMessage: 'nic',
      childMessage: '1'
    }
  },
  mounted() {
    this.checkSeconds()
    setInterval(this.checkSeconds, 1000)
  },
  methods: {
    handleChildMessage(message: string) {
      this.childMessage = message
    },
    checkSeconds() {
      const currentSeconds = new Date().getSeconds()
      this.showElement = currentSeconds % 2 === 0
    }
  }

})
</script>

<template>
  <div>
    <propsTest writeItDown="Hello from Parent" @writeDataToParent="handleChildMessage" />
    <p> {{ childMessage }} - xxx</p>
  </div>

<!--  <div v-if="showElement">-->
    <!--    <comp_1 parent-message=""/>-->
    <!--    <NewComponent :parentMessage="parentMessage" />-->

<!--  </div>-->

</template>

<style scoped>

</style>