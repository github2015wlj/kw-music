<template>
  <div id="app">
      <v-header></v-header>
      <v-nav></v-nav>
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import Nav from '@/components/common/Nav'
export default {
  name: 'app',
  components: {
    'v-header': Header,
    'v-nav': Nav
  }
}
</script>

<style>
</style>
