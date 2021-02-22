<template>
  <div>
    <Form v-model="input_value" @enter='add' type="text" placeholder='Enter New Value'></Form>
    <button @click="add()" class="btn btn-dark btn-sm box mt-0">+ Add</button>
    <button @click='delAll' class="btn btn-dark  text-info btn-sm float-right mt-0">Clear all</button>
    <List @update="update" @del="del" :lists="getModuleOneArr" class="mt-2"></List>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Form from "./Form";
import List from "./List";
export default {
  data: function() {
    return {
      input_value: "",
    };
  },
  created(){
    console.log("to initilization localstorage, created hook dispatch an action from appone parent component ...");
    this.$store.dispatch('initLocalStorage')
  },
  computed: {
    ...mapGetters(["getModuleOneArr"])
  },
  methods: {
    ...mapActions(["add", "del", "update",'delAll']),
    add() {
      console.log("add method from appone parent component working ...");
      //unique id
      var id = Math.random()
        .toString()
        .substr(2, 6);
      var name = this.input_value;
      var newValue = {
        id: id,
        name: name,
        isEdit: false
      };
      this.$store.dispatch("addAppOneState", newValue);
      this.input_value = "";
    },
    del(event) {
      console.log("del method from appone parent component working ...");
      this.$store.dispatch("delAppOneState", event);
    },
    update(event) {
      console.log("update method from appone parent component working...");
      this.$store.dispatch("updateAppOneState", event);
    },
    delAll(){
      this.$store.dispatch('delAllAppOneState')
    }
  },
  components: {
    Form,
    List
  }
};
</script>


<style >
.box {
  box-shadow: 2px 1px 1px rgba(255, 255, 255, 0.2),
    0px 5px 40px rgba(4, 0, 0, 0.71);
}
</style>
