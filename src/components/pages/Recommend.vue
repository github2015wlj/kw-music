<template>
    <div class="recommend" ref="recommend">
        <!--scroll滚动的父容器-->
        <Scroll class="recommend-content" :data="discList" ref="scroll">
            <!--scroll第一个滚动的子容器-->
            <div>
                <div v-if="sliderList.length" :sliderH="sliderList">
                    <slider>
                        <ul class="sw-slides">
                            <li class="sw-slide" v-for="item in sliderList">
                                <a :href="item.linkUrl">
                                    <img class="needsclick" :src="item.picUrl" @load="loadImage">
                                </a>
                            </li>
                        </ul>
                    </slider>
                </div>
                <div class="strip"></div>
                <div class="main">
                    <div class="strip"></div>
                    <div class="program">
                        <h3 class="clearfix">全部歌单</h3>
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="item in discList">
                                    <a href="javascript:;">
                                        <img v-lazy="item.imgurl" />
                                        <p class="programtitle" v-html="item.dissname"></p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="loading-container" v-show="!discList.length">
                            <loading></loading>
                        </div>
                    </div>
                </div>
            </div>
        </Scroll>
    </div>
</template>

<script>
import Scroll from '../../base/scroll/scroll'
import Slider from '../../base/slider/slider.vue'
import Loading from '../../base/loading/loading'
import { getRecommend, getDiscList } from '../../api/recommend.js'
import { ERR_OK } from '../../api/config.js'
export default {
    name: 'hello',
    data() {
        return {
            sliderList: [],
            discList: []
        }
    },
    components: {
        Slider,
        Scroll,
        Loading
    },
    mounted() {

    },
    created() {
        this._getSwiperData()
        setTimeout(()=>{
             this._getDiscList()
        },1000)  
    },
    methods: {
        _getSwiperData: function() {
            getRecommend().then((res) => {
                if (res.code === ERR_OK) {
                    this.sliderList = res.data.slider;
                }
            })
        },
        //获取歌单
        _getDiscList() {
            getDiscList().then((res) => {
                if (res.code === ERR_OK) {
                    this.discList = res.data.list
                }
            })
        },
        //只调取一次，如果banner有一张图片撑开了，slider的高度就会撑开
        loadImage() {
            if (!this.checkloaded) {
                this.checkloaded = true
                this.$refs.scroll.refresh()
            }
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.recommend {
    margin-top: 20%;
    height: 100%;
    overflow: hidden;
}
.program{
    position: relative;
}
.newsong,
.gedan,
.program,
.mmhost,
.hotmv {
    padding: 0 .2rem;
    color: #333;
}

.main h3 {
    font-size: .3rem;
    height: .88rem;
    line-height: .88rem;
    font-weight: bold;
}

.songmsg {
    display: block;
    position: relative;
}

.newtip {
    position: absolute;
    left: 0;
    top: 0;
    width: .5rem;
    height: .5rem;
    background: url(https://image.kuwo.cn/mpage/html5/2016/newtip.png) no-repeat;
    background-size: 100%;
}

.songmsgpic {
    width: 100%;
    height: 3rem;
}

.main img {
    width: 100%;
    height: 100%;
}

.other {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: .52rem;
    font-size: .2rem;
}

.listen {
    position: relative;
    width: 30%;
    height: 100%;
    line-height: .52rem;
    background: url(https://image.kuwo.cn/mpage/html5/2016/earphone.png) left center no-repeat;
    background-size: 10%;
    margin-left: .2rem;
}

.playbtn {
    width: .4rem;
    height: .4rem;
    background: url(https://image.kuwo.cn/mpage/html5/2016/playbtn1.png) no-repeat;
    background-size: 100%;
    margin-right: .12rem;
}

.listennum {
    position: absolute;
    left: 0;
    top: 0;
    -webkit-transform: translate(0.24rem, 0);
    transform: translate(0.24rem, 0);
}

.newsong p {
    font-size: .26rem;
    text-align: center;
    height: .6rem;
    line-height: .6rem;
}



/*歌单推荐*/

.program,
.mmhost,
.hotmv {
    padding: 0 .2rem;
    color: #333;
}

.swiper-container {
    width: 100%;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.swiper-slide,
.swiper-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
}

.swiper-slide {
    -webkit-flex-shrink: 0;
    -ms-flex: 0 0 auto;
    flex-shrink: 0;
    color: #fff;
    float: left;
    width: 30%;
    margin-right: 5%;
    margin-bottom: 5%;
}

.swiper-slide:nth-child(3n+0) {
    margin-right: 0;
}

.swiper-slide a {
    display: block;
    width: 100%;
    height: 100%;
}

.swiper-slide p {
    width: 100%;
    color: #333;
    text-align: left;
    font-size: .24rem;
    line-height: .32rem;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    padding-top: .06rem;
}


/*loading*/

.loading-container {
    position: relative ;
    width: 100% ;
    height: 5rem;
    text-align: center;
    padding-top: 50%;
}
</style>