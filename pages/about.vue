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
              <div class="message">{{ row.message }}</div>
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
          name: 'あずきあらい',
          message: 'ヨーロッパ1のイラストレーターになっとる夢を見ました。つまりそういうことだと思います。',
          fb: 'https://twitter.com/ari_azk',
          tw: 'https://twitter.com/ari_azk',
          insta: 'https://twitter.com/ari_azk',
          banner: require('~/assets/img/about/azuki/banner.jpg'),
          icon: require('~/assets/img/about/azuki/icon.jpg'),
        },
        {
          name: 'おーたむにく',
          message: '主に人間の相(Phase)について考えています。絶賛受験勉強中！ ▼ 知恩院機関誌『華頂』にて紙芝居連載 / キリスト新聞『宗教リテラシー向上委員会』他イラスト寄稿 / 『小論文が、よく書ける原稿用紙』(表紙・マンガ制作) / 冥土喫茶ぴゅあらんど',
          fb: 'https://twitter.com/ari_azk',
          tw: null,
          insta: null,
          banner: require('~/assets/img/about/niku/banner.jpg'),
          icon: require('~/assets/img/about/niku/icon.jpg'),
        },
        {
          name: 'KIKIMETAL',
          message: 'ハッピーふとももカーニバル!',
          fb: null,
          tw: 'https://twitter.com/qiqimetal',
          banner: require('~/assets/img/about/kikimetal/banner.jpg'),
          icon: require('~/assets/img/about/kikimetal/icon.jpg'),
        },
        {
          name: 'あずきあらい',
          message: 'ヨーロッパ1のイラストレーターになっとる夢を見ました。つまりそういうことだと思います。',
          fb: null,
          tw: 'https://twitter.com/ari_azk',
          insta: 'https://twitter.com/ari_azk',
          banner: require('~/assets/img/about/azuki/banner.jpg'),
          icon: require('~/assets/img/about/azuki/icon.jpg'),
        },
        {
          name: 'あずきあらい',
          message: 'ヨーロッパ1のイラストレーターになっとる夢を見ました。つまりそういうことだと思います。',
          fb: null,
          tw: 'https://twitter.com/ari_azk',
          insta: 'https://twitter.com/ari_azk',
          banner: require('~/assets/img/about/azuki/banner.jpg'),
          icon: require('~/assets/img/about/azuki/icon.jpg'),
        },
        {
          name: 'あずきあらい',
          message: 'ヨーロッパ1のイラストレーターになっとる夢を見ました。つまりそういうことだと思います。',
          fb: null,
          tw: 'https://twitter.com/ari_azk',
          insta: 'https://twitter.com/ari_azk',
          banner: require('~/assets/img/about/azuki/banner.jpg'),
          icon: require('~/assets/img/about/azuki/icon.jpg'),
        },
        {
          name: 'あずきあらい',
          message: 'ヨーロッパ1のイラストレーターになっとる夢を見ました。つまりそういうことだと思います。',
          fb: null,
          tw: 'https://twitter.com/ari_azk',
          insta: 'https://twitter.com/ari_azk',
          banner: require('~/assets/img/about/azuki/banner.jpg'),
          icon: require('~/assets/img/about/azuki/icon.jpg'),
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
  background-image: url(~assets/img/contact.jpg);
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
        .message{
          opacity: 0.5;
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
