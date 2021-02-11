<template>
  <div class="px-3 font-poppins">
    <NavBar />
    <main>
       <Banner />
    </main>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Banner from '@/components/Banner.vue'

export default {
  components: { NavBar }

}
</script>
