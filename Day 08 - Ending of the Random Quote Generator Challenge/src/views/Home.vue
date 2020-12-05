<template>
  <main v-if="text">
    <RandomButton @click="randomQuote"/>
    <p class="text">"{{ this.text }}"</p>
    <Author :author="this.author" :genre="this.genre"/>
  </main>
</template>

<script>
import axios from'axios'
import Author from'@/components/Author'
import RandomButton from '@/components/RandomButton'

export default {
  name: 'Home',
  components: { Author, RandomButton },
  data: function() {
    return {
      text: '',
      author: '',
      genre: ''
    }
  },
  methods: {
    randomQuote() {
      var self = this;
      axios.get('https://quote-garden.herokuapp.com/api/v2/quotes/random')
        .then(function (response) {
          console.log(response)
          self.text = response.data.quote.quoteText;
          self.author = response.data.quote.quoteAuthor
          self.genre = response.data.quote.quoteGenre
          console.log(response)
        })
    },
  },
  created() {
    this.randomQuote();
  }
}
</script>

<style lang="scss">
main {
  margin-top: 13rem;
  .text {
    width: 40%;
    margin: auto;
    padding-left: 4.5rem;
    font-size: 36px;
    font-weight: 500;
    border-left: 7px solid #F7DF94;
    @include mobile {
      width: 70%;
      font-size: 30px;
    }
  }
  @include mobile {
    margin-top: 9rem;
  }
}
</style>
