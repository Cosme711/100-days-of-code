<template>
  <div class="relative">
    <h1 class="font-extrabold text-xl md:text-3xl uppercase text-white pb-2">
      Country Quiz
    </h1>
    <img
      v-if="typeOfModal === 'flag' || typeOfModal === 'capital'"
      class="test absolute"
      src="@/assets/images/inGame.svg"
      alt=""
    />
    <div class="round bg-gray-200 max-w-sm overflow-hidden py-7 px-5 sm:px-12">
      <Flag v-if="typeOfModal === 'flag'" />
      <Capital v-if="typeOfModal === 'capital'" />
      <Result v-if="typeOfModal === 'result'" />
    </div>
  </div>
</template>

<script>
import Capital from "@/components/Capital.vue";
import Flag from "@/components/Flag.vue";
import Result from "@/components/Result.vue";
import { useState } from "@/helpers";

export default {
  name: "Quiz",
  components: { Capital, Flag, Result },
  setup() {
    const { typeOfModal } = useState(["typeOfModal"]);

    return {
      typeOfModal
    };
  }
};
</script>

<style scoped>
.test {
  height: 70px;
  top: 30px;
  right: 30px;
}
.round {
  border-radius: 9px;
}
</style>
