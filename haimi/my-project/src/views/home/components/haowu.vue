<template>
    <div class="haowu">
        <titles :cont="cont"></titles>
        <ul class="box">
            <li><img src="//img.haimi.com/Frz_GPy8Jw6s9k1BD-7oMlg4aw-6" alt=""></li>
            <li><img src="//img.haimi.com/FvIiZyy9v7fJng1tY-11tHXRD7ZU" alt=""></li>
            <li><img src="//img.haimi.com/FiYaccwV02QtUfFVTHuJ3L8sWKdu" alt=""></li>
            <li><img src="//img.haimi.com/Fgzoc-je_PRcfqoB-9CMCQVTRQpt" alt=""></li>
            <li><img src="//img.haimi.com/FgdGtaLRwCovhYwy9_KCjfZmOzMx" alt=""></li>
            <li><img src="//img.haimi.com/Fq9vYBCjORF0qJZQl8jHhOed3KnC" alt=""></li>
            <li><img src="//img.haimi.com/FnMGXi5SqpNGwunxy9KQAzG4fD1o" alt=""></li>
            <li><img src="//img.haimi.com/FsRbXjc3acEQEv-GPgisegGLgquG" alt=""></li>
        </ul>
    </div>
</template>

<script>
import titles from '@/components/titles'
export default {
    name: 'haowu',
    data() {
        return {
            cont: '推荐好物'
        }
    },
    components: {
        titles
    },
    methods: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.haowu {
    width: 100%;
    .box {
        width: 100%;
        display: flex;
        flex-wrap:wrap;
        li {
            width: 50%;
            img {
                width: 100%;
                height: 1.02rem;
            }
        }
    }
}
</style>