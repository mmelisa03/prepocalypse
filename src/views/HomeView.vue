<template>
  <div class="home-background">
    <h1>Home Page</h1>
    <ScenarioSelector />
  </div>
  <div></div>
</template>

<script>
import ScenarioSelector from '@/components/ScenarioSelector.vue'

export default {
  name: 'HomeView',
  components: {
    ScenarioSelector,
  },
}
</script>

<style scoped>
.home-background {
  min-height: 100vh;
  background-image: url('@/assets/zombie robot.png');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /*Moves content to the bottom */
  align-items: center;
  padding-bottom: 40px;
}
</style>
