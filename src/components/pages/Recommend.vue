<template>
  <div class="recommend" ref="recommend">
    <div class="recommend-content">
      <div v-if="sliderList.length" :sliderH="sliderList">
        <slider>
          <ul class="sw-slides">
            <li class="sw-slide" v-for="item in sliderList">
              <a :href="item.linkUrl">
                  <img class="needsclick"  :src="item.picUrl">
              </a>
            </li>
          </ul>
        </slider>
      </div>
      <div class="strip"></div>
      <div class="main">
          <div class="newsong">
              <h3 class="clearfix">每日新歌</h3>
              <div class="songtuijian">
                  <a class="songmsg" href="/newh5/playlist/content?pid=1082685104">
                      <i class="newtip"></i>
                      <div class="songmsgpic">
                          <img data-src="http://img1.kwcdn.kuwo.cn/star/upload/10/10/1466668022746_.jpg" src="http://img1.kwcdn.kuwo.cn/star/upload/10/10/1466668022746_.jpg">
                      </div>
                      <div class="other clearfix">
                          <span class="listen fl"><span class="listennum">7225</span></span>
                          <span class="playbtn fr"></span>
                      </div>
                  </a>
                  <p>华语新歌推荐</p>
              </div>
          </div>
          <div class="strip"></div>
          <div class="program">
              <h3 class="clearfix">全部歌单</h3>
              <div class="swiper-container">
                  <div class="swiper-wrapper">
                      <div class="swiper-slide" v-for="item in discList">
                          <a href="javascript:;">
                              <img  :src="item.imgurl" />
                              <p class="programtitle" v-html="item.dissname"></p>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Slider from '../../base/slider/slider.vue'
  import { getRecommend,getDiscList } from '../../api/recommend.js'
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
      Slider
    },
    mounted() {
      
    },
    created() {
      this._getSwiperData()
      this._getDiscList()
    },
    methods: {
      _getSwiperData: function () {
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
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .recommend {
    margin-top: 20%;
  }
  .newsong, .gedan, .program, .mmhost, .hotmv {
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
    -webkit-transform: translate(0.24rem,0);
    transform: translate(0.24rem,0);
}
.newsong p {
    font-size: .26rem;
    text-align: center;
    height: .6rem;
    line-height: .6rem;
}
/*歌单推荐*/
.program, .mmhost, .hotmv {
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
.swiper-slide, .swiper-wrapper {
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
    width:30%;
    margin-right: 5%;
    margin-bottom: 5%;
}
.swiper-slide:nth-child(3n+0){
  margin-right:0;
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
    word-break:break-all;
    display:-webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
    overflow:hidden;
    padding-top: .06rem;
}
</style>