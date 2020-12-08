<template>
    <div id="app">
      <div style="width: 100%;position: relative;" v-if="!is_ended">
        <h1>Tape ces mots le plus vite possible</h1>
        <h2>{{time/1000}}s</h2>
        <input id="main-input" type="text" :value="user_text" @input="user_text = $event.target.value" />
        <p>{{user_text}}<span>{{to_be_written}}</span></p> 
      </div>
      <h1 v-if="is_ended">Jeu terminé en {{time/1000}}s, <br> belle journée à toi !</h1>   
    </div>
</template>

<script>

export default {
  name: 'App',
  data: function(){
    return {
      sentences: [
        "je suis une belle personne.",
        "aujourd'hui est une bonne journée.",
        "j'ai le droit au bonheur.",
        "je mérite les bonnes choses qui m'arrivent.",
        "je vais surmonter les obstacles de la vie.",
        "je fais de mon mieux.",
        ":)"
      ],
      word: null,
      sentence_index: 0,
      word_index: 0,
      user_text: "",
      timer: null,
      time: 0,
      is_ended: false
    }
  },
  mounted: function(){
    this.word = this.sentences[this.sentence_index].split(' ')[this.word_index];

    setTimeout(function(){

      document.querySelector("#main-input").click()
      document.querySelector("#main-input").focus();

      document.body.ontouchend = function() {
        document.querySelector("#main-input").click()
        document.querySelector("#main-input").focus();
      }
    },100)
    
    document.querySelector("#main-input").addEventListener("blur", function(){
      setTimeout(function(){
        document.querySelector("#main-input").click();
        document.querySelector("#main-input").focus();
      }, 0);
    });
    this.timer = setInterval(function(){this.time += 100;}.bind(this),100)
  },
  computed: {
    to_be_written: function(){
      if(this.word){
        return this.word.substr(this.user_text.length);
      } else {
        return "";
      }
    }
  },
  watch: {
    user_text: function(){
      console.log(this.user_text);
      this.user_text = this.user_text.toLowerCase().replace("’","'").replace("‘","'").replace("`","'").replace("´","'");
      if(this.word.toLowerCase().indexOf(this.user_text) !== 0) {
        this.user_text = this.user_text.substr(0,this.user_text.length-1);
      } else if(this.word.indexOf(this.user_text) === 0 && this.word.length === this.user_text.length){
        if(this.word_index === this.sentences[this.sentence_index].split(' ').length - 1){
          if(this.sentence_index === this.sentences.length -1) {
            this.is_ended = true;
            clearInterval(this.timer);
          } else {
            this.sentence_index++;
            this.word_index = -1;
          }
        }
        this.word = this.sentences[this.sentence_index].split(' ')[++this.word_index];
        this.user_text = "";
        
      }
    }
  },
  components: {
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  padding: 0px 20px;
}
input {
  position: absolute;
  width: 100%;
  left: 0;
  text-align: center;
  z-index: 1;
  height: 50px;
  opacity: 0;
}
p {
  display: inline-block;
  position: absolute;
  z-index: 2;
  margin:0;
  font-size: 60px;
  text-align: center;
  width: 100%;
  left: 0;
  user-select: none;
  touch-action: none;
  pointer-events: none;
}

h1, h2 {
  user-select: none;
  touch-action: none;
}

span {
  color: rgba(0,0,0,0.2);
}
</style>
