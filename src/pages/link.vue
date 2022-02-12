<!--
 * @Author: fzf404
 * @Date: 2022-02-02 19:08:04
 * @LastEditTime: 2022-04-05 22:22:39
 * @Description: 友情链接
-->
<script setup>
import { changeTheme } from 'web-themes/simple/theme'
</script>

<template lang="pug">
h1 
  | 友情链接 
  span.jump(@click="changeTheme") 🎈
h2 
  | All My Friend Links 🍻
p
  a.pink(href="https://github.com/fzf404/home/issues/new", target="_blank") 提交友链
  a.red(href="https://shakaianee.top/", target="_blank") 社会易姐
  a.orange(href="https://aimerneige.com/", target="_blank") aimerneige
  a.yellow(href="http://blog.dazecake.moe/", target="_blank") 发呆蛋糕
  a.yellow-green(href="https://blog.m0re.work/", target="_blank") m0re
  a.green(href="https://blog.hackerchai.com/", target="_blank") HackerChai
  a.blue(href="https://blog.hanbings.io/", target="_blank") 寒冰的猫窝
  a.purple(href="https://www.wangez.site/", target="_blank") Ned
p
  router-link.fr(to="/") 返回
</template>
