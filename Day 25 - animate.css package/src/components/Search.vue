<template>  

    <div class="fixed top-0 bg-blue w-1/4 h-screen overflow-y-scroll">

        <div class="mt-4 pr-7 w-full flex items-center justify-end cursor-pointer" @click="close()">
            <span class="material-icons text-4xl text-white">close</span>
        </div>

        <div class="mt-8 flex justify-center">
            <div class="bg-blue">
                <input class="p-2 bg-blue border-2 border-grey text-white outline-none" v-model="data.query" @keydown.enter="search" type="text">
            </div>
            <div class="ml-2 py-2 px-4 flex justify-center items-center bg-purple">
                <a class="text-white font-semibold ">Search</a>
            </div>
        </div>

        <div>
            <p v-for="result in data.listResult" :key="result.id" class="text-white m-2">
                {{ result.title }}
            </p>
            <p v-if="data.found" class="text-white text-center mt-7">Not found</p>
        </div>

    </div>
</template>

<script>
import { reactive } from "vue";
import { useStore } from "vuex";
import { useState } from "@/helpers";
import axios from 'axios';

export default {
    name: 'Search',
    setup(props, { emit }) {

        const data = reactive({
            query: "",
            listResult: {},
            found: false
        })

        const { api } = useState(["api"]);

        const store = useStore();

        function search() {
            axios.get(`${api.value.corsURL}/${api.value.apiURL}/search/?query=${data.query}`)
            .then(result => {
                if(result.data[0]) {
                    store.commit("SAVE_QUERY", data.query);
                    store.dispatch("getLocationByQuery")
                    data.listResult = result.data
                    console.log(data.listResult)
                } else {
                    data.found = true
                }
            })
            .catch(error => {
                console.log(error)
            })
        }
        
        function close() {
            emit('close');
        }

        return {
            data,
            search,
            close
        }
    }
}
</script>
