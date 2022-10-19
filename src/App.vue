<script setup>
import 'web-themes/simple/common.css'
import { initTheme } from 'web-themes/simple/theme'

// 初始化主题
initTheme()
</script>

<template>
  <router-view />
</template>

<style>
#app {
  /* 禁用用户选择 */
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
}
</style>
