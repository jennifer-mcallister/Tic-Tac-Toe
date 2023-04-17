<script setup lang="ts">
</script>
<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <div class="loader">
        <div class="dot dot__1">
            <span class="material-symbols-outlined">skull</span>
        </div>
        <div class="dot dot__2">
            <span class="material-symbols-outlined">skull</span>
        </div>
        <div class="dot dot__3">
            <span class="material-symbols-outlined">skull</span>
        </div>
    </div>
</template>
<style scoped>
    .loader {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }
    .dot {
        height: 40px;
        width: 40px;
        color: red;
        background-size: cover;
        border-radius: 100%;
        animation: loading 2s ease-out infinite;
        cursor: default;
        
    }
    .dot__1 {
        animation-delay: 0.3s;
    }
    .dot__2 {
        animation-delay: 0.6s;
    }
    .dot__3 {
        animation-delay: 0.9s;
    }
    @keyframes loading {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    
</style>