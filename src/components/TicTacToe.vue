<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { TicTacToeBox } from "../models/TicTacToeBox";
import { ResetTicTacToe } from "../models/ResetTicTacToe";

interface IResetTicTacToe {
    reset: ResetTicTacToe
}
const props = defineProps<IResetTicTacToe>();

watch(props.reset, ()=> {
    console.log("reset");
    for (let i = 0; i < tictactoeBoxes.value.length; i++) {
        tictactoeBoxes.value[i].marked = false;
        tictactoeBoxes.value[i].marker = "";
    }
})


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