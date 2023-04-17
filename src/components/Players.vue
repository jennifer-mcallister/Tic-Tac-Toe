<script setup lang="ts">
import { Player } from '../models/Player';

interface IPlayerProps {
    player: Player;
}
defineProps<IPlayerProps>();
</script>

<template>
    <div :class="player.marker">
        <p class="player-marker">{{ player.marker }}</p>
        <p>{{ player.name }}</p>
        <p class="player-wins">{{ player.wins }}</p>
    </div>
</template>

<style scoped>

    .x {
        width: 40rem;
        height: 3em;
        background-color: black;
        
        margin: 1rem;
        font-size: 2em;

        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        gap: 3rem;
        border-radius: 2em;
        
    }

    .o {
        width: 40rem;
        height: 3em;
        background-color: black;
        margin: 1rem;
        font-size: 2em;
        

        display: flex;
        flex-direction: row-reverse;
        justify-content: space-evenly;
        align-items: center;
        gap: 3rem;
        border-radius: 2em;
    }

    .hide {
        background-color: rgb(43, 43, 43);
        color: rgb(87, 87, 87);
    }

    .player-marker, .player-wins {
        font-size: 2em;
    }

    p {
        cursor: default;
    }
</style>