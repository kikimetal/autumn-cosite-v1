<template lang="html">
  <div class="page">
    <div id="works">
      <video src="/movie/test-03.mp4" playsinline muted autoplay loop></video>
    </div>
    <Footer />
  </div>
</template>

<script>
import ComingSoon from '~/components/ComingSoon.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    ComingSoon,
    Footer,
  },
  mounted () { this.$store.state.so() },
  head () { return this.$store.state.getHead() },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';
#company{
  video{
    width: 100%;
  }

}
</style>
