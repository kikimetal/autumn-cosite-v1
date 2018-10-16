<template>
  <div id="default">
    <!-- <div id="bg"><span>💙CARVANCL</span></div> -->
    <div id="bg">
      <!-- <img class="co-name" src="~/assets/img/nav/co-name.svg" alt="株式会社カーバンクルのロゴマーク"> -->
    </div>
    <Nav/>
    <nuxt/>
    <script defer src="https://www.youtube.com/iframe_api"></script>
  </div>
</template>

<script>
import Vue from 'vue'
import VueParallaxJs from 'vue-parallax-js'
Vue.use(VueParallaxJs, { className: 'v-parallax' })

import 'boxicons'

import Nav from '~/components/Nav.vue'

export default{
  components: {
    Nav,
  },
  created () {
    window.addEventListener('scroll', () => {
      this.$store.commit('setIsScrollTop')
    })

    ;(function(d) {
      var config = {
        kitId: 'kpq1waw',
        scriptTimeout: 3000,
        async: true
      },
      h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
    })(document);
  }
}
</script>

<style lang="scss">
@import '~/assets/css/myset.scss';

#default{
  overflow: hidden;
  .page > div{ // e.g. #home
    overflow: hidden;
  }
}

#bg{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 2rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: 900;
  background: $grey-1;
  z-index: -99;
}
</style>
