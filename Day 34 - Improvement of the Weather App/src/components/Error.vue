<template>
    <div class="pb-8 h-screen flex justify-center items-center flex-col text-red">
        <h1 class="text-3xl sm:text-5xl mx-8 font-bold text-center flex flex-col sm:flex-row"><span class="mb-3 sm:mt-0 sm:pr-4 text-5xl">Oops !</span> Error Occured</h1>
        <p class=" lg:w-1/2 sm:w-3/4 w-11/12  mt-8 pt-4 border-t border-opacity-75 border-grey text-white font-bold text-2xl tracking-wide">Possible reason :</p>
        <ul class="lg:w-1/2 sm:w-3/4 w-11/12 mt-6 list-disc list-inside text-white">
            <li>Your internet connection.</li>
            <li class="py-2"><a href="">MetaWeather's</a> API could be down.</li>
            <li>Your browser is not updated</li>
        </ul>
        <div class="mt-6 lg:w-1/2 sm:w-3/4 w-11/12 flex">
            <a class="bg-blue flex p-2 rounded cursor-pointer" @click="reload"><span class="material-icons">refresh</span></a>
        </div>
    </div>

    <Footer class="-mt-24 sm:-mt-10"/>
</template>

<script>
import Footer from "@/components/Footer.vue";
import { useStore } from "vuex";

export default {
    name: "Error",
    components: { Footer },
    setup() {

        const store = useStore();

        function reload() {
            store.commit("CHANGE_ERROR", false);
            window.location.reload();
        }

        return { reload }

    }
}
</script>