<template lang="html">
  <div class="page">
    <div id="home">

      <section>
        <!-- <div data-scroll data-so-scale> -->
        <div class="video-container" data-scroll data-so-scale v-parallax="0.4">
          <transition name="video" appear>
            <video src="/video/test-03.mp4" playsinline muted autoplay loop></video>
          </transition>
        </div>
        <!-- <div v-parallax="0.2" class="text-container"> -->
        <div class="text-container">
          <h1>良いクリエイティブワークを世に広げる</h1>
          <p>Autumnは新鮮な映像体験を京都から発信するクリエイティブチームです。</p>
        </div>
      </section>

      <section>
        <router-link to="/works/01">
          <div class="video-container" data-scroll data-so-scale v-parallax="0.6">
            <transition name="video" appear>
              <video src="/video/test-03.mp4" playsinline muted autoplay loop></video>
            </transition>
          </div>
          <div class="text-container">
            <h1>エルちゃん<span class="en">Project.</span></h1>
            <p>Autumnは新鮮な映像体験を京都から発信するクリエイティブチームです。</p>
          </div>
          <div class="btn" v-parallax="-0.3">
            <box-icon class="arrow" size="lg" type='solid' name='right-arrow'></box-icon>
          </div>
        </router-link>
      </section>

      <section>
        <router-link to="/works/02">
          <div class="video-container" data-scroll data-so-scale v-parallax="0.6">
            <transition name="video" appear>
              <video src="/video/test-03.mp4" playsinline muted autoplay loop></video>
            </transition>
          </div>
          <div class="text-container">
            <h1>知恩院大爆発ッ</h1>
            <p>Autumnは新鮮な映像体験を京都から発信するクリエイティブチームです。</p>
          </div>
          <div class="btn" v-parallax="-0.3">
            <box-icon class="arrow" size="lg" type='solid' name='right-arrow'></box-icon>
          </div>
        </router-link>
      </section>

      <section>
        <router-link to="/works/03">
          <div class="video-container" data-scroll data-so-scale v-parallax="0.6">
            <transition name="video" appear>
              <video src="/video/test-03.mp4" playsinline muted autoplay loop></video>
            </transition>
          </div>
          <div class="text-container">
            <h1>三栄<span class="en">POWERRR!!</span></h1>
            <p>Autumnは新鮮な映像体験を京都から発信するクリエイティブチームです。</p>
          </div>
          <div class="btn" v-parallax="-0.3">
            <box-icon class="arrow" size="lg" type='solid' name='right-arrow'></box-icon>
          </div>
        </router-link>
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
  section{
    padding: 28vw 0;
    text-align: left;
    .video-container{
      width: 100vw;
      height: 100vw;
      video{
        position: relative;
        z-index: 1;
        width: 100%;
      }
    }
    .text-container{
      position: relative;
      padding: 25vw 8vw 0;
      z-index: 3;
      h1{
        font-size: 33px;
        line-height: 1.5;
        font-weight: 900;
        color: $black;
        .en{
          font-weight: 700;
          font-size: 1.1em;
        }
      }
      p{
        font-size: 16px;
        padding: 1em 0;
        line-height: 1.8;
        opacity: 0.5;
      }
    }
    .btn{
      position: relative;
      z-index: 2;
      margin-left: 3vw;
      width: 30vw;
      height: 30vw;
      background: $grey-2;
      border-radius: 50%;
      box-shadow: 0 0 1px 0 $grey-5;
      @include flex-center;
      .arrow{
        fill: $white;
        opacity: 0.7;
      }
    }
  }

  @mixin translate-center($width) {
    transform: translateX(100% * (($width - 100%) / 2) / $width * -1);
  }

  section:nth-of-type(1){
    padding-top: 30vw;
    padding-bottom: 40vw;
    .video-container{
      height: 130vw;
      video{
        $width: 130%;
        width: $width;
        @include translate-center($width);
      }
    }
    .text-container{
      padding-top: 25vw;
    }
  }
  section:nth-of-type(even){
    text-align: left;
    .video-container{
      video{
        transform: translateX(24vw);
      }
    }
  }
  section:nth-of-type(odd):not(:first-child){
    text-align: right;
    .video-container{
      video{
        transform: translateX(-24vw);
      }
    }
    .btn{
      margin-left: 67vw;
    }
  }
}
</style>
