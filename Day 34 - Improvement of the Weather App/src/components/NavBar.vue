<template>
    <div>
      <div class="h-screen flex flex-col justify-between items-center bg-blue navbar">

        <div class="pt-5 px-5 w-full flex justify-between items-center">
          <a class="px-4 py-2 bg-darkgrey text-white rounded-sm cursor-pointer" @click="toggleSidebar()">Search for places</a>
          <a class="ml-2 p-2 bg-darkgrey flex rounded-full cursor-pointer" @click="getLocation">
            <span class="material-icons text-white">gps_fixed</span>
          </a>
        </div>

        <div>
          <img :src="imgDynamic" :alt="current.weather.weather_state_name" class="w-40 lg:w-full">
        </div>

        <div>
          <p class="ml-4 text-8xl text-white">{{ theTemp }}</p>
          <p class="mt-4 text-4xl text-center text-darkgrey">{{ current.weather.weather_state_name }}</p>
        </div>

        <div class="w-40 pb-8 text-darkgrey">
          <div class="w-full flex justify-between items-center">
            <a>Today</a>
            <a>•</a>
            <a>{{ dateConvert }}</a>
          </div>
          <div class="pt-4 flex justify-center items-center">
            <span class="material-icons">location_on</span>
            <p class="ml-2">{{ current.location.cityName }}</p>
          </div>
        </div>
      </div>

      <transition enter-active-class="animate__animated animate__slideInLeft animate__faster" leave-active-class="animate__animated animate__slideOutLeft animate__faster" mode="out-in">
          <Search v-if="data.isOpen" @close="toggleSidebar()"></Search>
      </transition>

  </div>
</template>

<script>
import Search from "@/components/Search";
import 'animate.css';
import dayjs from 'dayjs';
import { useState } from "@/helpers";
import { useStore } from "vuex";
import { reactive, computed } from 'vue';

export default {
    name: 'NavBar',
    components: { Search },
    setup() {

        const data = reactive({
          isOpen: false
        })

        function toggleSidebar() {
          data.isOpen = !data.isOpen;
        }

        const { currentDay } = useState(["currentDay"]);

        const { current } = useState(["current"]);

        const { searchModal } = useState(["searchModal"]);

        const { isCelcius } = useState(["isCelcius"]);

        const store = useStore();

        function openModal() {
          store.commit("SEARCH_MODAL", true);
        }

        function getLocation() {
            store.dispatch("getUserLocations");
        }

        const imgDynamic = computed(() => {
          if(current.value.weather.weather_state_name) {
            let weatherState = current.value.weather.weather_state_name;
            weatherState = weatherState.replace(/\s+/g, '');
            return require(`@/assets/images/${weatherState}.png`);
          }
        })

        const theTemp = computed(() => {
          if(isCelcius.value === true && current.value.weather.the_temp) {
            return Math.round(current.value.weather.the_temp) + "°C";
          } else if(isCelcius.value === false && current.value.weather.temp_fahrenheit) {
            return Math.round(current.value.weather.temp_fahrenheit) + "°F";
          }
        })

        const dateConvert = computed(() => {
          if(current.value.weather.applicable_date) {
            return dayjs(current.value.weather.applicable_date).format("ddd,DD MMM");
          }
        })

        return {
            data,
            toggleSidebar,
            currentDay,
            current,
            searchModal,
            openModal,
            getLocation,
            imgDynamic,
            theTemp,
            dateConvert,
        }
    }
}
</script>
