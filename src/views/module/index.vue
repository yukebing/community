<template>
  <div>
    <!--预防-->
    <div class="prevent">
      <h1 class="title">预防</h1>
      <ul class="main">
        <router-link tag="li" :to="{path:'/module/prevent'}" class="main-list">
          <img src="../../assets/img/icon-01.png">
          <p>肺癌</p>
        </router-link>
        <router-link tag="li" :to="{path:'/module/prevent'}" class="main-list">
          <img src="../../assets/img/icon-02.png">
          <p>乳腺癌</p>
        </router-link>
        <router-link tag="li" :to="{path:'/module/prevent'}" class="main-list">
          <img src="../../assets/img/icon-03.png">
          <p>宫颈癌</p>
        </router-link>
        <router-link tag="li" :to="{path:'/module/prevent'}" class="main-list">
          <img src="../../assets/img/icon-04.png">
          <p>结直肠癌</p>
        </router-link>
        <router-link tag="li" :to="{path:'/module/prevent'}" class="main-list">
          <img src="../../assets/img/icon-05.png">
          <p>前列腺癌</p>
        </router-link>
        <router-link tag="li" :to="{path:'/module/prevent'}" class="main-list">
          <img src="../../assets/img/icon-06.png">
          <p>胃癌</p>
        </router-link>
        <router-link tag="li" :to="{path:'/module/prevent'}" class="main-list">
          <img src="../../assets/img/icon-07.png">
          <p>肝癌</p>
        </router-link>
        <router-link tag="li" :to="{path:'/module/prevent'}" class="main-list">
          <img src="../../assets/img/icon-08.png">
          <p>食管癌</p>
        </router-link>
        <router-link tag="li" :to="{path:'/module/prevent'}" class="main-list">
          <img src="../../assets/img/icon-09.png">
          <p>胰腺癌</p>
        </router-link>
      </ul>
    </div>
    <!--早筛-->
    <div class="screen">
      <h1 class="title">早筛</h1>
      <ul class="main">
        <router-link tag="li" :to="{path:'/module/lungCancer'}" class="main-list">
          <img src="../../assets/img/icon-10.png">
          <p>基因早筛</p>
        </router-link>
        <router-link tag="li" :to="{path:'/module/lungCancer'}" class="main-list">
          <img src="../../assets/img/icon-11.png">
          <p>临床早筛</p>
        </router-link>
      </ul>
    </div>
    <!--治疗-->
    <div class="treat">
      <h1 class="title">治疗</h1>
      <ul class="main">
        <router-link tag="li" :to="{path:'/module/information'}" class="main-list">
          <img src="../../assets/img/icon-12.png">
          <p>用药指导</p>
        </router-link>
        <router-link tag="li" :to="{path:'/module/information'}" class="main-list">
          <img src="../../assets/img/icon-13.png">
          <p>动态监测</p>
        </router-link>
      </ul>
    </div>
    <!--其他-->
    <div class="others">
      <h1 class="title">其他</h1>
      <ul class="main">
        <!-- <router-link tag="li" :to="{path:'/module/ask'}" class="main-list">
          <img src="../../assets/img/icon-14.png">
          <p>提问</p>
        </router-link> -->
        <router-link tag="li" :to="{path:'/module/ask'}" class="main-list">
          <img src="../../assets/img/icon-15.png">
          <p>话题</p>
        </router-link>
      </ul>
    </div>
    <div class="under"></div>
  </div>
</template>
<script>
  export default {
    mounted() {

    }
  }
</script>

<style scoped>
  .title {
    font-size: 0.32rem;
    font-weight: normal;
    background: #FFFFFF;
    width: 7.5rem;
    height: 0.88rem;
    text-align: center;
    line-height: 0.88rem;
    color: #3a3a3a;
    letter-spacing: 0;
    font-weight: bold;
  }

  .main {
    background: #e9e9e9;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: center;
    padding-bottom: 0.33rem;
  }

  .main-list {
    width: 2.06rem;
    height: 2.06rem;
    background: #FFFFFF;
    border-radius: 0.08rem;
    overflow: hidden;
    margin:0.33rem 0 0 0.33rem;
  }
  .main-list>img{
    width:0.94rem;
    height:0.94rem;
    border-radius: 50%;
    display: block;
    margin:0 auto;
    margin-top: 0.43rem;
  }
  .main-list>p{
    text-align: center;
    height:0.4rem;
    line-height: 0.4rem;
    margin-top:0.2rem;
  }
  .under{
    width:100%;
    height:0.98rem;
    background: #e9e9router-link tag=li; :to={path:'/module/prevent'}
  }
</stylerouter-link>
