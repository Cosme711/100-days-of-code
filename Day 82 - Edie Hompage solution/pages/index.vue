<template>
  <div class="font-poppins">
    <NavBar />
    <main class="px-3">
       <Banner />
       <Services />
       <Designs />
       <Teams />
    </main>
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Banner from '@/components/Banner.vue'
import Services from '@/components/Services.vue'
import Designs from '@/components/Designs.vue'
import Teams from '@/components/Teams.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: { NavBar, Banner, Services, Designs, Teams, Footer }

}
</script>
