<template lang="html">
  <div class="coming-soon">
    <h1>coming soon...</h1>
    <p>このページはうさちゃんが作成中です</p>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';
.coming-soon{
  width: 100%;
  height: 100vh;
  // background: $grey-2;
  color: $grey-5;
  font-weight: 900;
  @include flex-center;
  flex-flow: column;
  .usa{
    width: 20%;
    opacity: 0.4;
  }
  h1{
    font-size: 27px;
    padding: 0.8em 0.5em 0.7em;
    opacity: 0.8;
  }
  p{
    opacity: 0.5;
  }
}
</style>
