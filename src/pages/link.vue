<!--
 * @Author: fzf404
 * @Date: 2022-02-02 19:08:04
 * @LastEditTime: 2022-09-17 23:28:32
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
  a.pink(href="https://www.ksroido.art/", target="_blank") KSr01dO
  a.blue(href="https://blog.hanbings.io/", target="_blank") 寒冰的猫窝
  a.yellow(href="https://aimerneige.com/", target="_blank") Aimerneige
  a.red(href="https://shakaianee.top/", target="_blank") 社会易姐
  a.green(href="https://rainchan.win/", target="_blank") RainChan
  a.purple(href="https://gxzv.com/", target="_blank") 甘小蔗
  a.orange(href="https://www.widcard.win/", target="_blank") widcardw
p
  a.yellow(href="http://blog.dazecake.moe/", target="_blank") 发呆蛋糕
  a.green(href="https://blog.hackerchai.com/", target="_blank") HackerChai
  a.purple(href="https://www.wangez.site/", target="_blank") Ned
p
  a.blue(href="https://github.com/fzf404/home/issues/new", target="_blank") 提交友链
  a.purple(href="https://www.fzf404.art/public/avatar.jpg", target="_blank") 头像地址
p
  router-link.fr(to="/") 返回
</template>
