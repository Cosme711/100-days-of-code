<template>
  <div class="w-2/3 bg-darkblue">
    <div class="pt-16 pb-10 w-10/12 m-auto">
        <div class="mb-7 w-full flex justify-end text-white text-lg font-bold">
          <a class="py-3 px-4 rounded-full cursor-pointer bg-white text-blue">°C</a>
          <a class="ml-4 py-3 px-4 rounded-full cursor-pointer bg-blue text-white">°F</a>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-5 gap-6">
            <CardDay class="m-auto h-full w-full" />
            <CardDay class="m-auto h-full w-full" />
            <CardDay class="m-auto h-full w-full" />
            <CardDay class="m-auto h-full w-full" />
            <CardDay class="m-auto h-full w-full" />
        </div>
        <Hightlights />
    </div>
  </div>
</template>

<script>
import CardDay from "@/components/CardDay";
import Hightlights from "@/components/Hightlights";

export default {
    name: 'Content',
    components: { CardDay, Hightlights },
}
</script>