<template lang="html">
  <div class="page">
    <div id="work-02">

      <div class="top-image" />

      <div class="work">
        <h1>Outline</h1>
        <img src="~assets/img/works/sanei/sanei-introduction.jpg" alt="">
        <p>
          三栄メディシス（株）様のプロダクト「Check me pro X」が2018年度グッドデザイン賞を受賞したことに伴い、リニューアルした商品Webページで使用する映像の制作を担当しました。
        </p>

        <br><br><br>

        <h1>Output</h1>
        <h2>ーーー革新的なプロダクトの魅力を余さず届ける</h2>
        <p>
          メインビジュアルではCGを用い、商品の持つ高級感と機能性を忠実に表現しました。
          ハウツー映像においてはブランドイメージを尊重しつつ、「Check me pro X」が生活の一部として新たなスタンダードとなっているストーリーを演出しました。
        </p>
        <!-- <div class="video"><youtube video-id="rnSsptZaYsM" :style="{width: 'inherit', height: 'inherit'}"/></div> -->
        <img src="~assets/img/works/sanei/sanei-output1.jpg" alt="">
      </div>

    </div>
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'
Vue.use(VueYoutube)

import Footer from '~/components/Footer.vue'

export default {
  components: {
    Footer,
  },
  mounted () { this.$store.state.so() },
  head () { return this.$store.state.getHead('/works') },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';
@import '~/assets/css/work.scss';
.top-image{
  @include image;
  background-image: url(~assets/img/works/sanei/sanei-top.jpg);
}
.work{
  @include work;
}
</style>
