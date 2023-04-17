<script setup lang="ts">
import { onMounted, ref } from 'vue';
import PlayGame from './components/PlayGame.vue';
import PlayerCreater from './components/PlayerCreater.vue';
import Loader from './components/Loader.vue';
import { Player } from './models/Player';
import { TicTacToeBox } from './models/TicTacToeBox';

let startingApp = ref(true);
let continueGame = false;
let showGame = ref(true);
let players = ref<Player[]>((JSON.parse(localStorage.getItem("players") || "[]")));

if (players.value.length > 0) {
  continueGame = true;
} else {
  players.value = ([
    {name:"", wins: 0, marker: "x", playing: false, boxesClicked:[]},
    {name:"", wins: 0, marker: "o", playing: true, boxesClicked:[]}
  ])
}

const startGame = (playerX: string, playerO: string) => {
  showGame.value = false;
  players.value[0].name = playerX; 
  players.value[1].name = playerO;
  localStorage.setItem("players", JSON.stringify(players.value))
}

const restart = (ticTacToeBoxes: TicTacToeBox[]) => {
  resetLocalStorage(ticTacToeBoxes);
  showGame.value = true;
}

const resetLocalStorage = (tictactoeBoxes: TicTacToeBox[]) => {
  localStorage.setItem("players", JSON.stringify(""));
  localStorage.setItem("ticTacToeBoxes", JSON.stringify(tictactoeBoxes));
}

onMounted(() => {
  continueGame ? showGame.value = false : showGame.value = true;
  setTimeout(() => {
    startingApp.value = false;
  }, 3000)
})

</script>

<template>
  <Loader v-if="startingApp"></Loader>
  <div class="game" v-else>
    <PlayerCreater v-if="showGame" @start-game="startGame"></PlayerCreater>
    <PlayGame v-else :players="players" @start-new-game="restart"></PlayGame>
  </div>
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
