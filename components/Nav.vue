<template lang="html">
  <div id="nav">

  <nav :class="['header', $route.name, {isScrollTop: $store.state.isScrollTop}]">
    <router-link to="/" class="logo">
      <Logomark class="mark" />
      <span class="type">Autumn Inc.</span>
    </router-link>
    <div class="progress-bar-container">
      <div class="bar" :class="[{transition: pageTransitionActive}]" :style="{width: progressBarWidth+'%'}"></div>
    </div>
    <span class="menu"
    @click="$store.commit('toggleNav')">
      <box-icon name='menu-alt-right' size="lg" class="bars"></box-icon>
    </span>
  </nav>

  <transition name="fade">
    <div class="global-menu-background"
    v-if="$store.state.isShowNav"
    @click="$store.commit('toggleNav', false)">
    </div>
  </transition>

  <transition
  enter-active-class="animated fadeInDown faster"
  leave-active-class="animated fadeOutDown faster">
    <nav class="global-menu"
    v-show="$store.state.isShowNav"
    @click="$store.commit('toggleNav', false)">
      <router-link exact to="/" class="link">Home</router-link>
      <router-link exact to="/about" class="link">About Us</router-link>
      <router-link exact to="/works" class="link">Works</router-link>
      <router-link exact to="/company" class="link">Company</router-link>
      <router-link exact to="/contact" class="link">Contact Us</router-link>
    </nav>
  </transition>

</div>
</template>

<script>
import Logomark from '~/components/Logomark.vue'
export default {
  components: {
    Logomark,
  },
  data () {
    return {
      progressBarWidth: 0,
      pageTransitionActive: false,
      headerContextColor: '',
    }
  },
  created () {
    const setProgressBarWidth = () => {
      if (this.pageTransitionActive) return
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      this.progressBarWidth = scrolled
    }

    window.addEventListener('scroll', setProgressBarWidth)

    this.$router.afterEach((to, from) => {
      this.progressBarWidth = 0
      this.pageTransitionActive = true
      setTimeout(() => this.pageTransitionActive = false, 1500)
    })
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';
#nav{

  .popup{
    position: fixed;
    top: 10vw;
    right: 10vw;
    width: 200px;
    z-index: 999;
  }

  .global-menu-background{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.4);
    z-index: 999;
    backdrop-filter: blur(20px);
    img.close{
      position: absolute;
      top: 3.8%;
      right: 8%;
      width: 1.6rem;
      height: auto;
    }
  }

  .global-menu{
    position: fixed;
    top: 10%;
    left: 0;
    right: 0;
    padding: 2em 1rem;
    margin: 0 auto;
    width: 90%;
    min-height: 300px;
    background: $white;
    color: $black;
    box-sizing: border-box;
    box-shadow: 0 0 1em 0 rgba(0,0,0,0.2);
    z-index: 9999;
    .heading{
      padding: 4vw 0 2vw;
      font-weight: 600;
      opacity: 0.3;
    }
    .link{
      padding-left: 2.6vw;
      margin-bottom: 2px;
      line-height: 2;
      display: flex;
      flex-flow: row;
      justify-content: flex-start;
      align-items: center;
      font-weight: 700;
      font-size: 26px;
      &.nuxt-link-exact-active{
        background: $grey-5;
        color: $white;
        .icon{
          filter: brightness(5);
        }
      }
    }
  }

  .header{
    --progress-bar-height: 4px;
    position: fixed;
    top: var(--progress-bar-height);
    left: 0;
    right: 0;
    --height: 60px;
    height: var(--height);
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
    align-items: center;
    z-index: 99;
    transition: all 0.3s ease;
    @include md{
      --height: 95px;
    };

    color: $grey-8;
    fill: $grey-8;

    &.works,
    &.company{
      color: $bluegrey;
      fill: $bluegrey;
    }
    &.isScrollTop{
      color: $white;
      fill: $white;
    }
    &.index{
      color: $bluegrey;
      fill: $bluegrey;
    }

    .logo{
      margin-right: auto;
      padding-top: 2%;
      width: 36%;
      font-weight: 700;
      font-size: 20px;
      font-size: 4.4vw;
      @include flex-center;
      flex-flow: row;
      .mark{
        width: 26%;
        padding-right: 3%;
        padding-bottom: 3%;
      }
      .type{}
      @include md{
        // padding-top: 0.%;
        width: 26%;
        font-size: 2.5vw;
      };
    }

    .menu{
      width: 12%;
      @include flex-center;
      transform: scale(0.86);
      padding-top: 1.2%;
      fill: inherit;
      cursor: pointer;
      @include md{
        width: 11%;
        transform: scale(1.3);
      };
      svg{
        width: inherit;
      }
    }

    .progress-bar-container{
      box-sizing: content-box;
      position: absolute;
      top: calc(var(--progress-bar-height) * -1);
      left: 0;
      right: 0;
      width: 100%;
      background: rgba(0,0,0,0.05);
      @include md{
        --progress-bar-height: 11px;
      }
      .bar {
        height: var(--progress-bar-height);
        background: $bluegrey;
        width: 0%;
        &.transition{
          transition: width 0.4s $ease-out;
        }
      }
    }
  }
}
</style>
