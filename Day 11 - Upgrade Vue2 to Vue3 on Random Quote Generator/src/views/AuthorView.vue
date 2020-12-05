<template>
  <div class="author-view">
      <router-link to="/">
            <RandomButton />
      </router-link>
    <h3>{{ authorName }}</h3>
    <ul>
        <li v-for="quote in state.quotes" :key="quote.id">
            <p>"{{quote.quoteText}}"</p>
        </li>
    </ul>
  </div>
</template>

<script>
import RandomButton from '@/components/RandomButton'
import { reactive, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from'axios'

export default {
    name: 'Author',
    components: { RandomButton },
    setup() {

        const state = reactive({
            quotes: [],
        })

        const route = useRoute();

        function loadAuthorQuote() {
            const authorURLRequest = 'https://quote-garden.herokuapp.com/api/v2/authors/{{author}}?page=1&limit=3'
            const requestURL = authorURLRequest.replace('{{author}}', route.params.author);
            axios.get(requestURL)
            .then((response) => {
                state.quotes = response.data.quotes
            })  
            .catch((error) =>{
                console.log(error);
            })
        }

        onMounted( () => loadAuthorQuote())

        
        const authorName = computed( () => {
            return route.params.author
        })

        return {
            state,
            authorName,
        }

    }
}
</script>

<style lang="scss">
.author-view {
    margin: 7rem auto 0 auto;
    width: 60%;
    @include tablet {
        width: 90%;
    }
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
    h2 {
        margin-left: 1rem;
        color: #333333;
    }
    ul {
        padding: 0;
        li {
            list-style: none;
            margin: 5rem 0;
            p {
                padding: 0 4.5rem;
                font-size: 36px;
                font-weight: 500;
                border-left: 7px solid #F7DF94;
                @include tablet {
                    font-size: 30px;
                }
                @include mobile {
                    font-size: 24px;
                    padding: 0 2rem;
                }
            }
        }
    }
}
</style>