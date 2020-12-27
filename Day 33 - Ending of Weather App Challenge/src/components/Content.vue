<template>
  <div class="w-2/3 bg-darkblue">
    <div class="pt-16 pb-10 w-10/12 m-auto">
        <div class="mb-7 w-full flex justify-end text-white text-lg font-bold">
          <a class="py-3 px-4 rounded-full cursor-pointer" 
            @click="store.commit('IS_CELCIUS', true)"
            :class="isCelcius ? 'bg-white text-blue' : 'bg-blue text-white'"
          >°C</a>
          <a class="ml-4 py-3 px-4 rounded-full cursor-pointer"
            @click="store.commit('IS_CELCIUS', false)"
            :class="isCelcius ? 'bg-blue text-white' : 'bg-white text-blue'"
          >°F</a>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-5 gap-6">
            <CardDay v-for="day in forecast" :key="day.id" :day="day" class="m-auto h-full w-full" />
        </div>
        <Hightlights />
    </div>
  </div>
</template>

<script>
import CardDay from "@/components/CardDay";
import Hightlights from "@/components/Hightlights";
import { useState } from "@/helpers";
import { useStore } from "vuex";

export default {
    name: 'Content',
    components: { CardDay, Hightlights },
    setup() {

      const store = useStore();

      const { forecast } = useState(["forecast"]);

      const { isCelcius } = useState(["isCelcius"]);

      return { store, forecast, isCelcius }
      
    }
}
</script>