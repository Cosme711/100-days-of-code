<template>
  <div>
    <div class="w-10/12 m-auto h-full">
      <div class="mt-16 flex">
        <div class="w-1/4">
          <Profile />
        </div>
        <div class="w-3/4">
          <div class="pl-8 grid grid-cols-3 gap-10 w-full">
              <CompetenceFront />
              <CompetenceBack />
              <CompetenceDesign />
          </div>
          <Projects />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Profile from "@/components/Profile.vue"
import CompetenceFront from "@/components/CompetenceFront.vue"
import CompetenceBack from "@/components/CompetenceBack.vue"
import CompetenceDesign from "@/components/CompetenceDesign.vue"
import Projects from "@/components/Projects.vue"


export default {
  components: { Profile, CompetenceFront, CompetenceBack, CompetenceDesign, Projects }
}
</script>

<style>
  
body {
  background-color: #F2F2F2;
  font-family: 'Montserrat', sans-serif;
}

</style>
