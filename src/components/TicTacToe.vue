<script setup lang="ts">
import { TicTacToeBox } from "../models/TicTacToeBox";

interface ITicTacToeProps {
    ticTacToeBox: TicTacToeBox;
}
const props = defineProps<ITicTacToeProps>();

</script>

<template>
    <div :class="props.ticTacToeBox.marker, props.ticTacToeBox.marked ? '' : 'active' " class="tictactoe-box" >
        <p>{{ props.ticTacToeBox.marker }}</p>
    </div>
</template>

<style scoped>
    .active {
        cursor: pointer;
    }

    .active:hover {
        background-color: rgb(10, 10, 10);
    }
    .tictactoe-box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 10rem;
        height: 10rem;

        box-sizing: border-box;
        border: 3px solid rgb(46, 46, 46);
        color: red;
        font-size: 8rem;

        background-color: black;
    }

    .x, .o {
        cursor: default;
    }

</style>