<!--
 * @Author: fzf404
 * @Date: 2022-02-02 19:08:04
 * @LastEditTime: 2022-02-08 22:32:49
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
  | 你们的小f / fzf404 / nmdfzf404 👦
p 
  | 大二艺术生，就读于沈阳理工大学动画专业。
p
  | 修炼中的全栈开发者，左派社会主义接班人，理想主义键政带师。
  br
  | 社会化抚养推动者，继承制及死刑的反对者。
  br
  | 轨道交通迷，有点furry属性。
p
  router-link.fr(to="/") 返回
</template>
