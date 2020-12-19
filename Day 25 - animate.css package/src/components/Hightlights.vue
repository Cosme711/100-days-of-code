<template>
  <div class="text-white">
      <p class="mt-14 text-3xl font-bold">Today’s Hightlights </p>

      <div class="mt-8 flex text-center">
          <div class="w-full mr-6 bg-blue">
              <p class="mt-6 mb-2 text-lg">Wind status</p>
              <p class="text-3xl"><span class="font-bold text-7xl">{{ Math.round(current.weather.wind_speed) }}</span>mph</p>
              <div class="m-8 flex justify-center items-center">
                  <div class="bg-grey rounded-full w-8 h-8 flex items-center justify-center">
                        <span class="material-icons text-lg">navigation</span>
                  </div>
                  <p class="ml-4">WSW</p>
              </div>
          </div>
          <div class="w-full ml-6 bg-blue">
              <p class="mt-6 mb-4 text-lg">Humidity</p>
              <p class="text-3xl "><span class="font-bold text-7xl">{{ Math.round(current.weather.humidity) }}</span>%</p>
          </div>
      </div>

      <div class="mt-16 flex text-center">
          <div class="w-full mr-6 bg-blue">
                <p class="mt-6 mb-2 text-lg">Visibility</p>
                <p class="mb-10 text-3xl"><span class="font-bold text-7xl">{{ Math.round(current.weather.visibility) }}</span>miles</p>
          </div>

          <div class="w-full ml-6 bg-blue">
                <p class="mt-6 mb-2 text-lg">Air Pressure</p>
                <p class=" mb-10 text-3xl"><span class="font-bold text-7xl">{{ current.weather.air_pressure }}</span>mb</p>
          </div>
      </div>

      <footer class="mt-5 text-grey text-center">
          <p>Cosme Gressier | <a href="">DevChallenges</a></p>
      </footer>

  </div>
</template>

<script>
import { useState } from "@/helpers";

export default {
    name: "Hightlights",
    setup() {

        const { currentDay } = useState(["currentDay"]);

        const { current } = useState(["current"]);

        return { currentDay, current }
    }
}
</script>

<style>

</style>