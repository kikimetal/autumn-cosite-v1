<template lang="html">
  <div class="page">
    <div id="works">
      <div class="top-image" />
      <Heading
      title="Our motivation"
      :subtitle="['最良のアイデア、最良のアウトプット。']"
      message="想像性と実用性は相入れないという感覚は、現実に、クリエイティブなアイデアを嫌うという微妙なバイアスを人の心にかけることがあります。"
      />

      <section>
        <router-link to="/works/01" class="image" data-scroll>
          <div class="heading">
            <span class="subtitle">Visual creation for Branding</span>
            <h1 class="title">知恩院大爆発</h1>
            <div class="btn">
              <span>もっと見る</span><box-icon name='chevron-right'></box-icon>
            </div>
          </div>
        </router-link>
        <div class="text" data-scroll>
          <p>
            彼女の持つ只者ではないアイドルとしての信念や情熱の表現。
          </p>
          <p>
            視覚の中で彼女の思いをあなたへ届けるための工夫は、彼女のブランディングへ立ち返ることでした。
          </p>
        </div>
      </section>

      <section>
        <router-link to="/works/02" class="image" data-scroll>
          <div class="heading">
            <span class="subtitle">Visual creation for Branding</span>
            <h1 class="title">てのひらえるの初映像作品</h1>
            <div class="btn">
              <span>もっと見る</span><box-icon name='chevron-right'></box-icon>
            </div>
          </div>
        </router-link>
        <div class="text" data-scroll>
          <p>
            彼女の持つ只者ではないアイドルとしての信念や情熱の表現。
          </p>
          <p>
            視覚の中で彼女の思いをあなたへ届けるための工夫は、彼女のブランディングへ立ち返ることでした。
          </p>
        </div>
      </section>

      <section>
        <router-link to="/works/03" class="image" data-scroll>
          <div class="heading">
            <span class="subtitle">Visual creation for Branding</span>
            <h1 class="title">てのひらえるの初映像作品</h1>
            <div class="btn">
              <span>もっと見る</span><box-icon name='chevron-right'></box-icon>
            </div>
          </div>
        </router-link>
        <div class="text" data-scroll>
          <p>
            彼女の持つ只者ではないアイドルとしての信念や情熱の表現。
          </p>
          <p>
            視覚の中で彼女の思いをあなたへ届けるための工夫は、彼女のブランディングへ立ち返ることでした。
          </p>
        </div>
      </section>

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
  head () { return this.$store.state.getHead() },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

.top-image{
  @include image;
  background-image: url(~assets/img/works.jpg);
}

section{
  padding: 5% 5% 27%;
  font-size: 20px;
  .image{
    display: block;
    position: relative;
    margin: auto;
    padding-top: 94%;
    background-color: rgba(0,0,0,0.1);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(~assets/img/works.jpg);
    cursor: pointer;
    &::after{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.5);
      transition: all 0.3s ease;
    }
    .heading{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 0 1em;
      margin: auto;
      height: 6em;
      height: max-content;
      color: $white;
      z-index: 2;
      line-height: 1.4;
      text-align: center;
      .subtitle{
        opacity: 0.6;
      }
      .title{
        font-size: 1.3em;
        font-weight: 600;
      }
      .btn{
        font-size: 0.84em;
        padding: 0.5em 1em 0.5em 1.3em;
        margin: auto;
        margin-top: 0.7em;
        width: 12em;
        border-radius: 3em;
        border: 2px solid $white;
        fill: $white;
        @include flex-center;
        transition: all 0.3s ease;
        opacity: 0.8;
      }
    }
    &:hover{
      &::after{
        background: rgba(0,0,0,0.1);
      }
      .btn{
        background: $white;
        color: $black;
        fill: $black;
        opacity: 1;
      }
    }
  }

  .text{
    padding: 2em 0.3em;
    color: $grey-7;
    font-size: 0.83em;
    line-height: 1.7;
    p{
      padding: 0.4em 0;
    }
  }

  &:nth-of-type(1){
    .image{
      background-image: url(~assets/img/about.jpg);
    }
  }
  &:nth-of-type(2){
    .image{
      background-image: url(~assets/img/contact.jpg);
    }
  }
  &:nth-of-type(3){
    .image{
      background-image: url(~assets/img/works.jpg);
    }
  }


  @include md{
    padding: 0;
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    &:nth-of-type(even){
      flex-flow: row-reverse;
    }
    & > *{
      width: 50%;
    }
    .image{
      padding-top: 50%;
    }
    .text{
      padding: 7vw;
    }
  };
}
</style>
