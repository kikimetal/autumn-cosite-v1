<template lang="html">
  <div class="page">
    <div id="about">

      <div class="top-image" />

      <Heading
      title="Our team"
      :subtitle="['自らを問い続ける']"
      message="新しいアイデアは、ユニークなチームから生まれます。Autumnはその可能性を、多種多様なメンバー構成を持って実現しています。"
      />

      <div class="container">
        <div class="card" v-for="(row, i) in memberArray">
          <div class="inner">
            <div class="banner" :style="{backgroundImage: `url(${row.banner})`}">
              <div class="icon" :style="{backgroundImage: `url(${row.icon})`}"/>
            </div>

            <div class="text">
              <div class="name">{{ row.name }}</div>
              <div class="message">
                <div v-if="row.job" class="job">{{ row.job }}</div>
                <div>{{ row.message }}</div>
                <a v-if="row.external" class="external" :href="row.external">{{ row.external }}</a>
              </div>
              <div class="share">
                <a v-if="row.fb" class="fb" :href="row.fb">
                  <box-icon type='logo' name='facebook'></box-icon>
                </a>
                <a v-if="row.tw" class="tw" :href="row.tw">
                  <box-icon type='logo' name='twitter'></box-icon>
                </a>
                <a v-if="row.insta" class="insta" :href="row.insta">
                  <box-icon type='logo' name='instagram'></box-icon>
                </a>
              </div>
            </div>

          </div>
        </div>
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
  data () {
    return {
      memberArray: [
        {
          name: 'miyabi konishi',
          job: 'Director/Producer/Colorist/Photographer/UXdesigner',
          message: '世界で活躍できるディレクターとして想いを強く引き出し制作物に反映できる人を目指しています。あらゆる人と物から自然に出て来る表情が好きです。飼い猫がかわいい。名前はにぼしです。',
          fb: 'https://www.facebook.com/db.cola',
          tw: 'https://twitter.com/Msa_a0',
          insta: 'http://instagram.com/miyabikonishi',
          banner: require('~/assets/img/about/miyabi/banner.jpg'),
          icon: require('~/assets/img/about/miyabi/icon.jpg'),
        },
        {
          name: 'YANDY',
          job: 'Cinematographer/Creative director',
          message: '何事にもクリエイトする心を忘れない。褒められることを生きがいとしている人間です。',
          fb: 'https://www.facebook.com/profile.php?id=100014044392071',
          tw: 'https://twitter.com/Autumn_yandy',
          insta: 'https://www.instagram.com/yandy_yamashita/?hl=ja',
          banner: require('~/assets/img/about/yandy/banner.jpg'),
          icon: require('~/assets/img/about/yandy/icon.jpg'),
        },
        {
          name: 'NixoN',
          job: 'Director / λογος / illustrator / Religious study',
          message: 'Εν αρχη ην ο λογος. 人の相を捉えるべく、その辺をうろうろしています。',
          fb: null,
          tw: 'https://twitter.com/2___o0oOo0o___9',
          insta: null,
          banner: require('~/assets/img/about/niku/banner.jpg'),
          icon: require('~/assets/img/about/niku/icon.jpg'),
        },
        {
          name: '地村俊也',
          job: 'Cinematographer/Drone Operator/Colorist/DIT',
          message: '美しい映像は、何かを伝える最高の言語だと思う。シネマティックな作風が持ち味。近年は空からもシネマティック。',
          external: 'https://www.youtube.com/user/toshiya161',
          fb: null,
          tw: 'https://twitter.com/ari_azk',
          insta: null,
          banner: require('~/assets/img/about/chimura/banner.jpg'),
          icon: require('~/assets/img/about/chimura/icon.jpg'),
        },
        {
          name: 'あずきあらい',
          job: 'Illustrator',
          message: 'ファンタジー世界に生きたい。チャイナ服の魅力に気が付き始めました。女の子の好きな部位はサガリです。',
          fb: null,
          tw: 'https://twitter.com/ari_azk',
          insta: null,
          banner: require('~/assets/img/about/azuki/banner.jpg'),
          icon: require('~/assets/img/about/azuki/icon.jpg'),
        },
        {
          name: 'KIKIMETAL',
          job: 'Design/UIUX/WebFrontEnd/JSer',
          message: '隠せないファッション、WEB上でもパッション。知ってる、知ってる、もっとユニークにしたいでしょ。そんなあなたと、ジャバスクリプト。',
          fb: null,
          tw: 'https://twitter.com/qiqimetal',
          insta: null,
          banner: require('~/assets/img/about/kikimetal/banner.jpg'),
          icon: require('~/assets/img/about/kikimetal/icon.jpg'),
        },
        {
          name: '多々良さん(Tatara)',
          job: 'Illustrator',
          message: '美少女が好きすぎて美少女になりたいです。',
          external: 'http://hasikiku.tumblr.com',
          fb: null,
          tw: 'https://twitter.com/nabenofuta33',
          insta: null,
          banner: require('~/assets/img/about/tatara/banner.jpg'),
          icon: require('~/assets/img/about/tatara/icon.jpg'),
        },
        {
          name: 'Yuzu Wakakusa / 若草 ゆず',
          job: '3DCG | Modeling / Animation',
          fb: null,
          tw: 'https://twitter.com/yuzu_wakakusa',
          insta: null,
          banner: require('~/assets/img/about/yuzu/banner.jpg'),
          icon: require('~/assets/img/about/yuzu/icon.jpg'),
        },
        {
          name: 'yutaka yoshida',
          job: 'Management/Producer',
          message: '一応代表です。偉くはないです',
          fb: 'https://www.facebook.com/y.yutaka.narukuma',
          tw: null,
          insta: null,
          banner: require('~/assets/img/about/yutaka/banner.jpg'),
          icon: require('~/assets/img/about/yutaka/icon.jpg'),
        },
      ],
    }
  },
  mounted () { this.$store.state.so() },
  head () { return this.$store.state.getHead() },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

.top-image{
  @include image;
  background-image: url(~assets/img/about-top.jpg);
}

.container{
  padding-bottom: 10%;
  width: 100%;
  @include md{
    width: 80%;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 1fr 1fr;
    // grid-auto-rows: 49vw;
  };

  .card{
    padding: 5%;
    width: 100%;
    @include md{
      padding: 8% 5%;
    };

    .inner{
      position: relative;
      width: 100%;
      height: 100%;
      background: $white;
      box-shadow: 2px 0 42px 0 rgba(0,0,0,0.1);
      overflow: hidden;
      --icon-size: 26vw;
      @include md{
        --icon-size: 11vw;
      };

      .banner{
        position: relative;
        width: 100%;
        padding-top: 45%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        .icon{
          position: absolute;
          left: calc(var(--icon-size) / 5);
          bottom: calc(-1 / 2 * var(--icon-size));
          width: var(--icon-size);
          height: var(--icon-size);
          border-radius: 50%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          border: 3px solid $white;
        }
      }

      .text{
        padding: 7vw;
        padding-top: calc(var(--icon-size) / 1.6);
        font-size: 17px;
        line-height: 1.4;
        @include md{
          padding: 3vw;
          padding-top: calc(var(--icon-size) / 1.6);
        };
        .name{
          font-size: 1.5em;
          font-weight: 700;
          line-height: 1.8;
        }
        .job{
          padding-bottom: 0.4em;
          font-size: 0.9em;
        }
        .message{
          opacity: 0.6;
        }
        .external{
          font-size: 0.86em;
          color: dark($bluegrey);
          font-family: helvetica, arial, sans-serif;
          text-decoration: underline;
        }
      }

      .share{
        padding-top: 11%;
        padding-bottom: 3%;
        @include flex-center;
        justify-content: flex-start;
        a{
          margin: 0 0.5em;
          display: inline-block;
          width: 2.9em;
          height: 2.9em;
          border-radius: 50%;
          @include flex-center;
          fill: $white;
          background: $bluegrey;
          &.fb{
            background: #3B5998;
          }
          &.tw{
            background: rgb(0, 172, 237);
          }
          &.insta{
            background: linear-gradient(130deg, #fbad50, #bc2a8d);
          }
        }
      }
    }
  }
}

</style>
