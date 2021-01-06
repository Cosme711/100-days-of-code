<template>
  <div class="text-white">
    <p class="mt-14 text-3xl font-bold">Today’s Hightlights </p>

    <div class="mt-8 grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 gap-5 lg:gap-10 text-center">
          <div class=" bg-blue">
              <p class="mt-4 text-lg">Wind status</p>
              <p class="mt-3 text-3xl"><span class="text-7xl font-bold">77</span>mph</p>
              <div class="mt-6 mb-4 mx-8 flex justify-center items-center">
                  <div class="w-8 h-8 flex items-center justify-center bg-grey rounded-full">
                        <span class="material-icons text-lg">navigation</span>
                  </div>
                  <p class="ml-4">WSW</p>
              </div>
          </div>
          <div class="bg-blue">
              <p class="mt-4 text-lg">Humidity</p>
              <p class="mt-3 text-3xl "><span class="text-7xl font-bold">27</span>%</p>
                <div class="w-64 mt-2 m-auto flex flex-col items-center font-bold text-xs">
                    <div class="w-11/12 flex items-center justify-between">
                        <p>0</p>
                        <p>50</p>
                        <p>100</p>
                    </div>
                    <div class="mt-1 h-2 w-11/12 bg-white rounded">
                        <div class="h-2 bg-yellow rounded"></div>
                    </div>
                    <p class="mt-1 w-11/12 text-right">%</p>
                </div>
          </div>

          <div class="bg-blue">
                <p class="mt-4 text-lg">Visibility</p>
                <p class="mt-3 text-3xl"><span class="text-7xl font-bold">77</span>miles</p>
          </div>

          <div class="bg-blue">
                <p class="mt-4 text-lg">Air Pressure</p>
                <p class="mt-3 text-3xl"><span class="text-7xl font-bold">77</span>mb</p>
          </div>
    </div>

    <Footer class="mt-9"/>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
    name: "Hightlights",
    components: { Footer },
}
</script>