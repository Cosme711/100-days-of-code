<template>
    <div>
    <div class="h-screen flex flex-col justify-between items-center bg-blue">

      <div class="pt-5 mt-5 w-2/3 flex justify-between items-center">
        <a class="px-4 py-2 bg-darkgrey text-white cursor-pointer" @click="toggleSidebar()">Search for places</a>
        <a class="ml-2 p-2 bg-darkgrey flex rounded-full cursor-pointer">
          <span class="material-icons text-white">gps_fixed</span>
        </a>
      </div>

      <div>
        <img :src="imgDynamic" :alt="current.weather.weather_state_name">
      </div>

      <div>
        <p class="ml-4 text-white text-8xl">{{ Math.round(current.weather.the_temp) }}°C</p>
        <p class="mt-4 text-center text-darkgrey text-4xl">{{ current.weather.weather_state_name }}</p>
      </div>

      <div class="w-40 pb-8 text-darkgrey">
        <div class="w-full flex justify-between items-center">
          <a>Today</a>
          <a>•</a>
          <a>{{ dateConvert }}</a>
        </div>
        <div class="flex justify-center items-center pt-4">
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
import 'animate.css';
import dayjs from 'dayjs';
import { useState } from "@/helpers";
import Search from "@/components/Search";
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

        const store = useStore();

        function openModal() {
          store.commit("SEARCH_MODAL", true);
        }

        let imgDynamic = computed(() => {
          if(current.value.weather.weather_state_name) {
            let weatherState = current.value.weather.weather_state_name;
            weatherState = weatherState.replace(/\s+/g, '');
            return require(`@/assets/images/${weatherState}.png`);
          }
        })

        let dateConvert = computed(() => {
          if(current.value.weather.applicable_date) {
            return dayjs(current.value.weather.applicable_date).format("ddd,DD MMM");
          }
        })


        return {
            currentDay,
            current,
            searchModal,
            openModal,
            toggleSidebar,
            data,
            dateConvert,
            imgDynamic
        }
    }
}
</script>
