<template>
    <div class="w-40 flex flex-col bg-blue rounded-md">
        <p class="mt-4 text-white text-center">{{ dateConvert }}</p>
        <img :src="weatherImage(day.weather_state_name)" :alt="day.weather_state_name" class="w-4/6 m-auto">
        <div class="my-4 flex justify-center">
            <p class="mr-2 text-lg text-white">{{ minTemperature }}</p>
            <p class="ml-2 text-lg text-grey">{{ maxTemperature }}</p>
        </div>
    </div>
</template>

<script>
import dayjs from 'dayjs';

export default {
    name: "CardDay",
    props: {
        day: {
            type: Object, 
            required: true
        }
    },
    computed: {
        dateConvert() {
            return dayjs(this.day.applicable_date).format("ddd,DD MMM");
        },
        getIsCelcius() {
            return this.$store.state.isCelcius
        },
        minTemperature() {
          if(this.getIsCelcius) {
            return Math.round(this.day.min_temp) + "°C"
          } else {
              return Math.round(((this.day.min_temp * 9/5) + 32)) + "°F";
          }
        },
        maxTemperature() {
            if(this.getIsCelcius) {
                return Math.round(this.day.max_temp) + "°C"
            } else {
                return Math.round(((this.day.max_temp * 9/5) + 32)) + "°F";
            }
        }
    },
    methods: {
        weatherImage(weatherState) {
            weatherState = weatherState.replace(/\s+/g, '');
            return require(`@/assets/images/${weatherState}.png`);
        }
    }
}
</script>
