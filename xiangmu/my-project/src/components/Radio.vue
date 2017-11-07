<template>
<div class="Radio">
        <input type="radio" :id="ids" :name="name" :value="value" @change="up(value)" v-if="checked && checked == value" checked=''>
         <input type="radio" :id="ids" :name="name" :value="value" @change="up(value)" v-else> 
        <label :for="ids">{{value}}</label>
</div>
</template>
<script>
export default {
  name: 'Radio',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props:['name','value','checked'],
  data () {
    return {
      ids: +new Date() + Math.random()
    }
  },
  methods: {
    up (val) {
        this.$emit('change',val)
    }
  },
  watch: {
    'checked': function (val,val2) {
       if( val == '' ){
            $(this.$el).find('input').prop('checked',false)
        }
    }
  }
}
</script>
<style scoped lang="less">
.Radio{
  width: 0.6rem;
  height: 0.2rem;
  float:left;
  margin-left:.05rem;
  margin-bottom:.1rem;
  label{
      display:inline-block; 
      width:.6rem;
      height:.2rem;
      background:skyblue;
  }
  input{
      display:none;
      float:left;
      &:checked + label {
          border:1px solid red;
      }
  }
  }

</style>