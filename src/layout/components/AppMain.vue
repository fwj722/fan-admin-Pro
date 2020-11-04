<template>
  <section class="app-main">
    <div class="section-container">
      <transition name="fade-transform" mode="out-in">
       <div class="content-wrap">  
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
  padding-top: 50px;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    height: 100%;
    // height: calc(100vh - 84px);
  }

  .fixed-header+.app-main {
    padding-top: 84px;
  }
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
.section-container{
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: #eef0f3;
    overflow: hidden;
    .content-wrap{
      width: 100%;
      height: 100%;
      overflow: auto;
    }
}
</style>
