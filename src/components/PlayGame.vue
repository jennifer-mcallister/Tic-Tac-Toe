<script setup lang="ts">
import { TicTacToeBox } from '../models/TicTacToeBox';
import Players from './Players.vue';
import TicTacToe from './TicTacToe.vue';
import { Player } from '../models/Player';
import { ref } from "vue";

const players = ref<Player[]>([
    {name:"Player X", wins: 0, marker: "x", playing: false},
    {name:"Player O", wins: 0, marker: "o", playing: true}
]);

const placeMarker = (i: number, tictactoeBox: TicTacToeBox) => {
    const player = isPlaying();
    if (!tictactoeBox.marked) {
        tictactoeBox.marked = true;
        tictactoeBox.marker = player?.marker || "";
        switchPlayer(); 
    }    
} 

const switchPlayer = () => {
    for(let i = 0; i < players.value.length; i++) {
        players.value[i].playing = !players.value[i].playing;
    }
}

const isPlaying = () => {
    for(let i = 0; i < players.value.length; i++) {
        if (players.value[i].playing) {
            return players.value[i]
        }
    }
}


</script>
<template>
    <Players class="player" :player="player" v-for="player in players" :class="player.playing ? '' : 'hide'"></Players>
    <TicTacToe @place-marker="placeMarker" />
</template>
