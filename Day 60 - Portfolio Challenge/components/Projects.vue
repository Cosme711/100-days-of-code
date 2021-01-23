<template>
    <div class="pl-8 mt-12 text-gray-700">
        <div class="bg-white rounded-md">
            <p class="p-4 text-xl">Projects (3)</p>
        </div>
        <div class="mt-4 bg-white">
            <div class="p-5 flex">
                <div class="w-1/3">
                    <img src="../assets/images/Weather_App_ScreenShot.png" alt="" class="rounded-xl">
                </div>
                <div class="pl-8 pt-2 w-2/3 flex flex-col justify-between">
                    <div class="flex">
                        <p>#HTML</p>
                        <p class="pl-3">#CSS</p>
                        <p class="pl-3">#responsive</p>
                    </div>
                    <div class="mt-4 text-gray-800">
                        <h3 class="text-3xl">Weather App</h3>
                    </div>
                    <div>
                        <p>In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. </p>
                    </div>
                    <Button />
                </div>
            </div>
        </div>
        <div class="mt-4 bg-white">
            <div class="p-5 flex">
                <div class="w-1/3">
                    <img src="../assets/images/Country_Quizz_ScreenShot.png" alt="" class="rounded-xl">
                </div>
                <div class="pl-8 pt-2 w-2/3 flex flex-col justify-between">
                    <div class="flex">
                        <p>#HTML</p>
                        <p class="pl-3">#CSS</p>
                        <p class="pl-3">#responsive</p>
                    </div>
                    <div class="mt-4 text-gray-800">
                        <h3 class="text-3xl">Country Quizz</h3>
                    </div>
                    <div>
                        <p>In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. </p>
                    </div>
                    <Button />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from "@/components/Button.vue"

export default {
    components: { Button }
    
}
</script>