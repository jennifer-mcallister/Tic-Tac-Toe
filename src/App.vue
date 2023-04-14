<script setup lang="ts">
import { ref } from 'vue';
import PlayGame from './components/PlayGame.vue';
import PlayerCreater from './components/PlayerCreater.vue';

let show = ref(true);
let playerNameX = ref();
let playerNameO = ref();


const startGame = (playerX: string, playerO: string) => {
  show.value = false;
   playerNameX.value = playerX; 
   playerNameO.value = playerO;
}

</script>

<template>
  <PlayerCreater v-if="show" @start-game="startGame"></PlayerCreater>
  <PlayGame v-else :playerX="playerNameX" :playerO="playerNameO" ></PlayGame>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
