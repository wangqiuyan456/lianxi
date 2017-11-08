<template>
    <div class="list">
        <titles :cont="cont"></titles>
        <ul>
            <li v-for="(items,index) of movieList" :key="index" @click="xiangqing()">
                <img :src="items.image" alt="">
                <div class="info">
                    <p>{{items.yue+items.name}}</p>
                    <p>{{items.price}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import titles from '@/components/titles'
export default {
    name: 'list',
    props:['movieList'],
    components: {
        titles
    },
    data() {
        return {
            cont:'大家都在看'
        }
    },
    methods : {
        xiangqing () {
            window.location.href="/xiangqing"
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.list {
    width: 100%;
    ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
            width: 49%;
            height: 2.16rem;
            img {
                height: 1.56rem;
            }
            p {
                width: 100%;
                height: 0.2rem;
                font-size: .15rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                &:nth-of-type(2){
                    box-sizing:border-box;
                    padding-left: .1rem;
                    margin-top: .05rem;
                }
            }
            
        }
    }
}
</style>