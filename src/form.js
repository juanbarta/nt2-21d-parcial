import Vue from 'vue'
import VueForm from 'vue-form'

var opt = {
    validators: {
        'sin-espacios' : function(value) {
            return !value.includes(' ');
        },
    }
}

Vue.use(VueForm,opt)