<template lang="html">
  <div class="page">
    <div id="work-01">

      <div class="top-image" />

      <div class="work">
        <h1>Visual creation for Branding</h1>
        <h2>機は熟して、新しく魅せる。<br>てのひらえる。</h2>
        <p>想像性と実用性は相入れないという感覚は、現実に、クリエイティブなアイデアを嫌うという微妙なバイアスを人の心にかけることがあります。</p>
        <p>想像性と実用性は相入れないという感覚は、現実に、クリエイティブなアイデアを嫌うという微妙なバイアスを人の心にかけることがあります。</p>
        <img src="~assets/img/works.jpg" alt="">
        <br>
        <br>
        <h1>Creation process</h1>
        <p>想像性と実用性は相入れないという感覚は、現実に、クリエイティブなアイデアを嫌うという微妙なバイアスを人の心にかけることがあります。</p>
        <h2>Visual creation for Branding</h2>
        <div class="video"><youtube video-id="rnSsptZaYsM" :style="{width: 'inherit', height: 'inherit'}"/></div>
        <h2>Visual creation for Branding</h2>
        <img src="~assets/img/about.jpg" alt="">
        <h1>Impact</h1>
        <p>想像性と実用性は相入れないという感覚は、現実に、クリエイティブなアイデアを嫌うという微妙なバイアスを人の心にかけることがあります。</p>
        <img src="~assets/img/contact.jpg" alt="">
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
  background-image: url(~assets/img/works.jpg);
}
.work{
  @include work;
}
</style>
