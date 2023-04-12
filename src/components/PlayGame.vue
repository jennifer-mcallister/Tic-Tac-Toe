<script setup lang="ts">
import { TicTacToeBox } from '../models/TicTacToeBox';
import TicTacToe from './TicTacToe.vue';

    const placeMarker = (i: number, tictactoeBox: TicTacToeBox) => {
        tictactoeBox.marked = true;
        tictactoeBox.marker = "o";
        console.log(tictactoeBox);
    }

</script>
<template>
    <TicTacToe @place-marker="placeMarker" />
</template>