<template>
  <main v-show="state.content">
    <RandomButton @click="randomQuote"/>
    <p class="content">"{{ state.content }}"</p>
    <Author :author="state.author" :genre="state.genre"/>
  </main>
</template>

<script>
import Author from'@/components/Author'
import RandomButton from '@/components/RandomButton'
import { reactive, onMounted } from 'vue';
import axios from'axios'

export default {
  name: 'Home',
  components: { Author, RandomButton },
  setup() {

    const state = reactive({
      content: '',
      author: '',
      genre: ''
    })

    function randomQuote() {
      axios.get('https://quote-garden.herokuapp.com/api/v2/quotes/random')
        .then((response) => {
          state.content = response.data.quote.quoteText;
          state.author = response.data.quote.quoteAuthor
          state.genre = response.data.quote.quoteGenre
        })
        .catch((error) => {
          console.log(error)
        })
    }

    onMounted(() => randomQuote())

    return {
      state,
      randomQuote
    }
  }
}
</script>

<style lang="scss">
main {
  margin-top: 13rem;
  @include tablet {
    margin-top: 9rem;
  }
  .content {
    width: 40%;
    margin: auto;
    padding-left: 4.5rem;
    font-size: 36px;
    font-weight: 500;
    border-left: 7px solid #F7DF94;
    @include tablet {
      width: 70%;
      font-size: 30px;
    }
    @include mobile {
      font-size: 24px;
      padding-left: 2rem;
    }
  }
}
</style>
