<template>  
    <div class="test absolute top-0 bg-blue w-2/5 h-screen animate-openModal">

        <div class="mt-4 pr-7 w-full flex items-center justify-end cursor-pointer" @click="closeModal">
            <span class="material-icons text-4xl text-white">close</span>
        </div>

        <div class="mt-8 flex justify-center">
            <div class="bg-blue">
                <input class="p-2 bg-blue border-2 border-grey text-white outline-none" type="text">
            </div>
            <div class="ml-2 py-2 px-4 flex justify-center items-center bg-purple">
                <a class="text-white font-semibold ">Search</a>
            </div>
        </div>

    </div>
</template>

<script>
import { useStore } from "vuex";

export default {
    name: 'Search',
    setup() {

        const store = useStore();

        function closeModal() {
            store.commit("SEARCH_MODAL", false);

        }

        return { closeModal }

    }
}
</script>

<style>

</style>