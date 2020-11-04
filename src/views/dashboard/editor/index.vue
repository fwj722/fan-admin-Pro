<template>
  <div class="dashboard-editor-container">
    首页
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import PanThumb from '@/components/PanThumb'

export default {
  name: 'DashboardEditor',
  // components: { PanThumb },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .dashboard-editor-container {
   background-color: #fff;
   height: 100%;
  }
</style>
