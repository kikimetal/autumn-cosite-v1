<template lang="html">
  <div class="page">
    <div id="company">

      <div class="top-image" />

      <div class="container">
        <h1 class="heading">Company</h1>
        <section class="message">

          <h1>代表挨拶</h1>
          <p>
            私はクリエイティブの力を信じています。
            「豊かさ」の水準において、生活のための機能的な価値供給に関して日本はすでに一定に達してると感じています。
            そういった状況の中で、機能はもちろんのこと、付加価値を念頭においた商品作りやコミュニケーションデザインこそがクリエイティブの大きな役割だと確信しています。
            特に、映像領域の活用はその重要性を疑う余地がありません。
            ブランドを重視し、ユーザー視点をぶらさず、適切なクリエティブを事業として社会に提供していくことが、豊かな社会を創ることに繋がると信じているのです。
          </p>
          <p>
            それが、わたしたちの「大切にしたいことを、ちゃんと大切にする」という価値観の表現方法であり、社会と関わっていく信念でもあります。
          </p>

        </section>
        <section class="info">
          <h2>会社名</h2>
          <p>株式会社Autumn</p>

          <h2>所在地</h2>
          <p>
            &#12306; 607-8011<br/>
            京都市 京都府<br/>
            山科区安朱南屋敷町3-5 キャメル山科 101号室
          </p>

          <h2>設立</h2>
          <p>2018年 2月 9日</p>

          <!-- 20190319: 項目削除依頼対応 -->
          <!-- <h2>資本金</h2>
          <p>100万円</p> -->

          <h2>代表者名</h2>
          <p>吉田 穰 (ヨシダ ユタカ)</p>

          <h2>事業内容</h2>
          <p>
            戦略PR/コンテンツ制作/コンテンツプロデュース
          </p>
        </section>
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
  mounted() {
    this.$store.state.so()
  },
  head() {
    return this.$store.state.getHead()
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

.top-image {
  @include image;
  background-image: url(~assets/img/company-top.jpg);
}

.container {
  padding: 0 5%;
  padding-bottom: 12%;
  @include md {
    padding: 0 calc((100vw - 700px) / 2);
    padding-bottom: 8%;
  }
  @include lg {
    padding: 0 calc((100vw - 800px) / 2);
    padding-bottom: 8%;
  }
}

.heading {
  position: relative;
  margin: 15% 0 4%;
  width: max-content;
  font-size: 44px;
  font-weight: 700;
  color: $bluegrey;
  @include md {
    font-size: 6vw;
    margin: 11% 0 6%;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0.08em;
    left: -3%;
    right: -3%;
    height: 0.17em;
    background: $bluegrey;
    border-radius: 0.2em;
    opacity: 0.4;
    z-index: -1;
  }
}

section {
  padding: 0 0 11%;
  h1 {
    padding: 2.2em 0 0.9em;
    font-size: 1.4em;
    font-weight: 700;
    line-height: 1;
    color: $bluegrey;
  }
  h2 {
    font-size: 1.1em;
    font-weight: 700;
    line-height: 1;
    padding: 2em 0 0.2em;
    opacity: 0.3;
  }
  p {
    padding: 0.6em 0;
    line-height: 1.8;
    color: $grey-7;
  }
}

.info {
}
</style>
