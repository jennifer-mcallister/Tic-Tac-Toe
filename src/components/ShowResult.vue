<script setup lang="ts">
import { Player } from '../models/Player';


interface IShowResultProps {
    winningPlayer: Player
}

defineProps<IShowResultProps>();
</script>

<template>
    <div class="container"> {{ winningPlayer.name }} Won!</div>
    <!-- <div class="container"> You both lose.. </div> -->
</template>

<style scoped>
    .container {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;

        height: 20rem;
        width: 30rem;
        margin: 0;
        padding: 0;

        color: red;
        background-color: rgba(0, 0, 0, 0.863);
    }
</style>