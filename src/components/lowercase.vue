<template>
  <div>
    <section class="h-100" id="lokmaci">
      <article class="container h-100">
        <h1><b>harfler arasında hiyerarşi olmaz</b></h1>
        <b-form-input v-model="text" placeholder="let's make it lower case"></b-form-input>
        <h1 class="lowercase" v-if="text">👉🏻 {{ text.toLowerCase() }}</h1>
      </article>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'lowercase',
    data() {
      return {
        text: null
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: lighter;
  }

  a {
    color: #42b983;
  }
  body, html {
    height: 100%;
  }
  a {
    font-size: 16px;
  }
  .lowercase {
    margin-top: 100px;
  }
</style>
