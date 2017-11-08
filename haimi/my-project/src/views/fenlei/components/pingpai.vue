<template>
    <div class="pingpai">
        <ul>
            <li>
                <img src="//img.haimi.com/Ft2BQcB9zAZHygf4zu2mdKziH0lN" alt="">
                <p>日默瓦</p>
                <p>复古之名万箱朝拜</p>
            </li>
            <li>
                <img src="//img.haimi.com/Fo_3KRGu8XdoqcQ6DbPIJ33aYN3I" alt="">
                <p>膳魔师</p>
                <p>百年品牌源自德国</p>
            </li>
            <li>
                <img src="//img.haimi.com/Fi35P_akILkjZbVQPEv9EV2IIiZm" alt="">
                <p>猫王</p>
                <p>胆机之父匠心之作</p>
            </li>
            <li>
                <img src="//img.haimi.com/FofqVnbyUfMblFYalgoLBGfmFasN" alt="">
                <p>日默瓦</p>
                <p>复古之名万箱朝拜</p>
            </li>
            <li>
                <img src="//img.haimi.com/FscqPdPEAwBojaXc36dx2ps7HD2c" alt="">
                <p>膳魔师</p>
                <p>百年品牌源自德国</p>
            </li>
            <li>
                <img src="//img.haimi.com/FgL9AMUlqLrQSbSJuUnzq8wyq4BE" alt="">
                <p>日默瓦</p>
                <p>复古之名万箱朝拜</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'pingpai',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    methods: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.pingpai {
    width: 100%;
    ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        li {
            width: 33%;
            height: 1.55rem;
            img {
                width: 1.06rem;
                height: 1.06rem;
            }
            p {
                text-align: center;
                width: 80%;
                margin-left: 10%;
                padding: .01rem 0;
                font-size: .12rem;
                &:nth-of-type(2) {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    color: #999;
                    font-size: .12rem;
                }
            }
        }
    }
}
</style>