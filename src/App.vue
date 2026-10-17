<script setup>
import CrosswindCalculator from './components/CrosswindCalculator.vue'
</script>

<template>
  <main class="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-4">
    <header class="text-center mb-8">
      <h1 class="text-3xl font-extrabold tracking-wider text-white">E6B FLIGHT COMPUTER</h1>
      <p class="text-slate-400 text-sm mt-1">Vue 3 Avionics Suite</p>
    </header>

    <div class="w-full max-w-xl">
      <CrosswindCalculator />
    </div>
  </main>
</template>