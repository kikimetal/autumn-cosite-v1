<template lang="html">
  <div class="page">
    <div id="home">

      <section>
        <video class="movie" src="/movie/test-03.mp4" playsinline muted autoplay loop></video>
        <h1>Autumn Inc.</h1>
        <p>より良いクリエイティブワークを<br/>世に広げる映像製作チーム</p>
      </section>

      <section>
        <video class="movie" src="/movie/test-03.mp4" playsinline muted autoplay loop></video>
        <h1>Autumn Inc.</h1>
        <p>より良いクリエイティブワークを<br/>世に広げる映像製作チーム</p>
      </section>

      <section>
        <video class="movie" src="/movie/test-03.mp4" playsinline muted autoplay loop></video>
        <h1>Autumn Inc.</h1>
        <p>より良いクリエイティブワークを<br/>世に広げる映像製作チーム</p>
      </section>

      <section>
        <video class="movie" src="/movie/test-03.mp4" playsinline muted autoplay loop></video>
        <h1>Autumn Inc.</h1>
        <p>より良いクリエイティブワークを<br/>世に広げる映像製作チーム</p>
      </section>

    </div>
    <Footer />

  </div>
</template>

<script>
import ComingSoon from '~/components/ComingSoon.vue'
import Movie from '~/components/Movie.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    ComingSoon,
    Movie,
    Footer,
  },
  mounted () { this.$store.state.so() },
  head () { return this.$store.state.getHead() },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';
#home{
  .movie{
    width: 100%;
  }
  section{
    padding: 150px 0;
    text-align: center;
    h1{
      padding: 1em 0 0.3em;
      font-size: 26px;
      line-height: 1;
      font-weight: 700;
    }
    p{
      padding: 0.5em 1em;
      line-height: 1.7;
      opacity: 0.5;
    }
  }
}
</style>
