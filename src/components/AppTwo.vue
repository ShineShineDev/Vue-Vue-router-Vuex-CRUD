<template>
  <div>
    <Form v-model="new_list" type='text' @enter='add' placeholder='new Value'></Form>
    
    <button  @click='add' class="btn btn-dark btn-sm box"> + add</button>
      <button @click='delAll' class="btn btn-dark  text-info btn-sm float-right mt-0">Clear all</button>
    <List :lists='getModuleTwoArr' @del="del" @update='update' class="mt-2"></List>
  </div>
</template>
<script>
import {mapGetters,mapActions} from "vuex";

import Form from './Form'
import List from './List'


export default {
   data : function(){
     return {
       new_list : ''
     }
   },
  computed: {
    ...mapGetters(['getModuleTwoArr'])
  },
  methods: {
    ...mapActions(['add','del','update','delAll']),
    
    add(){
      console.log("add method from apptwo parent component working ...");
        var id = Math.random().toString().substr(2,6);
        var name = this.new_list
        var model  = {
        id : id,
        name : name,
        isEdit : false
      }
      this.$store.dispatch('addAppTwoState',model);
      this.new_list = " "
    },
    del(event){
      console.log("del method from apptwo parent component working ...");
      this.$store.dispatch('delAppTwoState',event)
    },
    update(event){
      console.log("update method from apptwo parent component working ...");
      this.$store.dispatch('updateAPPTWOSTATE',event)
    },
    delAll(){
      this.$store.dispatch('delAllAppTwoState')
    }
  },
  components: {
    Form,
    List
  },

};
</script>
