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
          <p>Autumnは新鮮な映像体験を京都から発信するクリエイティブチームです。</p>
        </div>
      </section>

      <h1 class="heading-works" data-scroll data-so-scale v-parallax="0.4">
        Our works
        <span>あっと驚くヴィジュアルは専門知識だけでなく<br class="md"/>思考の多様性から生まれます</span>
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
            <h1>てのひらえるの初映像作品</h1>
            <p>只者ではないアイドルとしての信念や情熱の表現</p>
          </div>
          <div class="btn" v-parallax="-0.2">
            <box-icon class="arrow" size="lg" type='solid' name='right-arrow'></box-icon>
          </div>
        </router-link>
      </section>

      <div class="link-to about">
        <div data-scroll>
          <div class="img" />
          <div class="shadow" />
          <div class="heading">
            <h1>About Us</h1>
            <p>私たちは個々を尊重しあう<br/>クリエイター集団です</p>
          </div>
        </div>
        <router-link to="/about" class="btn" v-parallax="-0.1">
          <span>Autumnを知る</span><box-icon name='chevron-right'></box-icon>
        </router-link>
      </div>

      <div class="link-to contact">
        <div data-scroll>
          <div class="img" />
          <div class="shadow" />
          <div class="heading">
            <h1>Contact Us</h1>
            <p>私たちと驚きの見せ方を検討しましょう</p>
          </div>
        </div>
        <router-link to="/about" class="btn" v-parallax="-0.1">
          <span>お問い合わせ</span><box-icon name='chevron-right'></box-icon>
        </router-link>
      </div>

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

.link-to{
  position: relative;
  width: 84%;
  margin-left: 5%;
  margin-bottom: 50vw;
  font-size: 29px;
  @include md{
    width: 77%;
    font-size: 4vw;
  };
  @include lg{
    font-size: 46px;
  };
  .img{
    position: relative;
    width: 100%;
    padding-top: 96%;
    z-index: 1;
    background-image: url(~assets/img/about.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    @include md{
      padding-top: 66%;
    };
  }
  .shadow{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 2;
  }
  .heading{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 100%;
    height: 3.7em;
    height: max-content;
    padding: 0 1em;
    text-align: center;
    color: $white;
    line-height: 1.7;
    z-index: 3;
    h1{
      font-size: 1em;
      font-weight: 600;
    }
    p{
      font-size: 0.45em;
      font-weight: 400;
      opacity: 0.6;
    }
  }
  .btn{
    font-size: 0.55em;
    position: absolute;
    bottom: -15%;
    right: -5%;
    padding: 1em 0;
    width: 60%;
    background: $white;
    color: $black;
    fill: $grey-2;
    z-index: 4;
    text-align: center;
    box-shadow: 0 2px 30px 0 rgba(0,0,0,0.2);
    font-weight: 600;
    @include flex-center;
    span:first-child{
      padding: 0.05em 0.1em 0 0.8em;
    }
    @include md{
      bottom: 5%;
    };
  }

  &.about{
    .img{
      background-image: url(~assets/img/about.jpg);
    }
  }
  &.contact{
    margin-left: auto;
    margin-right: 5%;
    margin-top: 20vw;
    .img{
      background-image: url(~assets/img/contact.jpg);
    }
    .btn{
      right: auto;
      left: -5%;
    }
  }
}



.heading-works{
  position: relative;
  padding: 2em 1.4em 3em;
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  line-height: 1.5;
  color: dark($bluegrey);
  z-index: 10;
  span{
    display: block;
    font-size: 0.48em;
    font-weight: 400;
    opacity: 0.8;
  }
  @include md{
    font-size: 5vw;
    padding: 1em 0 7em;
  };
}



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

section:nth-of-type(n+2){
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

  section:last-of-type{
    padding-bottom: 20vw;
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
</style>
