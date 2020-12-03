<template>
  <router-link :to="`/author/${author}`">
    <div class="informations">
      <div class="informations__content">
        <p class="author">{{ author }}</p>
        <p class="genre">{{ genre }}</p>
      </div>
      <span class="material-icons">arrow_right_alt</span>
    </div>
  </router-link>
</template>

<script>
export default {
    name: 'Author',
    props: {
        author: String,
        genre: String
    }
}
</script>

<style lang="scss">
.informations {
  width: 40%;
  margin: auto;
  padding: 2rem;
  margin-top: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #4F4F4F;
  cursor: pointer;
  &:hover {
    background-color: #333333;
    color: white;
  }
  .author {
    font-weight: bold;
    font-size: 27px;
    line-height: 28px;
  }
  .genre {
    margin: 0.5rem auto 0 auto;
    color: #828282;
  }
  span {
    font-size: 3rem;
    color: white;
  }
  @include mobile {
    width: 70%;
    font-size: 21px;
  }
}
</style>