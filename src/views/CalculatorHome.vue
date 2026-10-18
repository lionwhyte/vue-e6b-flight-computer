<script setup>
import CrosswindCalculator from '../components/CrosswindCalculator.vue'
import FuelCalculator from '../components/FuelCalculator.vue'
import DensityAltitudeCalculator from '../components/DensityAltitudeCalculator.vue'
import NavigationCalculator from '../components/NavigationCalculator.vue'
import TASCalculator from '../components/TASCalculator.vue'
import UnitConverter from '../components/UnitConverter.vue'
</script>

<template>
  <div class="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <CrosswindCalculator />
    <FuelCalculator />
    <DensityAltitudeCalculator />
    <NavigationCalculator />
    <TASCalculator />
    <UnitConverter />
  </div>
</template>