<template>
    <div class="random-btn">
        <p>random</p>
        <span class="material-icons">cached</span>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.random-btn {
    position: absolute;
    top: 5%;
    right: 10%;
    color: #4F4F4F;
    display: flex;
    cursor: pointer;
    p {
        margin-right: 0.25rem;
        font-size: 1.25rem;
        font-weight: 500;
    }
    span {
        transform: rotate(90deg);
    }
}
</style>