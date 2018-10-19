<template lang="html">
  <div :class="['Heading', {pagetop}]">
    <h1 class="title">
      <span v-for="(word, i) in titleArray" :key="'title-word-' + i">{{ word }}</span>
    </h1>
    <h2 class="subtitle">
      <span v-for="(word, i) in subtitleArray" :key="'subtitle-word-' + i">{{ word }}</span>
    </h2>
    <h3 class="message">
      <span v-for="(word, i) in messageArray" :key="'subtitle-word-' + i">{{ word }}</span>
    </h3>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    type: { type: String, default: 'basic' },
    pagetop: { type: Boolean, default: false },
    imgsrc: { type: String, default: 'rose-aroma.jpg' },
    imgstyle: { type: Object, default: () => {} },
    alt: { type: String, default: '画像です' },
    title: { type: [String, Number, Array], default: 'insert title...' },
    subtitle: { type: [String, Number, Array], default: 'insert sub title...' },
    message: { type: [String, Number, Array], default: 'insert message...' },
    align: { type: String, default: 'center' },
    paddingCutTop: { type: Boolean, default: false },
    paddingCutBottom: { type: Boolean, default: false },
    styleOverride: {type: Object, default: () => {} },
  },
  data () {
    return {
      titleArray: typeof this.title === 'object' ? this.title : new Array(this.title),
      subtitleArray: typeof this.subtitle === 'object' ? this.subtitle : new Array(this.subtitle),
      messageArray: typeof this.message === 'object' ? this.message : new Array(this.message),
      imgPaddingTop: '',
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

.Heading{
  font-size: 21px;
  padding: 1.5em 1em 4.5em;
  color: $grey-7;
  span{
    display: inline-block;
  }
  .title{
    font-size: 1.2em;
    color: $bluegrey;
    line-height: 1.4;
    font-weight: 600;
  }
  .subtitle{
    padding: 0.37em 0 0.39em;
    font-size: 1.5em;
    font-weight: 800;
    line-height: 1.4;
  }
  .message{
    font-size: 0.95em;
    line-height: 1.6;
    opacity: 0.5;
    span + span{
      margin-top: 0.5em;
    }
  }

  @include md{
    padding: 3.4em 8vw 4em;
    font-size: 25px;
    box-sizing: content-box;
    max-width: 1000px;
    margin: 0 auto;
  }

  @include lg{
    font-size: 28px;
  }
}
</style>
