<template>

  <section class="src-components-respuestas">
    <div class="jumbotron">
      <h2>Respuestas</h2>
      <br>
      <br>
      <div class="table-responsive">
        <table class="table">
            <tr class="bg-dark text-white">
                <th>Numero de pregunta</th>
                <th>Respuesta</th>
            </tr>
            <tr class="bg-info text-white" v-for="(pregunta,index) in preguntas" :key="index">
                <td>{{ pregunta.numero }}</td>
                <td>{{ pregunta.respuestas.toString() }}</td>

            </tr>
        </table>
      </div>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-respuestas',
    props: [],
    mounted () {

    },
    data () {
      return {
        preguntas:[
          {numero: 1, respuestas: ['c']},
          {numero: 2, respuestas: ['c']},
          {numero: 3, respuestas: ['b']}
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-respuestas {

  }
  .jumbotron{
    background-color: #87bfffa4;
    text-align: justify;
    font-weight: bold;
}
</style>
