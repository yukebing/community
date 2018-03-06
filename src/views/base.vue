<template>
  <div>
    <!--<headers></headers>-->
    <div class="container">
      <!-- 页面渲染的地方 -->
      <router-view></router-view>
    </div>
    <footers></footers>
  </div>
</template>
<script>
  import headers from 'components/header.vue'
  import footers from 'components/footer.vue'
  export default {
    components: {
      headers, footers
    }
  }
</script>
<style>
.container{width:100%;margin:0 auto;padding: 0 0;background: #fff}
</style>

