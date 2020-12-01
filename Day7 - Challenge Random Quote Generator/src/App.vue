<template>
  <div id="app">
    <div @click="randomQuote" id="random-btn">
      <p>random</p>
      <span class="material-icons">cached</span>
    </div>
    <div id="content" v-if="text">
      <p class="text">"{{ this.text }}"</p>
      <p class="author">{{ this.author }}</p>
      <p class="genre">{{ this.genre }}</p>
    </div>
  </div>
</template>

<script>

import axios from'axios'
export default {
  name: 'App',
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
        })
    },
  }
}
</script>

<style>

/* font-family: 'Montserrat', sans-serif;
font-family: 'Raleway', sans-serif; */

body {
  margin: 0;
  font-family: 'Raleway', sans-serif;
}

h1 {
  margin: 0;
}

p {
  margin: 0;
}

#random-btn {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 2rem 4rem 0 0;
  color: #4F4F4F;
  cursor: pointer;
}

#random-btn p {
  margin-right: 0.75rem;
  font-size: 1.25rem;
  font-weight: 500;
}

#random-btn span {
  transform: rotate(90deg);
}

#content {
  margin-top: 10rem;
}

.text {
  font-size: 36px;
  font-weight: 500;
  width: 30%;
  margin: auto;
  border-left: 7px solid #F7DF94;
  padding-left: 5rem;
}

.author {
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  width: 30%;
  margin: 5rem auto 0 auto;
  color: #4F4F4F;
}

.genre {
  width: 30%;
  margin: 0.5rem auto 0 auto;
  color: #828282;
}

</style>
