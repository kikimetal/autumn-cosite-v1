<template lang="html">
  <footer class="footer">
    <h2 class="heading">[logo]Autumn Inc.</h2>
    <div class="link-container">
      <router-link exact to="/">Home</router-link>
      <router-link exact to="/about">About Us</router-link>
      <router-link exact to="/works">Works</router-link>
      <router-link exact to="/company">Company</router-link>
      <router-link exact to="/contact">Contact</router-link>
    </div>
    <div class="copyright">2018 CARVANCL inc all right reserved.</div>
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
  padding: 3em;
  background: $black;
  color: $white;
  line-height: 2.4;
  a{
    text-decoration: underline;
  }
  .heading{
    font-size: 1.3em;
    font-weight: 600;
  }
  .link-container{
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
  }
  .copyright{
    line-height: 4;
  }
}
</style>
