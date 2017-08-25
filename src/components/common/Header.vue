<template>
    <!-- 网站头部通用html -->
    <header class="clearfix header" style="transition: all 0.3s linear; transform: translateY(0px);">
        <input type="hidden" id="REQ_ID" name="reqId" value="f244a1bbX2eb3X4690X9705Xb9ba736cac58">
        <input type="hidden" id="PROFILE_ID" name="profileId" value="site">
        <div class="search fl">
            <a href="http://m.kuwo.cn/?key=gohotword&amp;bdfrom=newh5"><span class="searchbtn"></span></a>
        </div>
        <div class="logo fl">
            <a onclick="downapk('index');">
                <span class="logopic"></span>
            </a>
        </div>
        <div class="download fr">
            <a class="downapp" onclick="downapk('index');">
                下载APP
            </a>
        </div>
    </header>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
