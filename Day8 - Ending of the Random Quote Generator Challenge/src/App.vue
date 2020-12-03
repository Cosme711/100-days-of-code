<template>
    <router-link to="/"></router-link>
    <router-view/>
    <footer>
        <p>Cosme Gressier | @ DevChallenges.io | <a href="https://github.com/Cosme711">My Github</a></p>
    </footer>
</template>

<style lang="scss">
    footer {
        position: absolute;
        bottom: 2%;
        left: 50%;
        transform: translateX(-50%);
        color: #A9A9A9;
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        font-weight: 600;
        line-height: 17px;
    }
</style>