// every component must be pass input typte and placeholder

<template>
  <div>
    
      <div class="form-group">
        <input
          :value="value"
          @keyup.enter="$emit('enter')"
          @input="$emit('input',$event.target.value)"
          :type="type"
          :placeholder="placeholder"
          class="form-control"
        />
      </div>
    
  </div>
</template>
<script>
export default {
  //must be pass input type and placeholder
  props: {
    value :String,
     type : String, 
     placeholder : String
     },
  methods:{
    
  }
};
</script>