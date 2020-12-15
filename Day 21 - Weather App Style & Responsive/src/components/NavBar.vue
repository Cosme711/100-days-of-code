<template>
    <div>
    <div class="h-screen flex flex-col justify-between items-center bg-blue">

      <div class="pt-5 mt-5 w-2/3 flex justify-between items-center">
        <a class="px-4 py-2 bg-darkgrey text-white cursor-pointer" @click="openModal">Search for places</a>
        <a class="p-2 bg-darkgrey flex rounded-full cursor-pointer">
          <span class="material-icons text-white">gps_fixed</span>
        </a>
      </div>

      <div>
        <img src="@/assets/images/Shower.png" alt="weather">
      </div>

      <div>
        <p class="text-white text-8xl">{{ currentDay.currentTemp }}°C</p>
        <p class="mt-4 text-center text-darkgrey text-4xl">{{ currentDay.weatherState }}</p>
      </div>

      <div class="w-40 pb-8 text-darkgrey">
        <div class="w-full flex justify-between items-center">
          <a>Today</a>
          <a>•</a>
          <a>{{ currentDay.currentDate }}</a>
        </div>
        <div class="flex justify-center items-center pt-4">
          <span class="material-icons">location_on</span>
          <p class="ml-2">{{ currentDay.cityName }}</p>
        </div>
      </div>

    </div>

    <Search v-if="searchModal"/>

  </div>
</template>

<script>

import { useState } from "@/helpers";
import Search from "@/components/Search";
import { useStore } from "vuex";

export default {
    name: 'NavBar',
    components: { Search },
    setup() {

        const { currentDay } = useState(["currentDay"]);

        const { searchModal } = useState(["searchModal"]);

        const store = useStore();

        function openModal() {
          store.commit("SEARCH_MODAL", true);
        }

        return {
            currentDay,
            searchModal,
            openModal
        }
    }
}
</script>

<style>

</style>