<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main class="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center p-6">
    <!-- Header i navigacija -->
    <header class="text-center mb-8">
      <h1 class="text-3xl font-extrabold tracking-wider text-white">E6B FLIGHT COMPUTER</h1>
      <p class="text-slate-400 text-sm mt-1 mb-4">Vue 3 Composition API & Aviation API Suite</p>
      
      <!-- Navigacijski linkovi -->
      <nav class="flex justify-center gap-4">
        <RouterLink 
          to="/" 
          class="px-4 py-2 rounded-lg font-medium text-sm transition duration-200 border border-slate-700 hover:bg-slate-800"
          active-class="bg-cyan-600 text-white border-cyan-500 shadow-lg shadow-cyan-900/30"
        >
          🧮 Calculators
        </RouterLink>
        <RouterLink 
          to="/weather" 
          class="px-4 py-2 rounded-lg font-medium text-sm transition duration-200 border border-slate-700 hover:bg-slate-800"
          active-class="bg-cyan-600 text-white border-cyan-500 shadow-lg shadow-cyan-900/30"
        >
          📡 Live Weather (METAR)
        </RouterLink>
      </nav>
    </header>

    <!-- Dinamički prikaz stranica ovisno o ruti -->
    <RouterView />
  </main>
</template>