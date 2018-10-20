<template lang="html">
  <div class="page">
    <div id="work-01">

      <div class="top-image" />

      <div class="work">
        <h1>Outline</h1>
        <p>
          現代のお寺は多くの課題を抱えており、
          それらの根本にある要因として「若い世代のお寺離れ」「日常における接点の少なさ」が挙げられます。
        </p>
        <p>
          今回ターゲットとして設定した「若者たち」は、お寺との接点すら得られないまま、イメージや先入観のみでお寺に来る機会を失っています。
          わたしたちAutumnはクライアントとの関わりの中でお坊さんの「親しみやすさ」を発見し、単に奇を衒うのではなく最も効果的に彼らの魅力を伝える方法を企画しました。
        </p>
        <img src="~assets/img/works/chi/chionin-introduction.jpg" alt="">

        <br><br><br>

        <h1>Output</h1>
        <h2>ーーー「堅いお寺」から「身近なお寺」へ</h2>
        <p>
          以前よりクライアント周りで使用されていた「ナムい」というバズワードを前面に押し出し、ポスター・フライヤー及びPR映像の制作を行いました。
          ポスターにおいては「フェス」をモチーフに高揚感を演出。
          PR映像では3本の動画によってさまざまな側面から「お坊さんの素顔を魅せる」ことに注力しました。
        </p>
        <!-- https://www.youtube.com/watch?v=1zAm1YBjSME&feature=youtu.be -->
        <div class="video"><youtube video-id="1zAm1YBjSME" :style="{width: 'inherit', height: 'inherit'}"/></div>
        <img src="~assets/img/works/chi/chionin-output1.jpg" alt="">
        <img src="~assets/img/works/chi/chionin-output2.jpg" alt="">
        <img src="~assets/img/works/chi/chionin-output3.jpg" alt="">
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
  background-image: url(~assets/img/works/chi/chionin-top.jpg);
}
.work{
  @include work;
}
</style>
