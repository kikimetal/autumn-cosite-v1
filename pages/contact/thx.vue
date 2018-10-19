<template lang="html">
  <div class="page">
    <div id="contact">

      <div class="top-image" />
      <Heading
      title="Thank you!"
      :subtitle="['お問い合わせありがとうございます！']"
      message="ご依頼まことにありがとうございました。内容を確認次第、担当者からご連絡いたします。どうぞ宜しくお願い申し上げます。"
      />

      <router-link exact to="/" class="btn">
        トップページへ戻る
      </router-link>

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
  background-image: url(~assets/img/contact.jpg);
}
#contact{
  padding-bottom: 20%;
  @include md{
    padding-bottom: 12%;
  };
}
.btn{
  display: block;
  width: 90%;
  @include md{
    width: 50%;
  }
  margin: 0 auto;
  padding: 0.8em;
  background: $bluegrey;
  font-size: 22px;
  font-weight: 700;
  color: $white;
  text-align: center;
  border: 2px solid $bluegrey;
  transition: all 0.2s ease;
  &:hover{
    color: $bluegrey;
    background: $white;
    box-shadow: 1px 0 20px 0 rgba(0,0,0,0.2);
  }
}
</style>
