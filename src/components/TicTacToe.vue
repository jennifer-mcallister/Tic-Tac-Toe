<script setup lang="ts">
import { ref } from "vue";
import { TicTacToeBox } from "../models/TicTacToeBox";

const tictactoeBoxes = ref<TicTacToeBox[]>([]);
for (let i = 0; i < 9; i++) {
    tictactoeBoxes.value.push(new TicTacToeBox(false, "", i));
}


defineEmits(["placeMarker"]);
</script>

<template>
    <div class="tictactoe-container">
        <div 
            v-for="(TicTacToeBox, index) in tictactoeBoxes" 
            :key="index" @click="() => $emit('placeMarker', TicTacToeBox)" 
            :class="TicTacToeBox.marker"
            class="tictactoe-box"  
            
        ></div>
    </div>
</template>

<style scoped>
    .tictactoe-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        background-color: white;

        width: 30rem;
        height: 30rem;
    }

    .tictactoe-box {
        width: 10rem;
        height: 10rem;

        box-sizing: border-box;
        border: 1px solid black;
        color: black;
        font-size: 5rem;
    }

    .x {
        background-color: cadetblue;
    }

    .o {
        background-color: darksalmon;
    }
</style>