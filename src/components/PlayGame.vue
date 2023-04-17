<script setup lang="ts">
import { TicTacToeBox } from '../models/TicTacToeBox';
import { Player } from '../models/Player';
import { WinCombo } from '../models/WinCombo';
import { ref } from "vue";
import Players from './Players.vue';
import TicTacToe from './TicTacToe.vue';
import ShowResult from './ShowResult.vue';

interface IPlayGameProps {
    players: Player[];
}
const props = defineProps<IPlayGameProps>();
const players = ref<Player[]>(props.players);

const tictactoeBoxes = ref<TicTacToeBox[]>((JSON.parse(localStorage.getItem("ticTacToeBoxes") || "[]")));
if (tictactoeBoxes.value.length < 1) {
    for (let i = 0; i < 9; i++) {
    tictactoeBoxes.value.push(new TicTacToeBox(false, "", i));
    }
}

const winCombos = ref<WinCombo[]>([
    {combo: [0, 1, 2], id: 1},
    {combo: [0, 4, 8], id: 2},
    {combo: [0, 3, 6], id: 3},
    {combo: [6, 7, 8], id: 4},
    {combo: [2, 5, 8], id: 5},
    {combo: [6, 4, 2], id: 6},
    {combo: [1, 4, 7], id: 7},
    {combo: [3, 4, 5], id: 8},
]);

const draw = ref(false);
let showResults = ref(false);
let winningPlayer = ref(players.value[0]);

const placeMarker = (i: number) => {
    draw.value = false; 
    const isplaying = players.value.findIndex(player => player.playing === true);
    const player = players.value[isplaying];

    if (!tictactoeBoxes.value[i].marked) {
        tictactoeBoxes.value[i].marked = true;
        tictactoeBoxes.value[i].marker = player.marker;
        saveMarking(player, tictactoeBoxes.value[i]);
        checkResult(player);
        checkIfAllBoxesAreMarked();
        switchPlayer(); 
        saveInLocalStorage(); 
    }    
} 

const switchPlayer = () => {
    for(let i = 0; i < players.value.length; i++) {
        players.value[i].playing = !players.value[i].playing;
    }
}

const saveMarking = (player: Player, tictactoeBox: TicTacToeBox) => {
    player.boxesClicked.push(tictactoeBox.id)
}

const checkResult = (player: Player) => {
    let playerWon = false;
    for(let i = 0; i < winCombos.value.length; i++) {
        let combo = winCombos.value[i].combo;
        playerWon = combo.every(combo => {
            return player.boxesClicked.includes(combo);
        });
        playerWon ? player.wins  = player.wins + 1 : player.wins;
        winningPlayer.value = player;
        playerWon ? newRound() : "";   
    }   
}

const checkIfAllBoxesAreMarked = () => {
    let markedBoxes = 0;
    for (let i = 0; i < tictactoeBoxes.value.length; i++) {
        if (tictactoeBoxes.value[i].marked) {
            markedBoxes += 1;
        }
    }
    if (markedBoxes === 9) {
        draw.value = true;
        newRound();
    }
}

const toggleShowResult= () => {
    showResults.value = !showResults.value;  
}

const newRound = () => {
    toggleShowResult();
    for (let i = 0; i < players.value.length; i++) {
        players.value[i].boxesClicked = [];
    }
    for (let i = 0; i < tictactoeBoxes.value.length; i++) {
        tictactoeBoxes.value[i].marked = false;
        tictactoeBoxes.value[i].marker = "";
    } 
    localStorage.setItem("ticTacToeBoxes", JSON.stringify(tictactoeBoxes.value))
    tictactoeBoxes.value = (JSON.parse(localStorage.getItem("ticTacToeBoxes") || "[]"));
}

const saveInLocalStorage = () => {
    localStorage.setItem("players", JSON.stringify(players.value));
    localStorage.setItem("ticTacToeBoxes", JSON.stringify(tictactoeBoxes.value));
}

const emit = defineEmits(["startNewGame"]);
const startNewGame = () => {
    for (let i = 0; i < tictactoeBoxes.value.length; i++) {
        tictactoeBoxes.value[i].marked = false;
        tictactoeBoxes.value[i].marker = "";
    }
    for(let i = 0; i < players.value.length; i++) {
        players.value[i].wins = 0;
    }
    emit("startNewGame", tictactoeBoxes.value)
}
</script>
<template>
    <ShowResult :winningPlayer="winningPlayer" :draw="draw" v-show="showResults" @click="toggleShowResult"></ShowResult>
    <div class="players-container">
        <Players class="player" :player="player" v-for="player in players" :class="player.playing ? '' : 'hide'"></Players>
    </div>
    <div class="tictactoe-container">
        <TicTacToe :ticTacToeBox="tictactoeBox" v-for="(tictactoeBox, index) in tictactoeBoxes" @click="placeMarker(index)" />  
    </div>
    <button type="button" @click="startNewGame" >Start New Game</button>
</template>
<style scoped>
button {
    margin: 2rem;
}

.tictactoe-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 1em;

        width: 30rem;
        height: 30rem;
    }
.players-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

</style>
