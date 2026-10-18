import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWeatherStore = defineStore('weather', () => {
  const icaoInput = ref('LDSP')
  const weatherData = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const fetchMetar = async (code) => {
    const targetCode = (code || icaoInput.value).toUpperCase()
    if (!targetCode) return

    loading.value = true
    error.value = null

    try {
      // STARI URL (koji je bacao CORS grešku):
      // const response = await fetch(`https://aviationweather.gov/api/data/metar?ids=${icaoInput.value.toUpperCase()}&format=json`)

      // NOVI URL (koji prolazi kroz naš Vite proxy):
      const response = await fetch(`/api/weather/api/data/metar?ids=${targetCode}&format=json`)
      if (!response.ok) throw new Error('Network response was not ok')
      
      const data = await response.json()
      if (data && data.length > 0) {
        weatherData.value = data[0]
        icaoInput.value = targetCode
      } else {
        error.value = 'No METAR found for this ICAO code.'
        weatherData.value = null
      }
    } catch (err) {
      error.value = 'Failed to fetch weather data. Check ICAO code or connection.'
      weatherData.value = null
    } finally {
      loading.value = false
    }
  }

  return {
    icaoInput,
    weatherData,
    loading,
    error,
    fetchMetar
  }
})