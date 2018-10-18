<template lang="html">
  <div id="nav">

  <nav :class="['header', $route.name]">
    <router-link to="/" class="logo">
      <!-- <img src="~/assets/img/co-name.svg" alt=""> -->
      [logo] Autumn Inc.
    </router-link>
    <div class="progress-bar-container">
      <div class="bar" :class="[{transition: pageTransitionActive}]" :style="{width: progressBarWidth+'%'}"></div>
    </div>
    <span class="menu"
    @click="$store.commit('toggleNav')">
      <box-icon name='menu-alt-right' size="md" class="bars"></box-icon>
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
      <!-- <h2 class="heading">MENU</h2> -->
      <router-link exact to="/" class="link">Home</router-link>
      <router-link exact to="/works" class="link">Works</router-link>
      <router-link exact to="/about" class="link">About Us</router-link>
      <router-link exact to="/company" class="link">Company</router-link>
      <router-link exact to="/contact" class="link">Contact</router-link>
    </nav>
  </transition>

</div>
</template>

<script>
export default {
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
    --height: 50px;
    height: var(--height);
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
    align-items: center;
    color: $black;
    fill: $black;
    z-index: 99;
    @include md{
      --height: 90px;
    };

    &.works{
      color: $bluegrey;
      fill: $bluegrey;
    }
    &.company{
      color: $white;
      fill: $white;
    }

    .logo{
      margin-right: auto;
      padding-left: 4%;
      width: 35%;
      font-weight: 700;
      @include flex-center;

      @include md{
        width: 16%;
      };
    }

    .progress-bar-container{
      box-sizing: content-box;
      position: absolute;
      top: calc(var(--progress-bar-height) * -1);
      left: 0;
      right: 0;
      width: 100%;
      background: rgba(0,0,0,0.05);
      // border-radius: var(--progress-bar-height);
      @include md{
        --progress-bar-height: 11px;
        // width: 22%;
        // width: 100
      }
      .bar {
        height: var(--progress-bar-height);
        background: rgba($white, 0.6);
        width: 0%;
        &.transition{
          transition: width 0.4s $ease-out;
        }
      }
    }

    .contact{
      width: 13%;
      height: var(--height);
      @include flex-center;
      justify-content: flex-start;
      img{
        display: block;
        width: 48%;
      }
    }
    .menu{
      width: 17%;
      height: var(--height);
      @include flex-center;
      // justify-content: flex-start;
      fill: inherit;
    }
  }
}
</style>
