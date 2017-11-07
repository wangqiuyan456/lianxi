<template>
    <div class="filmList">
        <div class="list">
            <h1>电影作品</h1>
            <dl v-for="(items,index) of movieList" :key="index">
                <dt><img :src="items.image" alt=""></dt>
                <dd>
                    <h3>{{items.name}}</h3>
                    <p>演员</p>
                    <p>2018-05-25 上映</p>
                    <p></p>
                </dd>
            </dl>
        </div>
    </div>
</template>

<script>
export default {
    name: 'filmList',
    data() {
        return {
            movieList: [],
            page: 0,
            pageSize: 10
        }
    },
    methods: {
        getMovieList(page, pageSize) {
            //共享请求数据
            this.$store.dispatch('home/getMovieList', {
                cityId: 12345,
                page: this.page,
                pageSize: this.pageSize,
                type: 'home'
            }).then(
                (data) => {
                    console.log(data)
                    this.movieList = data
                },
                () => {
                }
                )
        }
    },
    created() {
        this.getMovieList()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.filmList {
    overflow: hidden;
    .list {
        width: 100%;
        text-align: left;
        margin-left: .1rem;
        h1 {
            width: 100%;
            height: 0.5rem;
            line-height: .5rem;
            font-size: .17rem;
        }
        dl {
            width: 100%;
            height: 0.95rem;
            margin-top: .1rem;
            border-bottom: 1px solid #eee;
            display: flex;
            dt {
                width: 0.6rem;
                height: 0.85rem;
                img {
                    width: 0.6rem;
                    height: 0.85rem;
                }
            }
            dd {
                flex: 1;
                margin-left: .1rem;
                h3 {
                    width: auto;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    color: #333;
                    font-weight: normal;
                    font-size: .17rem;
                }
                p {
                    width: auto;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-size: .12rem;
                    color: gray;
                    padding: .02rem 0;
                }
            }
        }
    }
}
</style>