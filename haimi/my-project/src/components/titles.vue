<template>
    <div class="titles">
       <h1>{{cont}}</h1>
    </div>
</template>

<script>
export default {
    name: 'titles',
    props:['cont'],
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.titles{
    width: 100%;
    height: 0.4rem;
    background: #fff; 
    position:sticky;
    top:0rem;
    left:0;
    h1 {
        width: 100%;
        text-align: center;
        height: 0.4rem;
        line-height: .4rem;
        font-size: .12rem;
        font-weight: lighter;
    }
    }
</style>