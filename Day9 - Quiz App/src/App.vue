<template>
  <main>
    <div class="heading">
      <header>Country Quiz</header>
      <img
        src="./assets/adventure.svg"
        alt=""
      />
    </div>
    <div class="content">
      <h3 class="question-title">{{ state.capitalAnswer.capital }} is the capital of</h3>
      <ul>
        <li v-for="response in state.capitalResponse" :key="response.id"><p>{{ response.name }}</p></li>
      </ul>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import { onMounted, reactive} from "vue";

export default {
  name: 'App',
  setup() {

    const state = reactive({
      capitalAnswer: '',
      capitalResponse: []
    })

    const getData = async () => {
      const { data } = await axios.get(
        "https://restcountries.eu/rest/v2/all?fields=name;capital;flag"
      );
      const index = Math.floor(Math.random() * 250);
      state.capitalAnswer = data[index];
      let j = 0;
      while (j < 3) {
        const index = Math.floor(Math.random() * 250);
        let allResponse = data[index];
        state.capitalResponse.push(allResponse);
        allResponse = ''
        j++;
      }
      var shuffle = require('shuffle-array');
      state.capitalResponse.push(state.capitalAnswer)
      shuffle(state.capitalResponse);
      console.log(state.capitalResponse)
      console.log(state.capitalAnswer)
    };

    onMounted(getData);
      return {
        getData,
        state
      }
  }
}

</script>

<style lang="scss">
main {
  display: flex;
  flex-direction: column;
  align-items: flex-start ;
  justify-content: center;
  max-width: 500px;
  width: 100vw;
  position: relative;
}
.heading {
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  transform: translateY(55px);
}
header {
  font-weight: bold;
  font-size: 36px;
  line-height: 54px;
  text-transform: uppercase;
  color: #F2F2F2;
}
.content {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 20px;
  min-height: 550px;
  width: 100%;
  padding: 3rem;
}

.question-title {
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  color: #2f527b;
}

ul {
  height: 100%;
  margin: 1.5rem 0;
}
li {
  margin: 2rem 0;
  padding: 1rem 0;
  border: 2px solid rgba(96, 102, 208, 0.7);
  border-radius: 12px;
  p {
    font-size: 1.5rem;
    color: #6066D0;
    margin-left: 1rem;
  }
  &:hover {
    background-color: #F9A826;
    p {
      color: white;
    }
  }
}
</style>