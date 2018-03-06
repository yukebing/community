<template>
  <div>
    <div class="container" style="padding-bottom:0.5rem;">
        <dynamic></dynamic>
        <!-- 页面渲染的地方 -->
        <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import dynamic from 'components/dynamicHeader.vue'
  export default {
    components: {
      dynamic
    }
  }
</script>