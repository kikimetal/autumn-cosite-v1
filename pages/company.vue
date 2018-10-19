<template lang="html">
  <div class="page">
    <div id="company">

      <div class="top-image" />

      <div class="container">
        <h1 class="heading">Company</h1>
        <section class="message">
          <h1>代表挨拶</h1>
          <p>
            創業の動機は大きく二つの理由があります。
          </p>
          <p>
            一つは事業生があり、クリエティブの力を信じているからです。日本では豊かさの水準において、生活に必要な機能的な供給はすでに一定に達してると感じています。その中で機能はもちろんですが、付加価値を念頭においた商品作りやコミュニケーションデザインはクリエティブ領域の大きな役割だと確信しています。 特に映像領域の活用は日本において、その重要性は疑う余地はありません。
            クリエティブ領域の技術を高め、ユーザー視点をぶらさず事業を進められれば会社の価値が大きく高まり、より豊かな社会を広めることに寄与できる考えます。
          </p>
          <p>
            二つめは、前職の経験を大きく活かせる状況にあると考えるからです。
            若手クリエイターたちと接する機会が多く、また自身も芸大に所属していたためクリエティブの力が世の中の役に立てる確信を持っています。
            経営陣の中でCOOを担当をしていた経験とクリエティブディレクターとしてのスキルを活かせる事業を検討した結果、 前職からお世話になっているお客様が顧客としている状況と、クリエイターと良好な関係を築いてる今、創業という選択肢は信ずるところを邁進する上で有力な選択肢となりました。
          </p>

          <h1>創業理念</h1>
          <p>
            市場におけるコンテンツの総量を増やすことはもちろんのこと、適切な流動を促し続けます。
            この一連の行為を、個性あるクリエイター達と、私たちは「可視化」と「デザイン」の力を手段とし映像というアウトプットで様々な情報にアプローチする企業となります。私たちは、日本におけるクリエティブ産業の発展に貢献することを約束いたします。
          </p>
          <h1>会社名の由来</h1>
          <p>
            「株式会社Autumn」には、「実りの季節」、「豊穣の秋」といった、日本人における「豊かさ」をイメージして名付けました。
            いわゆるデジタルコンテンツ産業においては、先進国の中でも新しい局面に居るともいえる日本に、良いコンテンツを増やすこと。良いクリエイターを増やす こと。そしてこれらの点と線を、縦横無尽に繋ぐことにより、新たな価値が産まれ、私たちの目指す「豊かな社会」に貢献出来ると考えています。
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
          <p>9999年99月99日</p>

          <h2>資本金</h2>
          <p>50万円</p>

          <h2>代表者名</h2>
          <p>吉田 穰 (ヨシダ ユタカ)</p>

          <h2>事業内容</h2>
          <p>インターネット付随サービス業　4012アプリケーション・サービス・コンテンツ・プロバイダ（※平成26年4月1日施行 日本標準産業分類より近似業種を抜粋)</p>
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
  mounted () { this.$store.state.so() },
  head () { return this.$store.state.getHead() },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

.top-image{
  @include image;
  background-image: url(~assets/img/about.jpg);
}

.container{
  padding: 0 5%;
  padding-bottom: 12%;
  @include md{
    padding: 0 calc((100vw - 700px) / 2);
    padding-bottom: 8%;
  };
  @include lg{
    padding: 0 calc((100vw - 800px) / 2);
    padding-bottom: 8%;
  };
}

.heading{
  position: relative;
  margin: 15% 0 4%;
  width: max-content;
  font-size: 44px;
  font-weight: 700;
  color: $bluegrey;
  @include md{
    font-size: 6vw;
    margin: 11% 0 6%;
  };
  &::after{
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

section{
  padding: 0 0 11%;
  h1{
    padding: 2.2em 0 0.9em;
    font-size: 1.4em;
    font-weight: 700;
    line-height: 1;
    color: $bluegrey;
  }
  h2{
    font-size: 1.1em;
    font-weight: 700;
    line-height: 1;
    padding: 2em 0 0.2em;
    opacity: 0.3;
  }
  p{
    padding: 0.6em 0;
    line-height: 1.8;
    color: $grey-7;
  }
}

.info{

}
</style>
