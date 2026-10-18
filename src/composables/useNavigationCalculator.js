import { ref, computed } from 'vue'

export function useNavigationCalculator() {
  const trueHeading = ref(360)     // Smjer kretanja / Course (stupnjevi)
  const trueAirspeed = ref(120)    // Istinska brzina zrakoplova - TAS (kts)
  const windDirection = ref(180)   // Smjer odakle puše vjetar (stupnjevi)
  const windSpeed = ref(20)        // Brzina vjetra (kts)

  const calculations = computed(() => {
    const th = (Number(trueHeading.value) || 0) * (Math.PI / 180)
    const tas = Number(trueAirspeed.value) || 0
    const wd = (Number(windDirection.value) || 0) * (Math.PI / 180)
    const ws = Number(windSpeed.value) || 0

    if (tas <= 0) {
      return { wca: 0, groundSpeed: 0, heading: 0 }
    }

    // Izračun kuta vjetra u odnosu na smjer leta
    const windAngle = wd - th

    // Izračun poprečne komponente vjetra za WCA (aproksimacija za zrakoplovstvo)
    // WCA = arcsin((WindSpeed * sin(windAngle)) / TAS) u stupnjevima
    const crosswindComponent = ws * Math.sin(windAngle)
    const wcaRad = Math.asin(Math.max(-1, Math.min(1, crosswindComponent / tas)))
    const wcaDeg = Math.round(wcaRad * (180 / Math.PI))

    // Izračun Ground Speed-a (GS)
    // GS = TAS * cos(WCA) - WindSpeed * cos(windAngle)
    const headwindComponent = ws * Math.cos(windAngle)
    const groundSpeed = Math.round(tas * Math.cos(wcaRad) - headwindComponent)

    // Stvarni Heading (Magnetic/True Heading koji pilot drži) = Course + WCA
    let heading = Number(trueHeading.value) + wcaDeg
    if (heading < 0) heading += 360
    if (heading >= 360) heading -= 360

    return {
      wca: wcaDeg,
      groundSpeed: Math.max(0, groundSpeed),
      heading: heading
    }
  })

  return {
    trueHeading,
    trueAirspeed,
    windDirection,
    windSpeed,
    calculations
  }
}