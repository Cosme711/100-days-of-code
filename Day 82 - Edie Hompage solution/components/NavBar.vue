<template>
  <header class="px-4 lg:px-8 xl:px-12 mt-2 lg:mt-8 flex justify-between">
        <h1 class="text-darkgray font-heebo text-3xl">Edie</h1>
        <nav class="flex items-center">
          <div class="mobile:hidden flex flex-col justify-center pb-2">
              <div class="w-6 h-1 mb-1 bg-darkgray rounded"></div>
              <div class="w-6 h-1 bg-darkgray rounded"></div>
              <div class="w-6 h-1 mt-1 bg-darkgray rounded"></div>
          </div>
          <ul class="hidden mobile:flex text-lg text-darkgray font-medium">
            <li class="cursor-pointer">Home</li>
            <li class="px-5 md:px-8 lg:px-12 cursor-pointer">Services</li>
            <li class="cursor-pointer">Our Works</li>
            <li class="px-5 md:px-8 mg:px-12 cursor-pointer">Clients</li>
            <li class="cursor-pointer">Contact</li>
          </ul>
        </nav>
  </header>
</template>

