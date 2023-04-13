<script setup lang="ts">
import { TicTacToeBox } from '../models/TicTacToeBox';
import { Player } from '../models/Player';
import { ref } from "vue";
import Players from './Players.vue';
import TicTacToe from './TicTacToe.vue';
import { WinCombo } from '../models/WinCombo';


const markedBoxes = ref<TicTacToeBox[]>([]);

const winCombos = ref<WinCombo[]>([
    {combo: [0, 1, 2], id: 1},
    {combo: [0, 4, 8], id: 2},
    {combo: [0, 3, 6], id: 3},
    {combo: [6, 7, 8], id: 4},
    {combo: [2, 5, 8], id: 5},
    {combo: [6, 4, 2], id: 6},
    {combo: [1, 4, 7], id: 7},
    {combo: [3, 4, 5], id: 8},
]);

const players = ref<Player[]>([
    {name:"Player X", wins: 0, marker: "x", playing: false, boxesClicked:[]},
    {name:"Player O", wins: 0, marker: "o", playing: true, boxesClicked:[]}
]);

const placeMarker = (tictactoeBox: TicTacToeBox) => {
    const isplaying = players.value.findIndex(player => player.playing === true);
    const player = players.value[isplaying];

    if (!tictactoeBox.marked) {
        tictactoeBox.marked = true;
        tictactoeBox.marker = player.marker;
        markedBoxes.value.push(tictactoeBox)
        saveResult(player);
        checkResult(player);
        switchPlayer(); 
    }    
} 

const switchPlayer = () => {
    for(let i = 0; i < players.value.length; i++) {
        players.value[i].playing = !players.value[i].playing;
    }
}


const saveResult = (player: Player) => {
    for ( let i = 0; i < markedBoxes.value.length; i++ ) {
        markedBoxes.value[i].marker === player.marker ? player.boxesClicked.push(markedBoxes.value[i].id) : "" ;
    }
}

const checkResult = (player: Player) => {
    for(let i = 0; i < winCombos.value.length; i++) {
        let combo = winCombos.value[i].combo;
        const playerWon = combo.every(combo => {
            return player.boxesClicked.includes(combo);
        });
        playerWon ? console.log("player won!") : "";
    }
}

</script>
<template>
    <Players class="player" :player="player" v-for="player in players" :class="player.playing ? '' : 'hide'"></Players>
    <TicTacToe @place-marker="placeMarker" />
</template>
