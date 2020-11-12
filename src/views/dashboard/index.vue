<!--
 * @Description: 
 * @Author: fanwenjing
 * @LastEditors: fanwenjing
 * @Date: 2020-11-02 10:20:16
 * @LastEditTime: 2020-11-12 18:01:27
-->
<template>
  <div>
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from './admin'
import editorDashboard from './editor'

export default {
  name: 'Dashboard',
  components: { adminDashboard, editorDashboard },
  data () {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created () {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'editorDashboard'
    }
  }
}
</script>
