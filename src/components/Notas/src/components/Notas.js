
export default {
  name: 'src-components-notas',
  components: {},
  props: [],
  data () {
    return {
      formData: this.getInicialData(),
      formState : {},
      nombreApellidoMinLength : 3,
      nombreApellidoMaxLength : 15,
      notaMin : 0,
      notaMax : 10,
      alumnos : [],
    }
  },
  
  mounted () {

  },
  methods: {
    
    getInicialData(){
      return {
        nombre: '',
        apellido: '',
        nota: '',
      }
    },
    getColor(nota) {
      let color;
          if (nota >= 0 && nota <= 3){
            color = 'red';
          } 
          if (nota >= 4 && nota <= 6){
            color = 'yellow';
          }  
          if (nota >= 7 && nota <= 10){
            color = 'green';
          }  
          return `color: ${color}`;
    },
    enviar(){
      this.alumnos.push({...this.formData})
      this.formData = this.getInicialData()
      this.formState._reset()

    }
  },
  computed: {
    calcularPromedio() {
      let total = 0;
      this.alumnos.forEach(alumno =>{
        total += alumno.nota;
      });
      return (total / this.alumnos.length)
    } 
  }
}


