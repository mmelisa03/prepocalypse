<template>
  <div>
    <h2>Select your Apocalypse Scenario</h2>

    <input
      type="text"
      v-model="searchFilter"
      placeholder="Search scenarios..."
      style="margin-bottom: 20px; padding: 8px; width: 100%"
    />

    <button @click="randomScenario" style="margin-bottom: 20px">Pick a Random Scenario</button>
    <ul>
      <li
        v-for="(scenario, key) in filteredScenarios"
        :key="key"
        @click="selectScenario(key)"
        :class="{ 'selected-scenario': key === selectedScenarioKey }"
        style="cursor: pointer; margin: 10px 0"
      >
        {{ scenario.emoji }} {{ scenario.name }}
      </li>
    </ul>

    <div v-if="!selectedScenario" style="text-align: center; margin-top: 20px">
      <p>Select a scenario to see the checklist.</p>
    </div>

    <transition name="fade">
      <div v-if="selectedScenario">
        <h3>Checklist for {{ selectedScenario.name }}</h3>
        <p>{{ selectedScenario.description }}</p>
        <ul>
          <li v-for="item in selectedScenario.items" :key="item.id">
            {{ item.emoji }} {{ item.name }}
          </li>
        </ul>
      <div>
        <span
          v-for="n in 5"
        :key="n"
        style="cursor:pointer; font-size: 24px;"
        @click="rateScenario(selectedScenarioKey, n)"
          >
          ⭐️
        </span>
      </div>
      <p>Ratings: {{ selectedScenario.ratings.join(', ') }}</p>
        <button @click="goBack" style="margin-top: 20px">Back</button>
      </div>
    </transition>
     </div>
</template>

<script>
import { scenarios } from '@/data/scenarios.js'

export default {
  name: 'ScenarioSelector',
  data() {
    return {
      scenarios,
      selectedScenarioKey: null,
      searchFilter: '', // <-- use this name
    }
  },
  computed: {
    selectedScenario() {
      return this.selectedScenarioKey ? this.scenarios[this.selectedScenarioKey] : null
    },

    filteredScenarios() {
      const filter = this.searchFilter.toLowerCase()
      return Object.fromEntries(
        Object.entries(this.scenarios).filter(([key, scenario]) =>
          scenario.name.toLowerCase().includes(filter),
        ),
      )
    },
  },

  methods: {
    selectScenario(key) {
      this.selectedScenarioKey = key // <-- use this name
    },
    goBack() {
      this.selectedScenarioKey = null
    },
    randomScenario() {
      const keys = Object.keys(this.scenarios)
      const randomKey = keys[Math.floor(Math.random() * keys.length)]
      this.selectScenario(randomKey)
    },
    rateScenario(scenarioKey, rating) {
      this.scenarios[scenarioKey].ratings.push(rating);
    }
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

p {
  text-align: center;
  font-style: italic;
  margin-bottom: 20px;
  color: red;
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
  font-size: 1.2rem;
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
.selected-scenario {
  background-color: #e67e22;
  transform: scale(1.05);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
