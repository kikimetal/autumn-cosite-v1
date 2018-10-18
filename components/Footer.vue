<template lang="html">
  <footer class="footer">
    <h2 class="heading">[logo]Autumn Inc.</h2>
    <div class="link-container">
      <router-link class="link" exact to="/">Home<span class="ja">株式会社オータム</span></router-link>
      <router-link class="link" exact to="/about">About Us<span class="ja">私たちについて</span></router-link>
      <router-link class="link" exact to="/works">Works<span class="ja">実績紹介</span></router-link>
      <router-link class="link" exact to="/company">Company<span class="ja">企業情報</span></router-link>
      <router-link class="link" exact to="/contact">Contact Us<span class="ja">お問いわせ</span></router-link>
    </div>
    <div class="copyright">2018 Autumn Inc. all right reserved.</div>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

.footer{
  font-size: 1.1em;
  padding: 3em 2em 3.5em;
  background: $black;
  color: $white;
  line-height: 2.4;
  @include md{
    padding: 7em 8vw 6.4em;
  };
  .heading{
    font-size: 1.3em;
    font-weight: 600;
    line-height: 3;
    opacity: 0.5;
  }
  .link-container{
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
    font-weight: 600;
    .link:hover{
      text-decoration: underline;
    }
    .ja{
      font-size: 0.9em;
      opacity: 0.5;
      padding-left: 0.6em;
    }
  }
  .copyright{
    line-height: 3;
    opacity: 0.5;
  }
}
</style>
