<template>
    <div>
      <div class="h-screen flex flex-col justify-between items-center bg-blue navbar">

        <div class="pt-5 px-5 w-full flex justify-between items-center">
          <a class="px-4 py-2 bg-darkgrey text-white rounded-sm cursor-pointer">Search for places</a>
          <a class="ml-2 p-2 bg-darkgrey flex rounded-full cursor-pointer">
            <span class="material-icons text-white">gps_fixed</span>
          </a>
        </div>

        <div>
          <img class="w-40 lg:w-full">
        </div>

        <div>
          <p class="ml-4 text-8xl text-white">0°C</p>
          <p class="mt-4 text-5xl text-center text-darkgrey">Rain</p>
        </div>

        <div class="w-40 pb-8 text-darkgrey">
          <div class="w-full flex justify-between items-center">
            <a>Today</a>
            <a>•</a>
            <a>06/01/2021</a>
          </div>
          <div class="pt-4 flex justify-center items-center">
            <span class="material-icons">location_on</span>
            <p class="ml-2">Paris</p>
          </div>
        </div>
      </div>

      <!-- <transition enter-active-class="animate__animated animate__slideInLeft animate__faster" leave-active-class="animate__animated animate__slideOutLeft animate__faster" mode="out-in">
          <Search v-if="data.isOpen" @close="toggleSidebar()"></Search>
      </transition> -->

  </div>
</template>