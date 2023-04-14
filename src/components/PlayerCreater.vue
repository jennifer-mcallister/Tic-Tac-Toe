<script setup lang="ts">
import { ref } from 'vue';

let playerX = ref("");
let playerO = ref("");

const emit = defineEmits(["startGame"])
const startGame = () => {
    emit("startGame", playerX, playerO)
}


</script>
<template>
    <div class="container">
        <input type="text" v-model="playerX" name="playerX" placeholder="Player X name..">
        <input type="text" v-model="playerO" name="playerO" placeholder="Player O name..">
        <button type="button" @click="startGame">Start</button>
    </div>
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