<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'newComponent',
  data() {
    return {
      username: "",
      aaa: true,
      name: '',
      age: 0,
      zoznamMien: [
        {
          id: 1,
          meno: 'Andrey',
          vek: 24
        },
        {
          id: 2,
          meno: 'Ola',
          vek: 25
        },
        {
          id: 3,
          meno: 'Zuzinka',
          vek: 26
        }
      ]
    }
  },
  methods: {
    toggle() {
      this.aaa = !this.aaa
    },
    addUser(){
      const lastId = this.zoznamMien.length > 0
        ? Math.max(...this.zoznamMien.map(user => user.id))
        : 0;

      this.zoznamMien.push({
        id: lastId + 1,
        meno: this.name,
        vek: this.age
      });

    },
    removeUser(){
      this.zoznamMien.pop()
    }
  },
  beforeCreate(){
    console.log('beforeCreate')
  },
  created() {
      console.log('Component created')
  },
  beforeMount() {
      console.log('Component mounted( pred vlozenim )')
  },
  mounted() {
      console.log('Component mounted( po vlozeni HTML )')
  },
  beforeUpdate() {
      console.log('Component pred update')
  },
  updated() {
      console.log('Component updated')
  },
  beforeUnmount() {
      console.log('PRED Component unmounted')
  },
  unmounted() {
      console.log('PO Component unmounted')
  },
})
</script>

<template>
  <RouterLink :to="'/a-component/ + username'"></RouterLink>
  <div>
<!--    <button @click="toggle">Toggle</button>-->

<!--    <p v-if="aaa">Vidis ma som - {{ aaa }}</p>-->
<!--    <p v-else>Nevidis ma som - {{ aaa }}</p>-->

<!--    <p v-show="aaa">Vidis ma som - {{ aaa }}</p>-->

    <br>

    <input v-model.number="name" />
    <input v-model.number="age" />

    <button @click="addUser">Pridaj usra</button>
    <button @click="removeUser">Odober usra</button>

    <ul>
      <li v-for=" item in zoznamMien" :key="item.id">ID: {{item.id}} | Meno: {{item.meno}} | Vek: {{item.vek}}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>