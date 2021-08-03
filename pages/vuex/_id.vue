<template>
  <div class="container mb-5">
    <h2>Editando</h2>
    {{tarea}}
    <form
      @submit.prevent="editarTarea(tarea)"
    >
      <input type="text" class="form-control mb-2" v-model="tarea.nombre">
      <b-button class="btn-warning" type="submit">Editar</b-button>
    </form>
  </div>
</template>

<script>

import {db} from '../../plugins/firebase';
import {mapState, mapActions} from 'vuex'

export default {
  fetch({store, params}) {
    return db.collection('tareas').doc(params.id).get()
      .then(doc => {
        if(doc.exists) {
          let tarea = doc.data();
          tarea.id = doc.id;
          return store.commit('setTareaIndividual', tarea)
        }
      })
      .catch(e => {
        console.log(e)
      })
  },
  computed: {
    tarea: {
      get() {
        return {
          nombre: this.$store.state.tarea.nombre,
          id: this.$store.state.tarea.id
        }
      }
    }
  },
  methods: {
    ...mapActions(['editarTarea'])
  },
}
</script>

<style>

</style>
