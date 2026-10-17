import { ref, computed } from 'vue'

export function useFuelCalculator() {
  const groundSpeed = ref(120)   // Brzina iznad tla (kts)
  const distance = ref(250)      // Udaljenost (NM - nautičke milje)
  const fuelFlow = ref(30)       // Potrošnja goriva na sat (Gallons/Liters per hour)
  const reserveMinutes = ref(45) // Standardna VFR rezerve u minutama

  const calculations = computed(() => {
    const gs = Number(groundSpeed.value) || 0
    const dist = Number(distance.value) || 0
    const ff = Number(fuelFlow.value) || 0
    const resMins = Number(reserveMinutes.value) || 0

    if (gs <= 0 || dist <= 0) {
      return {
        hours: 0,
        minutes: 0,
        tripFuel: 0,
        reserveFuel: 0,
        totalFuel: 0
      }
    }

    // Vrijeme leta u satima = Udaljenost / Brzina
    const timeInHours = dist / gs
    const totalMinutes = Math.round(timeInHours * 60)
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60

    // Gorivo za put (Trip Fuel) = Vrijeme leta * Potrošnja na sat
    const tripFuel = timeInHours * ff

    // Gorivo za rezervu = Vrijeme rezerve u satima * Potrošnja na sat
    const reserveFuel = (resMins / 60) * ff

    // Ukupno potrebno gorivo
    const totalFuel = tripFuel + reserveFuel

    return {
      hours,
      minutes,
      tripFuel: tripFuel.toFixed(1),
      reserveFuel: reserveFuel.toFixed(1),
      totalFuel: totalFuel.toFixed(1)
    }
  })

  return {
    groundSpeed,
    distance,
    fuelFlow,
    reserveMinutes,
    calculations
  }
}