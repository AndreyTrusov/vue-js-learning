<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TestComponent',
  data() { // primitive type
    return {
      number: 1,
      name: 'Andrey',
      surname: 'Trusov'
    }
  },
  methods: {
    increment() {
      this.number++
    },
    decrement() {
      this.number--
    }
  },
  computed: { // computed variables, we are getting them from something
    getColor() {
      if (this.number < 5) {
        return 'red'
      } else {
        return 'green'
    }
  },
    fullName(){
      return this.name + " " + this.surname
    }
}
})
</script>

<template> <!-- visual structure of component is required! -->

<div>
  <p>Hi, this is my first component</p>
  <p>{{ name }} and {{ surname }}</p>
  <p>{{ fullName }}</p>
  <p>{{ number }}</p>
  <p :class="getColor">{{ fullName }}</p> <!-- rakktivne definujeme class -->
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
</div>

</template>

<style scoped>

.green{
  color: green;
  font-size: 20px;
}

.red{
  color: red;
  font-size: 30px;
}

</style>