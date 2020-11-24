<template>
<div class="host-content">
    <div class="host-content__header">
        <p>Stays in Finland</p>
        <p>{{ store.state.apartments.length }} stays</p>
    </div>
    <div class="host-content__content" v-if="store.state.apartments.length !== 0">
        <div v-for="(apartment, index) in store.state.apartments" :key="index">
            <HostItem :apartment="apartment"/>
        </div>
    </div>
    <div v-else>
        <p>No results found</p>
    </div>
</div>
</template>

<script>
import {injectStore} from "@/store/state";
import HostItem from "../components/HostItem"
export default {
    name: "HostContent",
    components: { HostItem },
    setup() {
        return { store: injectStore() };
    }
};
</script>

<style lang="scss" scoped>

.host-content__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5rem 0 2rem 0;
    @include mobile {
        margin-top: 3rem;
    }
    :first-child {
        font-size: 24px;
        font-weight: 700;
        @include mobile {
            font-size: 18px;
        }
    }
    :last-child {
        font-size: 14px;
        font-weight: 500;
    }
}

.host-content__content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 50px;
    @include desktop {
        grid-template-columns: 1fr 1fr;
        grid-gap: 25px;
    }
    @include tablet {
        grid-template-columns: 1fr;
        grid-gap: 50px;
    }
}

</style>