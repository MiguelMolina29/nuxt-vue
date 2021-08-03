<template>
  <div class="container">
    <h2>vuex</h2>
    <form
      @submit.prevent="agregarTarea(tarea)"
    >
      <input type="text" class="form-control mb-2" v-model="tarea">
      <b-button type="submit">Agregar</b-button>
    </form>
    <ul>
      <li v-for="(item, index) in tareas" :key="index">
        {{item.id}} - {{item.nombre}}
        <b-button class="btn-sm btn-warning" :to="`/vuex/${item.id}`">Editar</b-button>
        <b-button class="btn-sm btn-danger" @click="eliminarTarea(item)">Eliminar</b-button>
        <hr>
      </li>
    </ul>
  </div>
</template>

<script>

import { db } from '../../plugins/firebase';
import {mapState, mapActions} from 'vuex'

export default {

  // fetch({store}) { // Aqui se llama a toda la tienda
  //   return db.collection('tareas').get()
  //     .then(query => {
  //       const tareas = []
  //       query.forEach(element => {
  //         tareas.push(element.data())
  //       });
  //       return store.commit('setTareas', tareas)
  //     })
  //     .catch(function(error) {
  //       console.log("Error en obtener los documentos", error);
  //     })
  // }
  computed: {
    ...mapState(['tareas'])
  },
  methods: {
    ...mapActions(['agregarTarea', 'eliminarTarea'])
  },
  data() {
    return {
      tarea: ''
    }
  },

}
</script>

<style>

</style>
