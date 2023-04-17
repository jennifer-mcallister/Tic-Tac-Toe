<script setup lang="ts">
import { Player } from '../models/Player';

interface IShowResultProps {
    winningPlayer: Player
    draw: boolean
}

const props = defineProps<IShowResultProps>();
</script>

<template>
    <div class="container" v-if="!props.draw"> {{ winningPlayer.name }} Won!</div>
    <div class="container" v-else> You both lose.. </div>
</template>

<style scoped>
    .container {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;

        height: 50vw;
        width: 30rem;
        margin: 0;
        padding: 0;

        color: red;
        background-color: rgba(0, 0, 0, 0.863);
    }
</style>