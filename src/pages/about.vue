<!--
 * @Author: fzf404
 * @Date: 2022-02-02 19:08:04
 * @LastEditTime: 2022-09-17 23:34:23
 * @Description: 关于
-->
<script setup>
import { changeTheme } from 'web-themes/simple/theme'
</script>

<template lang="pug">
h1 
  | 你好呀 
  span.jump(@click="changeTheme") 👋
h2 
  | 你们的小f / fzf404 / nmdfzf404 🚆
p 
  | 大三艺术生，就读于沈阳理工大学动画专业。
p
  | 修炼中的全栈开发者，左派社会主义接班人，理想主义键政带师。
p
  | 使用 JavaScript、Python 和 Golang，Java / C++ PTSD !
p
  | 轨道交通迷，有点 furry 属性。
p
  router-link.fr(to="/") 返回
</template>
