<template>
    <div class="w-40 flex flex-col bg-blue rounded-md">
        <p class="mt-4 text-white text-center">{{ dateConvert }}</p>
        <img :src="weatherImage" :alt="day.weather_state_name" class="w-4/6 m-auto">
        <div class="my-4 flex justify-center">
            <p class="mr-2 text-lg text-white">{{ minTemperature }}</p>
            <p class="ml-2 text-lg text-grey">{{ maxTemperature }}</p>
        </div>
    </div>
</template>

<script>
import dayjs from 'dayjs';
import { useState } from "@/helpers";
import { computed } from "vue";

export default {
    name: "CardDay",
    props: {
        day: {
            type: Object, 
            required: true
        }
    },
    setup(props) {

        const dateConvert = computed(() => {
            return dayjs(props.day.applicable_date).format("ddd,DD MMM");
        })

        const { isCelcius } = useState(["isCelcius"]);

        const minTemperature = computed(() => {
            if(isCelcius.value) {
                return Math.round(props.day.min_temp) + "°C";
            } else {
                return Math.round(((props.day.min_temp * 9/5) + 32)) + "°F";
            }
        })

        const maxTemperature = computed(() => {
            if(isCelcius.value) {
                return Math.round(props.day.max_temp) + "°C"
            } else {
                return Math.round(((props.day.max_temp * 9/5) + 32)) + "°F";
            }
        })

        const weatherImage = computed(() => {
            const weatherState = props.day.weather_state_name.replace(/\s+/g, '');
            return require(`@/assets/images/${weatherState}.png`);
        })
        
        return { dateConvert, minTemperature, maxTemperature, weatherImage  }

    }
}
</script>
