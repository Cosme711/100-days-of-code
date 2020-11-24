<template>
<div class="host-item">
    <img :src="apartment.photo"/>
    <div class="type-rating">
        <p class="super-host" v-if="apartment.superHost">super host</p>
        <div class="type">
            <p>{{ apartment.type }}</p>
            <div class="rating">
                <span class="material-icons">grade</span>
                <p>{{ apartment.rating }}</p>
            </div>
        </div>
    </div>
    <div class="title">
        {{ apartment.title }}
    </div>
</div>
</template>

<script>
export default {
    name:"HostItem",
    props: ['apartment']
}
</script>

<style lang="scss" scoped>
.host-item {
    img {
        width: 100%;
        height: 269px;
        object-fit: cover;
        border-radius: 24px;
        @include tablet {
            height: 350px;
        }
        @include mobile {
            height: 200px;
        }
    }
    .type-rating {
        display: flex;
        align-items: center;
        height: 40px;
        .super-host {
            padding: 5px;
            border: 1px solid #4F4F4F;
            border-radius: 12px;
            min-width: 97px;
            text-align: center;
            margin-right: 15px;
        }
        .type {
            font-size: 14px;
            font-weight: 500;
            color: #828282;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }
        .rating {
            display: flex;
            justify-content: space-between;
            align-items: center;
            span {
                margin-left: auto;
                color: #EB5757;
            }
        }
    }
    .title {
        font-size: 16px;
        font-weight: 600;
    }   
}
</style>