<template lang="html">
  <div class="page">
    <div id="home">

      <section>
        <div class="video-container" data-scroll data-so-scale v-parallax="0.4">
          <transition name="video" appear>
            <video src="/video/test-03.mp4" playsinline muted autoplay loop></video>
          </transition>
        </div>
        <div class="text-container">
          <h1>良いクリエイティブを<br class="md"/>もっと世に広げる</h1>
          <p>Autumnは新鮮な映像体験を京都から発信するクリエイティブチームです</p>
        </div>
      </section>

      <h1 class="heading-works" data-scroll data-so-scale v-parallax="0.4">
        Our works
        <span>実績紹介</span>
      </h1>

      <section>
        <div class="video-container" data-scroll data-so-scale v-parallax="0.6">
          <transition name="video" appear>
            <video src="/video/test-03.mp4" playsinline muted autoplay loop></video>
          </transition>
        </div>
        <router-link to="/works/01">
          <div class="text-container">
            <h2>Total visual creation</h2>
            <h1>今時のお坊は<span class="en">EDM</span></h1>
            <p>Autumnは新鮮な映像体験を京都から発信するクリエイティブチームです</p>
          </div>
          <div class="btn" v-parallax="-0.2">
            <box-icon class="arrow" size="lg" type='solid' name='right-arrow'></box-icon>
          </div>
        </router-link>
      </section>

      <section>
        <div class="video-container" data-scroll data-so-scale v-parallax="0.6">
          <transition name="video" appear>
            <video src="/video/test-03.mp4" playsinline muted autoplay loop></video>
          </transition>
        </div>
        <router-link to="/works/02">
          <div class="text-container">
            <h2>Material design</h2>
            <h1>三栄<span class="en">Creative</span></h1>
            <p>Autumnは新鮮な映像体験を京都から発信するクリエイティブチームです</p>
          </div>
          <div class="btn" v-parallax="-0.2">
            <box-icon class="arrow" size="lg" type='solid' name='right-arrow'></box-icon>
          </div>
        </router-link>
      </section>

      <section>
        <div class="video-container" data-scroll data-so-scale v-parallax="0.6">
          <transition name="video" appear>
            <video src="/video/test-03.mp4" playsinline muted autoplay loop></video>
          </transition>
        </div>
        <router-link to="/works/03">
          <div class="text-container">
            <h2>Visual creation for Branding</h2>
            <h1>新生"てのひらえる"</h1>
            <p>Autumnは新鮮な映像体験を京都から発信するクリエイティブチームです</p>
          </div>
          <div class="btn" v-parallax="-0.2">
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

br.md{
  @include sm{
    display: none;
  }
}

#home{
  section{
    .video-container{
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
      h2{
        font-size: 20px;
        line-height: 2.2;
        font-weight: 600;
        color: $bluegrey;
      }
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
        padding: 0.5em 0;
        line-height: 1.8;
        opacity: 0.5;
      }
    }
    .btn{
      position: relative;
      z-index: 2;
    }
  }

  .heading-works{
    position: relative;
    padding: 2em 0 3em;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    line-height: 1.4;
    z-index: 10;
    span{
      display: block;
      font-size: 0.5em;
      opacity: 0.5;
    }
    @include md{
      font-size: 5vw;
      padding: 1em 0 5em;
    };
  }

  @mixin translate-center($width) {
    transform: translateX(100% * (($width - 100%) / 2) / $width * -1);
  }

  @include sm{
    section:nth-of-type(1){
      padding-top: 30vw;
      padding-bottom: 40vw;
      text-align: center;
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
  };

  section:nth-of-type(n+1){
    padding: 28vw 0;
    .video-container{
      width: 100vw;
      height: 100vw;
    }
    .btn{
      width: 30vw;
      height: 30vw;
      background: $bluegrey;
      border-radius: 50%;
      opacity: 0.6;
      @include flex-center;
      .arrow{
        fill: $white;
      }
    }
  }


  @include sm{
    section:nth-of-type(even){
      text-align: left;
      .video-container{
        video{
          transform: translateX(24vw);
        }
      }
      .btn{
        margin-left: 3vw;
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
  };

  /* ------------------------------------ */

  @include md{
    section:nth-of-type(n){
      padding: 0;
      padding-bottom: 30vw;
      .video-container{
        height: 40vw;
        video{
          width: 79vw;
        }
      }
      .text-container{
        padding: 0 1em;
        font-size: 5vw;
        h2{
          font-size: 0.5em;
        }
        h1{
          font-size: 1em;
        }
        p{
          font-size: 0.5em;
          padding: 0.3em 0;
        }
      }
      .btn{
        width: 20vw;
        height: 20vw;
      }
    }

    $video-translate: 37vw;

    section:nth-of-type(even){
      text-align: right;
      .video-container{
        video{
          transform: translateX($video-translate * -1);
        }
      }
      .btn{
        margin-left: 77vw;
      }
    }

    section:nth-of-type(odd){
      text-align: left;
      .video-container{
        video{
          transform: translateX($video-translate);
        }
      }
      .btn{
        margin-left: 3vw;
      }
    }
  }
}
</style>
