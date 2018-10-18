<template lang="html">
  <div class="page">
    <div id="work-01">
      <div class="top-image" />
      <!-- <Heading
      title="Visual creation for Branding"
      :subtitle="['今、新しく魅せる。', 'てのひらえる。']"
      message="想像性と実用性は相入れないという感覚は、現実に、クリエイティブなアイデアを嫌うという微妙なバイアスを人の心にかけることがあります。"
      /> -->

      <div class="work">
        <h1>Visual creation for Branding</h1>
        <h2>機は熟して、新しく魅せる。<br>てのひらえる。</h2>
        <p>想像性と実用性は相入れないという感覚は、現実に、クリエイティブなアイデアを嫌うという微妙なバイアスを人の心にかけることがあります。</p>
        <p>想像性と実用性は相入れないという感覚は、現実に、クリエイティブなアイデアを嫌うという微妙なバイアスを人の心にかけることがあります。</p>
        <img src="~assets/img/works.jpg" alt="">
        <br>
        <br>
        <h1>Creation Process</h1>
        <p>想像性と実用性は相入れないという感覚は、現実に、クリエイティブなアイデアを嫌うという微妙なバイアスを人の心にかけることがあります。</p>
        <h2>Visual creation for Branding</h2>
        <img src="~assets/img/contact.jpg" alt="">
        <!-- <video src="https://www.youtube.com/watch?v=rnSsptZaYsM" /> -->
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
import Heading from '~/components/Heading.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Heading,
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
  background-image: url(~assets/img/about.jpg);
}
.work{
  @include work;
}
</style>
