<template>
    <router-link to="/"></router-link>
    <router-view/>
    <footer>
        <p>Cosme Gressier | @ DevChallenges.io | <a href="https://github.com/Cosme711">@Cosme711</a></p>
    </footer>
</template>

<style lang="scss">
html {
    height: 100%;
    body {
        margin: 0;
        font-family: 'Raleway', sans-serif;
        a {
            color: inherit;
            text-decoration: none;
        }
        p {
            margin: 0;
        }
        #app {
            min-height: 100vh; 
            display: flex;
            flex-direction: column;
            footer {
                margin: auto 0 1rem 0;
                padding-top: 2.5rem;
                text-align: center;
                color: #A9A9A9;
                font-family: 'Montserrat', sans-serif;
                font-size: 14px;
                font-weight: 600;
                line-height: 17px;
            }  
        }
    }
}
</style>