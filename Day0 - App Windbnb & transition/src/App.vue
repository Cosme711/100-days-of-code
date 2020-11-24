<template>
  <div class="app">
    <div class="header">
      <div class="logo" @click="clearResult">
        <img src="../public/logo.png">
      </div>
        <SearchBar />
    </div>
    <HostContent />
    <footer>
      <p>Cosme Gressier @ DevChallenges.io</p>
    </footer>
  </div>
</template>

<script>
import HostContent from "../src/components/HostContent";
import SearchBar from "../src/components/SearchBar.vue";

export default {
  name: 'App',
  components: { HostContent, SearchBar }
}
</script>

<style lang="scss" scoped>

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  @include mobile {
    flex-direction: column;
    img {
      margin-bottom: 2rem;
    }
  }
}

footer {
  text-align: center;
  width: 40%;
  margin: 5rem auto 2rem auto;
  padding-top: 1rem;
  border-top: 1px solid #BDBDBD;
  p {
    color: #A9A9A9;
  }
  @include tablet {
    width: 70%;
  }
  @include mobile {
    width: 80%;
    font-size: 12px;
  }
}
</style>
