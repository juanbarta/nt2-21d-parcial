<template>
  <section class="src-components-navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

      <router-link to="/">
        <a class="navbar-brand" href="#">Inicio</a>
      </router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        
        <div class="navbar-nav">

        <router-link to="/notas" exact>
          <a class="nav-link" href="#">Notas</a>
        </router-link>
        <router-link to="/respuestas" exact>
          <a class="nav-link" href="#">Respuestas</a>
        </router-link>

        </div>
        
      </div>
    </nav>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-navbar {

  }

  nav .router-link-exact-active {
   text-decoration-line: underline;
    }
</style>
