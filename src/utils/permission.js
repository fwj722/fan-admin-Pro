/*
 * @Description: 
 * @Author: fanwenjing
 * @LastEditors: fanwenjing
 * @Date: 2020-11-02 10:20:16
 * @LastEditTime: 2020-11-13 09:53:12
 */
import store from '@/store'
/**
 * @param {Array} value
 * @returns {Boolean}
 * @example 参考 @/views/permission/directive.vue
 */
export default function checkPermission (value) {
  if (value && value instanceof Array && value.length > 0) {
    const roles = store.getters && store.getters.roles
    const permissionRoles = value

    const hasPermission = roles.some(role => {
      return permissionRoles.includes(role)
    })
    return hasPermission
  } else {
    console.error(`需要制定角色! 如： v-permission="['admin','editor']"`)
    return false
  }
}
