<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CalculusComponent',
  data() {
    return {
      number1: 0,
      number2: 0,
      result: 0
    }
  },
  methods: {
    add() {
      this.result = this.number1 + this.number2;
    },
    subtract() {
      this.result = this.number1 - this.number2;
    },
    multiply() {
      this.result = this.number1 * this.number2;
    },
    divide() {
      if (this.number2 !== 0) {
        this.result = this.number1 / this.number2;
      }
    }
  }
})
</script>

<template>
  <div>
    <input v-model.number="number1" />
    <input v-model.number="number2" />

    <div>
      <button @click="add">+</button>
      <button @click="subtract">-</button>
      <button @click="multiply">*</button>
      <button @click="divide">/</button>
    </div>

    <h3>Result: {{ result }}</h3>
  </div>
</template>

<style scoped>
input {
  margin: 10px;
  padding: 5px;
  width: 200px;
}

button {
  margin: 5px;
  padding: 10px;
  cursor: pointer;
}

h3 {
  margin-top: 20px;
}
</style>
