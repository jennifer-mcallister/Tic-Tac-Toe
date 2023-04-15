<script setup lang="ts">
import { ref } from 'vue';

let playerX = ref("X");
let playerO = ref("O");

const emit = defineEmits(["startGame"]);
const startGame = () => {
    emit("startGame", playerX, playerO);
};


</script>
<template>
    <form @submit.prevent="startGame" class="container">
        <input type="text" v-model="playerX" name="playerX" placeholder="Player X name.." required>
        <input type="text" v-model="playerO" name="playerO" placeholder="Player O name.." required>
        <button type="submit">Start</button>
    </form>
</template>
<style scoped>
.container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 3rem;
}
</style>