export default {
  computed: {
    device () {
      return this.$store.state.app.device
    }
  },
  mounted () {
    // 修复ios设备上菜单单击触发的mouseleave错误
    this.fixBugIniOS()
  },
  methods: {
    fixBugIniOS () {
      const $subMenu = this.$refs.subMenu
      if ($subMenu) {
        const handleMouseleave = $subMenu.handleMouseleave
        $subMenu.handleMouseleave = (e) => {
          if (this.device === 'mobile') {
            return
          }
          handleMouseleave(e)
        }
      }
    }
  }
}
