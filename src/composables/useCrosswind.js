import { ref, computed } from 'vue'

export function useCrosswind() {
  // Ulazni parametri
  const runwayHeadingNumber = ref(27) // Pista 27 (270°)
  const windDirection = ref(90)       // Smjer vjetra (odakle puše, 90°)
  const windSpeed = ref(15)           // Brzina vjetra u čvorovima (kts)

  // Stvarni stupnjevi piste (1-36 -> 10°-360°)
  const runwayDegrees = computed(() => runwayHeadingNumber.value * 10)

  const results = computed(() => {
    // Razlika kutova između smjera odakle vjetar PUŠE i kamo je pista USMJERENA
    let angleDiff = windDirection.value - runwayDegrees.value

    // Normalizacija kuta na raspon od -180 do +180 stupnjeva
    angleDiff = (angleDiff + 180) % 360 - 180
    if (angleDiff < -180) angleDiff += 360

    // Pretvorba u radijane
    const rad = (angleDiff * Math.PI) / 180

    // Crosswind (sinus): pozitivno = desni bočni, negativno = lijevi bočni
    const rawCrosswind = windSpeed.value * Math.sin(rad)
    
    // Headwind/Tailwind (kosinus): 
    const rawHeadwind = windSpeed.value * Math.cos(rad)

    return {
      crosswind: Math.abs(Math.round(rawCrosswind)),
      crosswindType: Math.round(rawCrosswind) === 0 
        ? 'None' 
        : (rawCrosswind > 0 ? 'Right Crosswind' : 'Left Crosswind'),
      
      headwind: Math.abs(Math.round(rawHeadwind)),
      headwindType: Math.round(rawHeadwind) >= 0 ? 'Headwind' : 'Tailwind'
    }
  })

  return {
    runwayHeadingNumber,
    runwayDegrees,
    windDirection,
    windSpeed,
    results
  }
}