<template>
  <div class="text-white">
    <p class="mt-14 text-3xl font-bold">Today’s Hightlights </p>

    <div class="mt-8 grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 gap-5 lg:gap-10 text-center">
          <div class=" bg-blue">
              <p class="mt-4 text-lg">Wind status</p>
              <p class="mt-3 text-3xl"><span class="text-7xl font-bold">{{ Math.round(current.weather.wind_speed) }}</span>mph</p>
              <div class="mt-6 mb-4 mx-8 flex justify-center items-center">
                  <div class="w-8 h-8 flex items-center justify-center bg-grey rounded-full">
                        <span class="material-icons text-lg" :style="compassDirection()">navigation</span>
                  </div>
                  <p class="ml-4">WSW</p>
              </div>
          </div>
          <div class="bg-blue">
              <p class="mt-4 text-lg">Humidity</p>
              <p class="mt-3 text-3xl "><span class="text-7xl font-bold">{{ Math.round(current.weather.humidity) }}</span>%</p>
                <div class="w-64 mt-2 m-auto flex flex-col items-center font-bold text-xs">
                    <div class="w-11/12 flex items-center justify-between">
                        <p>0</p>
                        <p>50</p>
                        <p>100</p>
                    </div>
                    <div class="mt-1 h-2 w-11/12 bg-white rounded">
                        <div class="h-2 bg-yellow rounded" :style="humidityBar"></div>
                    </div>
                    <p class="mt-1 w-11/12 text-right">%</p>
                </div>
          </div>

          <div class="bg-blue">
                <p class="mt-4 text-lg">Visibility</p>
                <p class="mt-3 text-3xl"><span class="text-7xl font-bold">{{ Math.round(current.weather.visibility) }}</span>miles</p>
          </div>

          <div class="bg-blue">
                <p class="mt-4 text-lg">Air Pressure</p>
                <p class="mt-3 text-3xl"><span class="text-7xl font-bold">{{ Math.round(current.weather.air_pressure) }}</span>mb</p>
          </div>
    </div>

      <footer class="mt-16 flex flex-col sm:flex-row justify-center text-center text-footer">
          <div><a href="https://github.com/Cosme711">Cosme Gressier</a></div>
          <div class="mx-2"><p>| <a href="https://devchallenges.io/">DevChallenges</a> |</p></div>
          <div><a href="https://twitter.com/GressierCosme1">@GressierCosme1</a></div>
      </footer>
  </div>
</template>

<script>
import { useState } from "@/helpers";
import { computed } from 'vue';

export default {
    name: "Hightlights",
    setup() {

        const { current } = useState(["current"]);

        function compassDirection() {
            const directionDeg = Math.round(current.value.weather.wind_direction);
            return { transform : `rotate(${directionDeg}deg)` };
        }

        let humidityBar = computed(() => {
            return {
                width : Math.round(current.value.weather.humidity) + "%"
            }
        })

        return { current, compassDirection, humidityBar }
        
    }
}
</script>