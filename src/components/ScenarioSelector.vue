<template>
  <div>
    <h2>Select your Apocalypse Scenario</h2>
    <ul>
      <li
        v-for="(scenario, key) in scenarios"
        :key="key"
        @click="selectScenario(key)"
        style="cursor: pointer; margin: 10px 0"
      >
        {{ scenario.name }}
      </li>
    </ul>

    <div v-if="selectedScenario">
      <h3>Checklist for {{ selectedScenario.name }}</h3>
      <ul>
        <li v-for="item in selectedScenario.items" :key="item.id">
          {{ item.emoji }} {{ item.name }}
        </li>
      </ul>
      <button @click="goBack" style="margin-top: 20px;">Back</button>
    </div>
  </div>
</template>

<script>
import { scenarios } from '@/data/scenarios.js'

export default {
  name: 'ScenarioSelector',
  data() {
    return {
      scenarios,
      selectedScenarioKey: null, // <-- use this name
    }
  },
  computed: {
    selectedScenario() {
      return this.selectedScenarioKey ? this.scenarios[this.selectedScenarioKey] : null
    },
  },
  methods: {
    selectScenario(key) {
      this.selectedScenarioKey = key // <-- use this name
    },
    goBack() {
      this.selectedScenarioKey = null
    },
  },
}
</script>

<style scoped>
h2 {
  margin-bottom: 16px;
  font-size: 1.5rem;
  color: #c0392b;
  text-align: center;
}

h3 {
  margin-top: 24px;
  color: #27ae60;
  font-size: 1.2rem;
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
  max-width: 500px;
  margin: 0 auto;
}

li {
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 12px 20px;
  margin: 10px 0;
  border-radius: 8px;
  transition:
    background-color 0.3s,
    transform 0.2s;
  cursor: pointer;
}

li:hover {
  background-color: #34495e;
  transform: scale(1.02);
}

button {
  font-family: 'Creepster', cursive;
  font-size: 1,2rem;
  padding: 8px 20px;
  border-radius: 8px;
  background: #c0392b;
  color: #ffff;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  transition: background 0.3s;
}

button:hover {
  background: #27ae60;
}
</style>
