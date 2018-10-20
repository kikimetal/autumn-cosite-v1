<template lang="html">
  <div class="page">
    <div id="work-03">

      <div class="top-image" />

      <div class="work">
        <h1>Outline</h1>
        <p>
          これまで、てのひらえるのアイドルとしてのチャネル（発信媒体）はtwitterとLIVEのみであり、新たなチャネルの開拓が課題とされていました。
        </p>
        <p>
          中でも名刺代わりとなるMVはファンからも切望されており、これまで応援してくれたことへの感謝のかたちとしてプレゼントするとともに、てのひらえるの新たな境地を映像のなかに表現し、新規ファン獲得の接点としても機能させることを目指しました。
        </p>
        <img src="~assets/img/works/el/el-introduction.jpg" alt="">

        <br><br><br>

        <h1>Output</h1>
        <h2>ーーー既存のイメージを打ち破り、新しいアイドル像を創る</h2>
        <p>
          わたしたちAutumnはヒアリングにおいて、彼女のアイドルとしての信念、これから実現していきたいことなどをお聞きし、話の中から感じられた彼女の「只者ではない」情熱をイメージの中に抽出しました。
        </p>
        <p>
          また今後の展開を見据え、彼女の所属するInk Inkプロダクションともブランディングにおける方向性を共有し、目指すアイドル像を表現するための継続的なプロジェクトとして関わりをスタートさせました。
        </p>
        <img src="~assets/img/works/el/el-output1.jpg" alt="">
        <img src="~assets/img/works/el/el-output2.jpg" alt="">
      </div>

    </div>
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'
Vue.use(VueYoutube)

import Footer from '~/components/Footer.vue'

export default {
  components: {
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
  background-image: url(~assets/img/works/el/el-top.jpg);
}
.work{
  @include work;
}
</style>
