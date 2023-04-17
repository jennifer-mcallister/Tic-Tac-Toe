<script setup lang="ts">
import { TicTacToeBox } from "../models/TicTacToeBox";

interface ITicTacToeProps {
    ticTacToeBox: TicTacToeBox;
}
const props = defineProps<ITicTacToeProps>();

</script>

<template>
    <div :class="props.ticTacToeBox.marker" class="tictactoe-box" ></div>
</template>

<style scoped>
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