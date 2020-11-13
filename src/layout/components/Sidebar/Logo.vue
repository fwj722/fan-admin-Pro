<!--
 * @Description: 设置项目左上角的logo
 * @Author: fanwenjing
 * @LastEditors: fanwenjing
 * @Date: 2020-11-02 10:20:16
 * @LastEditTime: 2020-11-13 11:30:10
-->
<template>
  <div class="logo-container" :class="{'collapse':collapse}" :style="{'background-color':logoBgColor}">
    <transition name="sidebarLogoFade">
      <router-link :key="collapse?'collapse':'expand'" class="sidebar-logo-link" to="/">
        <img v-if="logo" :src="collapse?miniLogin:logo" class="sidebar-logo" />
        <h1 v-else class="sidebar-title">{{ title }} </h1>
        <h1 v-if="!collapse" class="sidebar-title">{{ title }} </h1>
      </router-link>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SidebarLogo',
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      title: '',
      logo: '/logo.png',
      miniLogin:'/logo-mini.png'
    }
  },
  computed:{
    logoBgColor(){
       return this.$store.state.settings.logoBgColor
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.logo-container {
  position: relative;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #1d1e23;
  text-align: center;
  overflow: hidden;

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;

    & .sidebar-logo {
      // width: 32px;
      height: 32px;
      vertical-align: middle;
      margin-right: 12px;
    }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 40px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }
}
</style>
