<script setup lang="ts">
import { Player } from '../models/Player';

interface IPlayerProps {
    player: Player;
}
defineProps<IPlayerProps>();
</script>

<template>
    <div :class="player.marker">
        <p>{{ player.name }}</p>
        <p>{{ player.wins }}</p>
    </div>
</template>

<style scoped>

    .x {
        background-color: cadetblue;
        padding: 2rem;
        margin: 1rem;

        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 1rem;
    }

    .o {
        background-color: darksalmon;
        padding: 2rem;
        margin: 1rem;

        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 1rem;
    }

    .hide {
        background-color: grey;
        color: rgb(155, 155, 155);
    }
</style>