<!--
 * @Description: 
 * @Author: fanwenjing
 * @LastEditors: fanwenjing
 * @Date: 2020-11-02 10:20:16
 * @LastEditTime: 2020-11-13 15:56:29
-->
<template>
  <section class="app-main">
    <div class="section-container">
      <transition name="fade-scale" mode="out-in">
       <div class="content-wrap dashboard-container">  
          <keep-alive :include="cachedViews">
            <router-view :key="key" />
          </keep-alive>
       </div>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews () {
      return this.$store.state.tagsView.cachedViews
    },
    key () {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  height: 100%;
  // height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
.fixed-header+.app-main {
  padding-top: 40px;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    height: 100%;
    // height: calc(100vh - 84px);
  }

  .fixed-header+.app-main {
    padding-top: 66px;
  }
}
</style>

<style lang="scss">
.section-container{
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: #eef0f3;
    overflow: hidden;
    .content-wrap{
      width: 100%;
      height: 100%;
      border-radius: 3px;
      overflow: auto;
    }
}
// 修复打开dialog弹框的css样式bug
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
