<template>
  <div class="author-view">
      <router-link to="/">
            <RandomButton />
      </router-link>
    <h2>{{ author }}</h2>
    <ul>
        <li v-for="quote in this.quotes" :key="quote.id">
            <p>"{{quote.quoteText}}"</p>
        </li>
    </ul>
  </div>
</template>

<script>
import RandomButton from '@/components/RandomButton'
import axios from'axios'

export default {
    name: 'Author',
    components: { RandomButton },
    data: function() {
        return {
            author: this.$route.params.id,
            quotes: []
        }
    },
    methods: {
        loadAuthorQuote() {
            var self = this;
            const authorURLRequest = 'https://quote-garden.herokuapp.com/api/v2/authors/{{author}}?page=1&limit=3'
            const requestURL = authorURLRequest.replace('{{author}}', this.author);
            axios.get(requestURL)
            .then(function (response) {
                self.quotes = response.data.quotes
            })  
            .catch(function (error) {
                console.log(error);
            })
        },

    },
    created() {
        this.loadAuthorQuote();
    }
}
</script>

<style lang="scss">
.author-view {
    width: 60%;
    margin: 7rem auto 0 auto;
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
    li {
        list-style: none;
        margin: 5rem 0;
        p {
            padding: 0 4.5rem;
            font-size: 36px;
            font-weight: 500;
            border-left: 7px solid #F7DF94;
        }
    }
    @include mobile {
        width: 90%;
    }

}
</style>