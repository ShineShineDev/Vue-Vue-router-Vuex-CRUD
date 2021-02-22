<template>
  <div>
    <uL class="list-group" v-for="(item,index) in lists" :key="index">
      <li @mouseleave="item.isEdit = false" class="list-group-item bg-secondary text-dark rounded-0 mt-1 p-1">
        <div v-if="!item.isEdit">
         <span class="text-white pl-2"> id : {{item.id}} | name :   {{item.name}} </span>

          <button
            @click="$emit('del',item.id)"
            class="btn btn-sm float-right btn-secondary box pl-3 pr-3"
          >Delete</button>
          <button
            @click="item.isEdit = true;update_value = item.name"
            class="btn btn-sm float-right btn-secondary box pl-3 pr-3 mr-2"
          >Edit</button>
        </div>
        <div v-else>
         <Form v-model="update_value" type='text' :placeholder='item.name'></Form>
          <button
            @click="item.isEdit = false"
            class="btn btn-sm float-right btn-info text-white border box pl-3 pr-3"
          >Cancel</button>
          <button
            @click="$emit('update',{id: item.id,name : update_value});item.isEdit = false"
            class="btn btn-sm float-right btn-info text-white border box pl-3 pr-3 mr-2"
          >Update</button>
        
        </div>
      </li>
    </uL>
  </div>
</template>

<script>
import Form from './Form'
export default {
  props: ["lists"],
  data : function(){
    return {
      update_value : ''
    }
  },
  components : {
    Form
  },
  methods: {
    
  }

};
</script>

<style>
</style>