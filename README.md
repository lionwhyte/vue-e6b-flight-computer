# ✈️ E6B Flight Computer & Aviation Suite

A modern, web-based E6B Flight Computer and aviation utility suite built with **Vue 3 (Composition API)**, **Vite**, **Tailwind CSS**, **Pinia**, and **Vue Router**. Designed for pilots and aviation enthusiasts to perform essential in-flight calculations and check real-time weather reports.

---

## 🚀 Features

1. **Crosswind & Wind Component Calculator:** Calculate headwind, crosswind, and runway alignment.
2. **Fuel, Time & Distance Calculator:** Compute estimated time enroute (ETE), trip fuel, and VFR reserve requirements.
3. **Density Altitude Calculator:** Determine pressure altitude, standard temperature, and density altitude based on field elevation and altimeter settings.
4. **WCA, Ground Speed & Heading:** Calculate Wind Correction Angle (WCA), Ground Speed (GS), and True Heading to steer.
5. **True Airspeed (TAS) Calculator:** Convert Indicated Airspeed (IAS) to True Airspeed using pressure altitude and OAT.
6. **Aviation Unit Converter:** Quick conversions between Nautical Miles (NM), Kilometers, Knots, km/h, Gallons, and Liters.
7. **Live METAR Weather Report:** Fetch real-time aviation weather reports by ICAO airport code using the Aviation Weather API, with state persistence powered by **Pinia**.

---

## 🛠️ Tech Stack

* **Frontend Framework:** Vue 3 (Composition API & `<script setup>`)
* **Routing:** Vue Router
* **State Management:** Pinia
* **Styling:** Tailwind CSS v3
* **Build Tool:** Vite (with DevServer Proxy configuration to handle CORS)
* **API:** Aviation Weather API (METAR data)

---

## ⚙️ Getting Started / Installation

### 1. Clone the repository:
   git clone [https://github.com/your-username/vue-e6b-flight-computer.git](https://github.com/your-username/vue-e6b-flight-computer.git)

### 2. Navigate to the project directory:
   cd vue-e6b-flight-computer

### 3. Install dependencies:
   npm install

### 4. Run the development server:
   npm run dev