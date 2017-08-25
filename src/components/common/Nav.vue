<template>
        <nav class="nav clearfix" id="nav" style="position: fixed; top: 0px; z-index: 10; transition: all 0.3s linear; transform: translateY(0px);">
                <span class="navitem on" onclick="jumpPage('/newh5/index/index');">推荐</span>
                <span class="navitem " onclick="jumpPage('/newh5/bang/index');">排行</span>
                <span class="navitem " onclick="jumpPage('/newh5/category/index');">分类</span>
                <span class="navitem " onclick="jumpPage('/newh5/artist/artistCategory');">歌手</span>
                <span class="navitem " onclick="jumpPage('/newh5/mv/index');">MV</span>
            </nav>
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
    