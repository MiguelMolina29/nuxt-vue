<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h1> {{articulo.title}} </h1>
        <p class="small">
          {{autor.name}}
        </p>
        <p>
          {{articulo.body}}
        </p>
        <nuxt-link to="/blog" class="btn btn-primary">
          Atras
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      articulo: '',
      autor: ''
    }
  },
  async created() {
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
      this.articulo = res.data;

      const auth = await axios.get(`https://jsonplaceholder.typicode.com/users/${res.data.userId}`)
      this.autor = auth.data

    } catch (error) {
      console.log(error)
    }

  },
}
</script>

<style>

</style>
