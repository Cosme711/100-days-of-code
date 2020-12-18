<template>
    <div class="bg-blue w-40 rounded-md">
        <p class="mt-5  text-white text-center">{{ dateConvert }}</p>
        <img :src="weatherImage(day.weather_state_name)" :alt="day.weather_state_name" class="w-4/6 m-auto">
        <div class="pt-auto mb-3 flex justify-center">
            <p class="mr-2 text-white">{{ Math.round(day.min_temp) }}°C</p>
            <p class="ml-2 text-grey">{{ Math.round(day.max_temp) }}°C</p>
        </div>
    </div>
</template>

<script>

// import { useState } from "@/helpers";
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
        }
    },
    methods: {
        weatherImage(weatherType) {
            weatherType = weatherType.replace(/\s+/g, '');
            return require(`@/assets/images/${weatherType}.png`);
        }
    }

}
</script>

<style>

</style>