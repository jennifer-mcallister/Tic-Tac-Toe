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
        <form @submit.prevent="startGame">
            <input type="text" v-model="playerX" name="playerX" placeholder="Player X name.." required>
            <input type="text" v-model="playerO" name="playerO" placeholder="Player O name.." required>
            <button type="submit">Start</button>
        </form>
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