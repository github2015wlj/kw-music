<template>
  <div class="recommend" ref="recommend">
    <div>
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
      </div>
    </div>
  </div>
</template>

<script>
  import Slider from '../../base/slider/slider.vue'
  import { getRecommend } from '../../api/recommend.js'
  import { ERR_OK } from '../../api/config.js'
  export default {
    name: 'hello',
    data() {
      return {
        sliderList: []
      }
    },
    components: {
      Slider
    },
    mounted() {
      
    },
    created() {
      this._getSwiperData()
    },
    methods: {
      _getSwiperData: function () {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            console.log(res.data.slider);
            this.sliderList = res.data.slider;
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
</style>